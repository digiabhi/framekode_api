const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { ServerConfig, Logger } = require("./config");
const { Morgan } = require("./config");
const { AuthRequestMiddlewares } = require("./middlewares");
const apiRoutes = require("./routes");
const rateLimit = require("express-rate-limit");
const app = express();

// Rate Limiter settings
const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  max: 10, // Limit each IP to 3 requests per `window` in 2 minutes
});

// app.use(limiter);
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  morgan("api-log", {
    stream: Morgan.accessLogStream,
    skip: (req) => req.originalUrl.startsWith("/api-docs"),
  })
);

app.use(
  "/db",
  [AuthRequestMiddlewares.checkAuth],
  createProxyMiddleware({
    target: "http://localhost:8081",
    changeOrigin: true,
    pathRewrite: { "^/db": "/" },
  })
);

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  Logger.info(`Successfully Started Server on PORT: ${ServerConfig.PORT}`);
});

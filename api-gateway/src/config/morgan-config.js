const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

// Get the parent directory of the current module (__dirname)
// eslint-disable-next-line no-undef
const parentDir = path.resolve(__dirname, "..");

// Create the "logs" directory if it doesn't exist
const logsDir = path.join(parentDir, "logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

morgan.token(
  "api-log",
  "[:date[clf]] :method request for :url was received from IP :user-ip having mail adrress :user-email " +
    "It took :total-time[2] milliseconds to be resolved"
);
morgan.token("user-ip", function (req) {
  const ip = req.socket.remoteAddress;
  // Check if it's an IPv6 representation (::ffff:)
  if (ip && ip.startsWith("::ffff:")) {
    // Extract and return the IPv4 address part
    return ip.substring(7);
  }
  // Return the IP as is (assumes it's IPv4)
  return ip;
});
morgan.token("user-email", function getUserEmail(req, res) {
  try {
    if (typeof res.user === "string" && res.user !== null) {
      const email = res.user;
      return email;
    } else {
      // Handle the case where res.user is not an object
      console.error("Email not found in request");
      return "no-email@elk_api.com";
    }
  } catch (error) {
    // Handle any other errors that may occur
    console.error("Error getting email from request:", error);
    return "error@elk_api.com";
  }
});

const accessLogStream = fs.createWriteStream(path.join(logsDir, "access.log"), {
  flags: "a",
});

module.exports = { accessLogStream };

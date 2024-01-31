const express = require("express");

const { UserController } = require("../../controllers");

const router = express.Router();

// /api/v1/users GET
router.get("/", UserController.getAllUsers);

module.exports = router;

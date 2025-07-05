const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../Utils/sendMail");
const sendToken = require("../Utils/jwtToken");
const { isAuthenticated } = require("../middleware/auth");












module.exports = router;
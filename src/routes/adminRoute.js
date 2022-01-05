const express = require('express');
const app = express.Router();
const AdminController = require("../controllers/adminController")

app.get("/dashboard", AdminController.dashboard);

module.exports = app;
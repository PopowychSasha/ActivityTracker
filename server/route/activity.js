const express = require("express");
const routes = express.Router();
const { createActivity, getActivities } = require("../controller/activity");

routes.post("/api/activity", createActivity);
routes.get("/api/activities", getActivities);

module.exports = routes;

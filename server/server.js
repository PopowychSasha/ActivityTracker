const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const activityRoutes = require("./route/activity");
const { checkConnect } = require("./util/database");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(activityRoutes);

app.listen(PORT, () => {
  console.log(`Server is started in PORT ${PORT}`);
  checkConnect();
});

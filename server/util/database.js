const Sequelize = require("sequelize");
const createActivityModal = require("../model/activity");

const sequelize = new Sequelize("activity_tracker", "root", "mainAdmin1", {
  dialect: "mysql",
  host: "localhost",
});

const checkConnect = async () => {
  try {
    /* sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync db.");
    }); */

    await sequelize.authenticate();
    console.log("-------------------");
    console.log("Connection success!!!");
    console.log("-------------------");
  } catch (err) {
    console.log("-------------------");
    console.log(err.message);
    console.log("-------------------");
  }
};

const Activities = createActivityModal(sequelize);

module.exports = {
  checkConnect,
  Activities,
};

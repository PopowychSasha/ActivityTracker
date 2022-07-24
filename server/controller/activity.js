const { Activities } = require("../util/database");

exports.createActivity = (req, res, next) => {
  const { startTime, finishTime, distance, activityType } = req.body;

  Activities.create({
    startTime,
    finishTime,
    distance,
    activityType,
  })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err.message }));
};

exports.getActivities = (req, res, next) => {
  Activities.findAll()
    .then((data) => res.json(data.reverse()))
    .catch((err) => res.json({ message: err.message }));
};

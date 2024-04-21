const TaskModel = require("../Models/TaskModel");

module.exports.getTasks = async (req, res) => {
  const tasks = await TaskModel.find();
  res.send(tasks);
  // res.send("Hi again");
};

module.exports.saveTask = async (req, res) => {
  const { task } = req.body;

  TaskModel.create({ task })
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.updateTask = async (req, res) => {
  const { task } = req.body;
  const { id } = req.params;

  TaskModel.findByIdAndUpdate(id, { task })
    .then(() => res.send("Updated Suceessfully"))
    .catch((err) => {
      console.log(err);
      res.send({
        erroe: err,
        msg: "Something went wornge!",
      });
    });
};

module.exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  // In Express.js, req.params contains route parameters specified in the URL.

  TaskModel.findByIdAndDelete(id)
    .then(() => res.send("Delete Suceessfully"))
    .catch((err) => {
      console.log(err);
      res.send({
        erroe: err,
        msg: "Something went wornge!",
      });
    });
};

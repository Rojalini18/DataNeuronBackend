const TaskModel = require("../Models/TaskModel");

const updateCount = 0

module.exports.getTasks = async (req, res) => {
  const tasks = await TaskModel.find();
  res.send(tasks);
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

  try {
    await TaskModel.findByIdAndUpdate(id, { task });
    console.log("Updated Successfully...");
    updateCount++;
    res.send("Updated Successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: err,
      msg: "Something went wrong!",
    });
  }
};


module.exports.deleteTask = async (req, res) => {
  const { id } = req.params;

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

module.exports.getUpdatedTodosCount = async (req, res) => {
  try {
    const updatedTodosCount = await TaskModel.countDocuments({
      updatedAt: { $exists: true },
    });
    res.send({ count: updatedTodosCount });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};

module.exports.getCreatedTodosCount = async (req, res) => {
  try {
    const createdTodosCount = await TaskModel.countDocuments();
    res.send({ count: createdTodosCount });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};

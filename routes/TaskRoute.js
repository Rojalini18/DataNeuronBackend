const { Router } = require("express");
const {
  getTasks,
  saveTask,
  updateTask,
  deleteTask,
  getUpdatedTodosCount,
  getCreatedTodosCount,
} = require("../controllers/TaskControllers");
const router = Router();

router.get("/get", getTasks);
router.post("/save", saveTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);
router.get("/updatedTodosCount", getUpdatedTodosCount);
router.get("/createdTodosCount", getCreatedTodosCount);

module.exports = router;

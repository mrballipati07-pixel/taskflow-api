const tasks = require("../data/tasks");

// Get all tasks
const getTasks = (req, res) => {
  res.json(tasks);
};

// Get task by ID
const getTaskById = (req, res) => {
  const task = tasks.find(
    (t) => t.id === parseInt(req.params.id)
  );

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  res.json(task);
};

// Create task
const createTask = (req, res) => {
  const newTask = {
    id: Date.now(),
    title: req.body.title,
    completed: false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};

// Update task
const updateTask = (req, res) => {
  const task = tasks.find(
    (t) => t.id === parseInt(req.params.id)
  );

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  task.title = req.body.title || task.title;
  task.completed =
    req.body.completed ?? task.completed;

  res.json(task);
};

// Delete task
const deleteTask = (req, res) => {
  const index = tasks.findIndex(
    (t) => t.id === parseInt(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  tasks.splice(index, 1);

  res.json({
    message: "Task deleted successfully"
  });
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
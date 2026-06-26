const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Import Routes
const taskRoutes = require("./src/routes/taskRoutes");

// Home Route
app.get("/", (req, res) => {
  res.send("TaskFlow API Running...");
});

// Task Routes
app.use("/api/tasks", taskRoutes);

// Handle Invalid Routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
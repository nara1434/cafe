const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();

// DB Connection
const connectDB = require("./config/db");
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require("./routes/authRoutes");
const registrationRoutes = require("./routes/registrationRoutes");

app.use("/api", authRoutes);
app.use("/api", registrationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

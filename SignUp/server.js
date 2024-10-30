const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.static("public"));
app.set("view engine", "ejs");

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/authApp")
  .then(() => console.log("mongodb connected"));

// Routes
app.use("/", authRoutes);

// Listen to server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();
const secretKey = "lfjaforwur9208080#927%&@";

// Sign-Up Route
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 15);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();
  res.redirect("/signin");
});

// Sign-In Route
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true });
    res.redirect("/dashboard");
  } else {
    res.send("Invalid credentials");
  }
});

// Middleware to Protect Dashboard Route
const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, secretKey, (err, user) => {
      if (err) return res.redirect("/signin");
      req.user = user;
      next();
    });
  } else {
    res.redirect("/signin");
  }
};

// Display Sign-Up Page
router.get("/signup", (req, res) => {
  res.render("signup"); // Make sure signup.ejs exists in the views folder
});

// Display Sign-In Page
router.get("/signin", (req, res) => {
  res.render("signin"); // Make sure signin.ejs exists in the views folder
});

// Dashboard Route
router.get("/dashboard", authenticateToken, (req, res) => {
  res.render("dashboard", { username: req.user.username });
});

// Logout Route
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/signin");
});

module.exports = router;

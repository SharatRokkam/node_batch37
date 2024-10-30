const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);

// Summary of this Project
// In this given application, bcryptjs is used to hash and verify passwords during user registration and login. Once a user logs in, a jwt is generated and stored in a cookie(managed by cookie-parser) This token can then be verified on each subsequent request to protect routes and authenticate the user


// username 123 --> username lajflajlfjlajf --> 
//authenticated and authorized...


const express = require("express");
const PORT = 5000;
const app = express();
const urlRoute = require("./routes/url.js");
const { connectToMongoDB } = require("./connect.js");

app.use("/url", urlRoute);

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("mongoDB connected")
);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1>Hello Expres</h1>");
//   res.sendFile("C:/Users/DELL/Desktop/NodeJS_37/8_Oct/index.html");
// });

// app.get("/about", (req, res) => {
//   res.send(`Hi, Mr. ${req.query.name}`);
// });

// API - Endpoint - Route

app.get("/", (req, res) => {
  res.status(200).json({ type: "GET" });
});
app.post("/", (req, res) => {
  res.json({ type: "POST" });
});
app.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
app.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});
app.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

app.listen(5000, () => {
  console.log("server is running at port 5000");
});

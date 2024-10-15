const express = require("express");
const app = express();

const port = 8080;

app.get("/demo", (req, res) => {
  const { name, age, subject } = req.query;
  console.log(req.query);

  res.send(req.query);
});

app.get("/demo/:name/:subject", (req, res) => {
  const { name, subject } = req.params;

  console.log(req.params);

  res.send(req.params);
  
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

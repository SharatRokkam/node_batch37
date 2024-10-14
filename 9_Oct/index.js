const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));

//Middleware
// client and Server

//application level middleware
// app.use((req, res, next) => {
//   console.log(req.path, req.ip, req.method, req.hostname, new Date(), req.get("User-Agent"));
// });

//built in middlware
//bodyParser
// app.use(express.json())
// app.use(express.urlencoded());
// app.use(express.static("public"));

//Route level middleware
const auth = (req, res, next) => {
  if (req.body.password == "123") {
    next();
  } else {
    res.sendStatus(401);
  }
};

// app.use(auth);

//api - endpoint
app.get("/", auth, (req, res) => {
  // res.send("<h1> Hello World </h1>");

  // res.get("Content-Type");
  // res.sendFile()
  res.json({ type: "get" });
});

app.post("/", auth, (req, res) => {
  res.json({ type: "post" });
});

app.put("/", (req, res) => {
  res.json({ type: "put" });
});
app.delete("/", (req, res) => {
  res.json({ type: "delete" });
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});

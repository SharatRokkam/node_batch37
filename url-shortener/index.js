const express = require("express");
const PORT = 5000;
const path = require("path");
const app = express();
const urlRoute = require("./routes/url.js");
const { connectToMongoDB } = require("./connect.js");
const URL = require("./models/url.js");
const staticRoute = require("./routes/staticRoute.js");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", urlRoute);
app.use("/", staticRoute);

app.get("/:shortid", async (req, res) => {
  const shortId = req.params.shortid;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
    { new: true }
  );
  if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  res.redirect(entry.redirectURL);
});

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("mongoDB connected")
);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

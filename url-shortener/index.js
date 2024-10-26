const express = require("express");
const PORT = 5000;
const app = express();
const urlRoute = require("./routes/url.js");
const { connectToMongoDB } = require("./connect.js");
const URL = require("./models/url.js");

app.use(express.json());

app.use("/url", urlRoute);

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
    }
  );
  res.redirect(entry.redirectURL);
});

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("mongoDB connected")
);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

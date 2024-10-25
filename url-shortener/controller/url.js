// const mongoose = require("mongoose");
const URL = require("../models/url.js");
// const shortid = require("shortid");
const nanoid = require("nanoid");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ message: "url not found" });

  const shortID = nanoid();

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [Date.now()],
  });

  return res.json({ id: shortID });
}

module.exports = { handleGenerateNewShortURL };

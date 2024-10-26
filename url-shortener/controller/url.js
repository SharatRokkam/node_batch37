const URL = require("../models/url.js");
const shortid = require("shortid");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ message: "url required" });

  const shortID = shortid();

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

// async function redirectToURL() {
//   const shortId = req.params.shortId;
//   const entry = await URL.findOneAndUpdate(
//     {
//       shortId,
//     },
//     {
//       $push: {
//         visitHistory: {
//           timestamp: Date.now(),
//         },
//       },
//     }
//   );
//   res.redirect(entry.redirectURL);
// }

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;

  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
 
};

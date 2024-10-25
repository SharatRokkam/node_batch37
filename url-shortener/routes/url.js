const express = require("express");

const router = express.Router;
const { handleGenerateNewShortURL } = require("../controller/url");

router.post("/url", handleGenerateNewShortURL);

module.exports = router;

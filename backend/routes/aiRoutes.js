const express = require("express");

const {
  getRecommendation,
} = require("../controllers/aiController");

const router = express.Router();

router.post("/recommend", getRecommendation);

module.exports = router;
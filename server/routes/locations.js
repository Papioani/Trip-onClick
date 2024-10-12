const express = require("express");
const router = express.Router();

// Example route for getting locations
router.get("/", (req, res) => {
  res.json({ message: "Locations route" });
});

module.exports = router;

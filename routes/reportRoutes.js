const express = require("express");
const router = express.Router();
const { generateReport } = require("../controllers/reportController.js");
const { validateMetrics } = require("../middleware/validationMiddleware.js");

router.post("/", validateMetrics, generateReport);

module.exports = router;

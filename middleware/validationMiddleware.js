const validateMetrics = (req, res, next) => {
  const { metrics } = req.body;

  if (!metrics || !Array.isArray(metrics) || metrics.length === 0) {
    return res.status(400).json({ error: "Metrics are required and should be a non-empty array." });
  }

  const sanitizedMetrics = metrics.map((metric) => String(metric).trim());
  req.body.metrics = sanitizedMetrics;

  next();
};

module.exports = { validateMetrics };

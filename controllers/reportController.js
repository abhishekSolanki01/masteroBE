const { writeCsv } = require("../utils/csvWriter");

const generateReport = async (req, res) => {
  try {
    const { metrics } = req.body;

    // Generate dummy data
    const dummyData = Array.from({ length: 10 }, (_, index) => {
      const row = { id: index + 1 };
      metrics.forEach((metric) => {
        row[metric] = `Dummy ${metric} ${index + 1}`;
      });
      return row;
    });

    // Write CSV file
    await writeCsv(metrics, dummyData);

    res.status(200).json({ message: "Report generated.", data: dummyData });
  } catch (error) {
    console.error("Error generating report:", error.message);
    res.status(500).json({ error: "Failed to generate report." });
  }
};

module.exports = { generateReport };

const { createObjectCsvWriter } = require("csv-writer");

const writeCsv = async (metrics, data) => {
  const csvWriter = createObjectCsvWriter({
    path: "custom_report.csv",
    header: metrics.map((metric) => ({ id: metric, title: metric.toUpperCase() })),
  });

  await csvWriter.writeRecords(data);
  console.log("CSV file written successfully.");
};

module.exports = { writeCsv };

const getReport = "SELECT * from report";
const getReportById = "SELECT * FROM report WHERE id = $1";
const checkItemExists = "SELECT s FROM report s WHERE s.item = $1";
const addReport="INSERT INTO report (item, quantity, rate, grand_total) VALUES ($1, $2, $3, $4)";
const removeReport = "DELETE FROM report WHERE id = $1";
const updateReport = "UPDATE report SET item = $1 WHERE id = $2";

module.exports = {
    getReport,
    getReportById,
    checkItemExists,
    addReport,
    removeReport,
    updateReport,
};
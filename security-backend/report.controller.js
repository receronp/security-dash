const dataConn = require('./dataConn');
const mysql = require('mysql');

const getReports = async (req, res) => {
    const pool = await dataConn.getConnection(); 
    const sql = "select id, name, location, description, latitude, longitude, category, report_vehicle from reports";
    pool.query(sql, function (err, result, fields) {
        return res.json(result);
    });
};

const getReportById = async (req, res) => {
    const { id } = req.params;
    const pool = await dataConn.getConnection();
    const sql = "select id, name, location, description, latitude, longitude, category, report_vehicle from reports where id = " + mysql.escape(id);

    pool.query(sql, function (err, result, fields) {
        if (err) throw err;
        return res.json(result);
    });
}

const createReport = async (req, res) => {
    const { name, location, description, latitude, longitude, category, report_vehicle } = req.body;
    const pool = await dataConn.getConnection();
    const sql = "insert into reports(name, location, description, latitude, longitude, category, report_vehicle) values (?)";
    const values = [ name, location, description, latitude, longitude, category, report_vehicle ];

    pool.query(sql, [values], function (err, result) {
        if (err) throw err;
        return res.json("OK");
    });
};

const deleteReport = async (req, res) => {
    const { id } = req.params;
    const pool = await dataConn.getConnection();
    const sql = 'delete from reports where id = ' + mysql.escape(id)

    pool.query(sql, function (err, result) {
        if (err) throw err;
        return res.json("OK");
    });
}

const updateReport = async (req, res) => {
    const { id, name, location, description, latitude, longitude, category, report_vehicle } = req.body;
    const pool = await dataConn.getConnection();
    const sql = "update reports set name = " + mysql.escape(name) + ", location = " + mysql.escape(location) + ", description = " + mysql.escape(description) +
        ", latitude = " + mysql.escape(latitude) + ", longitude = " + mysql.escape(longitude) + ", category = " + mysql.escape(category) +
        ", report_vehicle = " + mysql.escape(report_vehicle) + " where id = " + mysql.escape(id)
    
    pool.query(sql, function (err, result) {
        if (err) throw err;
        return res.json("OK");
    });
}

module.exports = {
    getReports: getReports,
    getReportById: getReportById,
    createReport: createReport,
    deleteReport: deleteReport,
    updateReport: updateReport
}
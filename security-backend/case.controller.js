const dataConn = require('./dataConn');
const mysql = require('mysql');

const getCases = async (req, res) => {
    const pool = await dataConn.getConnection(); 
    const sql = "select id, case_vehicle, success, date, response_time from cases";
    pool.query(sql, function (err, result, fields) {
        return res.json(result);
    });
};

const getCaseCount = async (req, res) => {
    const { vehicle } = req.params;
    const pool = await dataConn.getConnection(); 
    const sql = "select count(*) as cases from cases where case_vehicle = " + mysql.escape(vehicle);
    pool.query(sql, function (err, result, fields) {
        return res.json(result);
    });
};

const getAverageResponseTime = async (req, res) => {
    const { vehicle } = req.params;
    const pool = await dataConn.getConnection(); 
    const sql = "select avg(response_time) as avg_time from cases where case_vehicle = " + mysql.escape(vehicle);
    pool.query(sql, function (err, result, fields) {
        return res.json(result);
    });
};

const getCaseById = async (req, res) => {
    const { id } = req.params;
    const pool = await dataConn.getConnection();
    const sql = "select id, case_vehicle, success, date, response_time from cases where id = " + mysql.escape(id);

    pool.query(sql, function (err, result, fields) {
        if (err) throw err;
        return res.json(result);
    });
}

const createCase = async (req, res) => {
    const { case_vehicle, success, date, response_time } = req.body;
    const pool = await dataConn.getConnection();
    const sql = "insert into cases(case_vehicle, success, date, response_time) values (?)";
    const values = [ case_vehicle, success, date, response_time ];

    pool.query(sql, [values], function (err, result) {
        if (err) throw err;
        return res.json("OK");
    });
};

const deleteCase = async (req, res) => {
    const { id } = req.params;
    const pool = await dataConn.getConnection();
    const sql = 'delete from cases where id = ' + mysql.escape(id)

    pool.query(sql, function (err, result) {
        if (err) throw err;
        return res.json("OK");
    });
}

const updateCase = async (req, res) => {
    const { id, case_vehicle, success, date, response_time } = req.body;
    const pool = await dataConn.getConnection();
    const sql = "update cases set case_vehicle = " + mysql.escape(case_vehicle) + ", success = " + mysql.escape(success) +
        ", date = " + mysql.escape(date) + ", response_time = " + mysql.escape(response_time) + " where id = " + mysql.escape(id)
    
    pool.query(sql, function (err, result) {
        if (err) throw err;
        return res.json("OK");
    });
}

module.exports = {
    getCases: getCases,
    getCaseById: getCaseById,
    createCase: createCase,
    deleteCase: deleteCase,
    updateCase: updateCase,
    getCaseCount: getCaseCount,
    getAverageResponseTime: getAverageResponseTime,
}
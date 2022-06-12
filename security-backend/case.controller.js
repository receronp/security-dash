const dataConn = require('./dataConn');
const mysql = require('mysql');

const getCases = async (req, res) => {
    const pool = await dataConn.getConnection(); 
    const sql = "select id, case_vehicle, success, date from cases";
    pool.query(sql, function (err, result, fields) {
        return res.json(result);
    });
};

const getCaseById = async (req, res) => {
    const { id } = req.params;
    const pool = await dataConn.getConnection();
    const sql = "select id, case_vehicle, success, date from cases where id = " + mysql.escape(id);

    pool.query(sql, function (err, result, fields) {
        if (err) throw err;
        return res.json(result);
    });
}

const createCase = async (req, res) => {
    const { case_vehicle, success, date } = req.body;
    const pool = await dataConn.getConnection();
    const sql = "insert into cases(case_vehicle, success, date) values (?)";
    const values = [ case_vehicle, success, date ];

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
    const { id, case_vehicle, success, date } = req.body;
    const pool = await dataConn.getConnection();
    const sql = "update cases set case_vehicle = " + mysql.escape(case_vehicle) + ", success = " + mysql.escape(success) + ", date = " + mysql.escape(date) + " where id = " + mysql.escape(id)
    
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
    updateCase: updateCase
}
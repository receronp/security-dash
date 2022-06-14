const dataConn = require('./dataConn');
const mysql = require('mysql');


const login = async (req, res) => {
    const { username, password } = req.body;
    const pool = await dataConn.getConnection();
    const sql = "select id, username, name, profile, user_vehicle from users where username = " + mysql.escape(username) + " and password = " + mysql.escape(password);

    pool.query(sql, function (err, result, fields) {
        if (err) throw err;
        return res.json(result);
    });
}

const register = async (req, res) => {
    const { profile, name, username, password, user_vehicle } = req.body;
    const pool = await dataConn.getConnection();
    const sql = "insert into users(username, password, name, profile, user_vehicle) values (?)";
    const values = [ username, password, name, profile, user_vehicle ];

    pool.query(sql, [values], function (err, result, fields) {
        if (err) throw err;
        return res.json(result);
    });
}

module.exports = {
    login: login,
    register: register,
}

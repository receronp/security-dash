const dataConn = require('./dataConn');
const mysql = require('mysql');


const login = async (req, res) => {
    const { username, password } = req.body;
    const pool = await dataConn.getConnection();
    const sql = "select id, username, name, profile from users where username = " + mysql.escape(username) + " and password = " + mysql.escape(password);

    pool.query(sql, function (err, result, fields) {
        if (err) throw err;
        return res.json(result);
    });
}

module.exports = {
    login: login
}

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
    const sql1 = "select id, username, name, profile, user_vehicle from users where username = " + mysql.escape(username);

    pool.query(sql1, function (err1, result1) {
        if (err1) throw err1;
        if (result1.length == 0) {
            const sql = "insert into users(username, password, name, profile, user_vehicle) values (?)";
            const values = [ username, password, name, profile, user_vehicle ];
        
            pool.query(sql, [values], function (err, result) {
                if (err) throw err;
                return res.json(result);
            });
        } else {
            return res.json(null);
        }
    });
}

module.exports = {
    login: login,
    register: register,
}

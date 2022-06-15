const dataConn = require('./dataConn');
const mysql = require('mysql');

const getVehicles = async (req, res) => {
    const pool = await dataConn.getConnection(); 
    const sql = "select id, location, description, latitude, longitude, talks, commute from vehicles";
    pool.query(sql, function (err, result, fields) {
        return res.json(result);
    });
};

const getVehicleById = async (req, res) => {
    const { id } = req.params;
    const pool = await dataConn.getConnection();
    const sql = "select id, location, description, latitude, longitude, talks, commute from vehicles where id = " + mysql.escape(id);

    pool.query(sql, function (err, result, fields) {
        if (err) throw err;
        return res.json(result);
    });
}

const createVehicle = async (req, res) => {
    const { location, description, latitude, longitude, talks, commute } = req.body;
    const pool = await dataConn.getConnection();
    const sql = "insert into vehicles(location, description, latitude, longitude, talks, commute) values (?)";
    const values = [ location, description, latitude, longitude, talks, commute ];

    pool.query(sql, [values], function (err, result) {
        if (err) throw err;
        return res.json("OK");
    });
};

const deleteVehicle = async (req, res) => {
    const { id } = req.params;
    const pool = await dataConn.getConnection();
    const sql = 'delete from vehicles where id = ' + mysql.escape(id)

    pool.query(sql, function (err, result) {
        if (err) throw err;
        return res.json("OK");
    });
}

const updateVehicle = async (req, res) => {
    const { id, location, description, latitude, longitude, talks, commute } = req.body;
    const pool = await dataConn.getConnection();
    const sql = "update vehicles set location = " + mysql.escape(location) + ", description = " + mysql.escape(description) +
        ", latitude = " + mysql.escape(latitude) + ", longitude = " + mysql.escape(longitude) +
        ", talks = " + mysql.escape(talks) + ", commute = " + mysql.escape(commute) + " where id = " + mysql.escape(id)
    
    pool.query(sql, function (err, result) {
        if (err) throw err;
        return res.json("OK");
    });
}

module.exports = {
    getVehicles: getVehicles,
    getVehicleById: getVehicleById,
    createVehicle: createVehicle,
    deleteVehicle: deleteVehicle,
    updateVehicle: updateVehicle
}
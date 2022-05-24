// Paquete necesario para conectar a bases de datos MySQL.
var mysql = require('mysql');

async function getConnection(){
  try {
    const pool = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "security_dashboard",
    });
    return pool;
  }
  catch(error){
    console.error(error);
  }
}

module.exports = {
  getConnection: getConnection
}

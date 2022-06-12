const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const userRoutes = require("./user.routes")
const vehicleRoutes = require("./vehicle.routes")

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.listen(5000);

app.use(userRoutes);
app.use(vehicleRoutes);
console.log("Server listening...");

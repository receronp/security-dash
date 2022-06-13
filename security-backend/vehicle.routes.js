const express = require('express');
const vehicleController = require('./vehicle.controller');
const router = express.Router();

router.get('/vehicle', vehicleController.getVehicles);
router.get('/vehicle/:id', vehicleController.getVehicleById);
router.post('/vehicle', vehicleController.createVehicle);
router.delete('/vehicle/:id', vehicleController.deleteVehicle);
router.put('/vehicle', vehicleController.updateVehicle);

module.exports = router;
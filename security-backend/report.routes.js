const express = require('express');
const reportController = require('./report.controller');
const router = express.Router();

router.get('/report', reportController.getReports);
router.get('/report/:id', reportController.getReportById);
router.get('/report/vehicle/:id', reportController.getReportByVehicleId);
router.post('/report', reportController.createReport);
router.delete('/report/:id', reportController.deleteReport);
router.put('/report', reportController.updateReport);

module.exports = router;
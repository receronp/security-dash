const express = require('express');
const caseController = require('./case.controller');
const router = express.Router();

router.get('/case', caseController.getCases);
router.get('/case/count/:vehicle', caseController.getCaseCount);
router.get('/case/avg_time/:vehicle', caseController.getAverageResponseTime);
router.get('/case/:id', caseController.getCaseById);
router.post('/case', caseController.createCase);
router.delete('/case/:id', caseController.deleteCase);
router.put('/case', caseController.updateCase);

module.exports = router;
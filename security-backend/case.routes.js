const express = require('express');
const caseController = require('./case.controller');
const router = express.Router();

router.get('/case', caseController.getCases);
router.get('/case/:id', caseController.getCaseById);
router.post('/case', caseController.createCase);
router.delete('/case/:id', caseController.deleteCase);
router.put('/case', caseController.updateCase);

module.exports = router;
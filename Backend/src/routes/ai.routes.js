const express = require('express');
const aiController = require('../controllers/ai.controller');
const router = express.Router();

router.post('/post-response', aiController.getResponse);

module.exports = router;
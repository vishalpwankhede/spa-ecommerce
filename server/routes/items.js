const express = require('express');
const router = express.Router();
const { getItems, searchItems } = require('../services/itemService');

router.get('/', getItems);
router.get('/search', searchItems);

module.exports = router;

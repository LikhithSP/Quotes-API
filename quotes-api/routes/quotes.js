const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/quotesController');

router.post('/', ctrl.createQuote);
router.get('/', ctrl.getQuotes);
router.get('/random', ctrl.getRandomQuote);
router.get('/:id', ctrl.getQuoteById);
router.put('/:id', ctrl.updateQuote);
router.delete('/:id', ctrl.deleteQuote);

module.exports = router;

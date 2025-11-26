const Quote = require('../models/Quote');

// Create
exports.createQuote = async (req, res) => {
  try {
    const q = await Quote.create(req.body);
    res.status(201).json(q);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all (with optional filters & search)
exports.getQuotes = async (req, res) => {
  try {
    const { author, category, tag, q } = req.query;
    const filter = {};
    if (author) filter.author = author;
    if (category) filter.category = category;
    if (tag) filter.tags = tag;
    if (q) filter.quote = { $regex: q, $options: 'i' };

    const quotes = await Quote.find(filter).sort({ createdAt: -1 });
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get random
exports.getRandomQuote = async (req, res) => {
  try {
    const count = await Quote.countDocuments();
    if (count === 0) return res.status(404).json({ message: 'No quotes found' });
    const random = Math.floor(Math.random() * count);
    const quote = await Quote.findOne().skip(random);
    res.json(quote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get by id
exports.getQuoteById = async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);
    if (!quote) return res.status(404).json({ message: 'Quote not found' });
    res.json(quote);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID' });
  }
};

// Update
exports.updateQuote = async (req, res) => {
  try {
    const quote = await Quote.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!quote) return res.status(404).json({ message: 'Quote not found' });
    res.json(quote);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteQuote = async (req, res) => {
  try {
    const quote = await Quote.findByIdAndDelete(req.params.id);
    if (!quote) return res.status(404).json({ message: 'Quote not found' });
    res.json({ message: 'Quote deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID' });
  }
};

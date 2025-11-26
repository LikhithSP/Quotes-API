const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  quote: { type: String, required: true, trim: true },
  author: { type: String, default: 'Unknown', trim: true },
  category: { type: String, default: 'General', trim: true },
  tags: { type: [String], default: [] },
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quote', QuoteSchema);

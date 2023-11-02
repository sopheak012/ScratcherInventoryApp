const mongoose = require('mongoose');

// Define the schema for scratcher tickets
const scratcherSchema = new mongoose.Schema({
  scratcherID: {
    type: Number,
    required: true,
    unique: true, // Ensure scratcher numbers are unique
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  scratcherAmount: {
    type: Number,
    required: true,
  },
});

// Create a model from the schema
const Scratcher = mongoose.model('Scratcher', scratcherSchema);

module.exports = Scratcher;

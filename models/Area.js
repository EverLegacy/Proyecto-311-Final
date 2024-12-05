const mongoose = require('mongoose');

// Define the area schema
const AreaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  edificio: {
    type: String,
    required: true
  }
});

// Create the Area model
const Area = mongoose.model('Area', AreaSchema);

module.exports = Area;

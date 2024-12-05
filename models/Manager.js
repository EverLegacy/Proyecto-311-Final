const mongoose = require('mongoose');

// Define the manager schema
const ManagerSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  estudio: {
    type: String,
    required: true
  },
  turno: {
    type: String,
    required: true
  }
});

// Create the Manager model
const Manager = mongoose.model('Manager', ManagerSchema);

module.exports = Manager;

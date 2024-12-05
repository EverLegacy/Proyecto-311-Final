const mongoose = require('mongoose');

// Define el esquema del departamento
const DepartmentSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  encargado: {
    type: String,  // Cambiado de ObjectId a String
    default: ''
  },
  area: {
    type: String,  // Cambiado de ObjectId a String
    default: ''
  }
});

// Crear el modelo del Departamento
const Department = mongoose.model('Department', DepartmentSchema);

module.exports = Department;

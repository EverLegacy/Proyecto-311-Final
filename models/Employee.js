const mongoose = require('mongoose');

// Define el esquema de los empleados
const EmployeeSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  departamento1: {
    type: String,
    default: '',
  },
  departamento2: {
    type: String,
    default: '',
  },
  departamento3: {
    type: String,
    default: '',
  }
});

const Employee = mongoose.model('Employe', EmployeeSchema);

module.exports = Employee;

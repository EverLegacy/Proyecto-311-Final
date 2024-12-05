const Employee = require('../models/Employee');
const Departamento = require('../models/Department'); // Modelo de departamentos

class EmployeeService {
  // Crear un nuevo empleado
  async create(data) {
    try {
      // Validación de departamentos
      const departamentos = [data.departamento1, data.departamento2, data.departamento3].filter(dep => dep);
      if (departamentos.length > 0) {
        const departamentosExistentes = await Departamento.find({ nombre: { $in: departamentos } });
        if (departamentosExistentes.length !== departamentos.length) {
          throw new Error('Uno o más departamentos asignados no existen');
        }
      }

      // Crear el nuevo empleado
      const newEmployee = new Employee(data);
      const savedEmployee = await newEmployee.save();

      return {
        status: 201,
        message: 'Empleado creado exitosamente',
        data: savedEmployee,
      };
    } catch (error) {
      console.error(`Error creando el empleado: ${error.message}`, error.stack); // Detalles de error
      throw new Error(`Error creando el empleado: ${error.message}`);
    }
  }

  // Obtener todos los empleados
  async getAll() {
    try {
      const employees = await Employee.find();
      return {
        status: 200,
        data: employees,
      };
    } catch (error) {
      console.error(`Error obteniendo empleados: ${error.message}`, error.stack); // Detalles de error
      throw new Error(`Error obteniendo empleados: ${error.message}`);
    }
  }

  // Obtener un empleado por su ID
  async getById(id) {
    try {
      const employee = await Employee.findById(id);
      if (!employee) throw new Error('Empleado no encontrado');
      return {
        status: 200,
        data: employee,
      };
    } catch (error) {
      console.error(`Error obteniendo el empleado: ${error.message}`, error.stack); // Detalles de error
      throw new Error(`Error obteniendo el empleado: ${error.message}`);
    }
  }

  // Actualizar un empleado por su ID
  async update(id, changes) {
    try {
      // Validación de departamentos
      const departamentos = [changes.departamento1, changes.departamento2, changes.departamento3].filter(dep => dep);
      if (departamentos.length > 0) {
        const departamentosExistentes = await Departamento.find({ nombre: { $in: departamentos } });
        if (departamentosExistentes.length !== departamentos.length) {
          throw new Error('Uno o más departamentos asignados no existen');
        }
      }

      const updatedEmployee = await Employee.findByIdAndUpdate(id, changes, { new: true });
      if (!updatedEmployee) throw new Error('Empleado no encontrado');
      return {
        status: 200,
        message: 'Empleado actualizado exitosamente',
        data: updatedEmployee,
      };
    } catch (error) {
      console.error(`Error actualizando el empleado: ${error.message}`, error.stack); // Detalles de error
      throw new Error(`Error actualizando el empleado: ${error.message}`);
    }
  }

  // Actualizar parcialmente un empleado por su ID
  async updatePartial(id, changes) {
    try {
      // Validación de departamentos
      const departamentos = [changes.departamento1, changes.departamento2, changes.departamento3].filter(dep => dep);
      if (departamentos.length > 0) {
        const departamentosExistentes = await Departamento.find({ nombre: { $in: departamentos } });
        if (departamentosExistentes.length !== departamentos.length) {
          throw new Error('Uno o más departamentos asignados no existen');
        }
      }

      const updatedEmployee = await Employee.findByIdAndUpdate(id, changes, { new: true });
      if (!updatedEmployee) throw new Error('Empleado no encontrado');
      return {
        status: 200,
        message: 'Empleado actualizado parcialmente',
        data: updatedEmployee,
      };
    } catch (error) {
      console.error(`Error actualizando parcialmente el empleado: ${error.message}`, error.stack); // Detalles de error
      throw new Error(`Error actualizando parcialmente el empleado: ${error.message}`);
    }
  }

  // Eliminar un empleado
  async delete(id) {
    try {
      const employee = await Employee.findById(id);
      if (!employee) throw new Error('Empleado no encontrado');

      // Verificar que el empleado no esté asignado a un departamento existente
      const departamentos = [employee.departamento1, employee.departamento2, employee.departamento3].filter(dep => dep);
      const departamentosExistentes = await Departamento.find({ nombre: { $in: departamentos } });
      if (departamentosExistentes.length > 0) {
        throw new Error('El empleado no puede ser eliminado porque está asignado a uno o más departamentos existentes');
      }

      // Si no tiene departamentos asociados, proceder a eliminar el empleado
      await Employee.findByIdAndDelete(id);

      return {
        status: 200,
        message: 'Empleado eliminado exitosamente',
        data: employee,
      };
    } catch (error) {
      console.error(`Error eliminando el empleado: ${error.message}`, error.stack); // Detalles de error
      throw new Error(`Error eliminando el empleado: ${error.message}`);
    }
  }
}

module.exports = EmployeeService;

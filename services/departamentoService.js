const Departamento = require('../models/Department');
const Empleado = require('../models/Employee');  // Importar el modelo de empleados
const Encargado = require('../models/Manager');  // Importar el modelo de encargados
const Area = require('../models/Area');  // Importar el modelo de áreas

class DepartamentoService {
  // Crear un nuevo departamento
  async create(data) {
    try {
      // Verificar si el área existe, ahora buscando por nombre
      const area = await Area.findOne({ nombre: data.area });
      if (!area) {
        throw new Error('Área no encontrada');
      }

      // Verificar si el encargado existe, ahora buscando por nombre
      const encargado = await Encargado.findOne({ nombre: data.encargado });
      if (data.encargado && !encargado) {
        throw new Error('Encargado no encontrado');
      }

      const newDepartment = new Departamento(data);
      await newDepartment.save();
      return {
        status: 201,
        message: 'Departamento creado exitosamente',
        data: newDepartment
      };
    } catch (error) {
      throw new Error('Error al crear el departamento: ' + error.message);
    }
  }

  // Obtener todos los departamentos
  async getAll() {
    try {
      const departamentos = await Departamento.find();
      return {
        status: 200,
        data: departamentos
      };
    } catch (error) {
      throw new Error('Error al obtener los departamentos');
    }
  }

  // Obtener un departamento por su ID
  async getById(id) {
    try {
      const departamento = await Departamento.findById(id);
      if (!departamento) throw new Error('Departamento no encontrado');
      return {
        status: 200,
        data: departamento
      };
    } catch (error) {
      throw new Error('Error al obtener el departamento');
    }
  }

  // Actualizar un departamento por su ID
  async update(id, changes) {
    try {
      // Verificar si el área existe, buscando por nombre
      if (changes.area) {
        const area = await Area.findOne({ nombre: changes.area });
        if (!area) {
          throw new Error('Área no encontrada');
        }
      }

      // Verificar si el encargado existe, buscando por nombre
      if (changes.encargado) {
        const encargado = await Encargado.findOne({ nombre: changes.encargado });
        if (!encargado) {
          throw new Error('Encargado no encontrado');
        }
      }

      const departamento = await Departamento.findByIdAndUpdate(id, changes, { new: true });
      if (!departamento) throw new Error('Departamento no encontrado');
      return {
        status: 200,
        message: 'Departamento actualizado exitosamente',
        data: departamento
      };
    } catch (error) {
      throw new Error('Error al actualizar el departamento: ' + error.message);
    }
  }

  // Actualizar parcialmente un departamento por su ID
  async updatePartial(id, changes) {
    try {
      // Verificar si el área existe, buscando por nombre
      if (changes.area) {
        const area = await Area.findOne({ nombre: changes.area });
        if (!area) {
          throw new Error('Área no encontrada');
        }
      }

      // Verificar si el encargado existe, buscando por nombre
      if (changes.encargado) {
        const encargado = await Encargado.findOne({ nombre: changes.encargado });
        if (!encargado) {
          throw new Error('Encargado no encontrado');
        }
      }

      const departamento = await Departamento.findByIdAndUpdate(id, changes, { new: true });
      if (!departamento) throw new Error('Departamento no encontrado');
      return {
        status: 200,
        message: 'Departamento actualizado parcialmente',
        data: departamento
      };
    } catch (error) {
      throw new Error('Error al actualizar parcialmente el departamento: ' + error.message);
    }
  }

  // Eliminar un departamento por su ID
  async delete(id) {
    try {
      // Verificar si el departamento tiene empleados asignados
      const empleados = await Empleado.find({ departamento: id });
      if (empleados.length > 0) {
        throw new Error('El departamento no puede eliminarse porque tiene empleados asignados');
      }

      // Verificar si el departamento tiene encargado asignado
      const departamento = await Departamento.findById(id);
      if (departamento && departamento.encargado) {
        throw new Error('El departamento no puede eliminarse porque tiene un encargado asignado');
      }

      const departamentoEliminado = await Departamento.findByIdAndDelete(id);
      if (!departamentoEliminado) throw new Error('Departamento no encontrado');
      return {
        status: 200,
        message: 'Departamento eliminado exitosamente',
        data: departamentoEliminado
      };
    } catch (error) {
      throw new Error('Error al eliminar el departamento: ' + error.message);
    }
  }
}

module.exports = DepartamentoService;

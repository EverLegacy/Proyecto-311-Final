const Manager = require('../models/Manager');  // Asegúrate de que el modelo de Manager esté correctamente importado.
const Departamento = require('../models/Department'); // Modelo de departamentos

class ManagerService {
  // Obtener todos los encargados
  async getAll() {
    try {
      const encargados = await Manager.find();
      return { status: 200, data: encargados };
    } catch (error) {
      throw new Error('Error al obtener los encargados');
    }
  }

  // Obtener un encargado por su ID
  async getById(id) {
    try {
      const encargado = await Manager.findById(id);
      if (!encargado) {
        throw new Error('Encargado no encontrado');
      }
      return { status: 200, data: encargado };
    } catch (error) {
      throw new Error('Error al obtener el encargado');
    }
  }

  // Crear un nuevo encargado
  async create(data) {
    try {
      const newManager = new Manager(data);
      const savedManager = await newManager.save();
      return {
        status: 201,
        message: 'Encargado creado exitosamente',
        data: savedManager
      };
    } catch (error) {
      throw new Error('Error al crear el encargado');
    }
  }

  // Actualizar un encargado por su ID
  async update(id, data) {
    try {
      const updatedManager = await Manager.findByIdAndUpdate(id, data, { new: true });
      if (!updatedManager) {
        throw new Error('Encargado no encontrado');
      }
      return {
        status: 200,
        message: 'Encargado actualizado exitosamente',
        data: updatedManager
      };
    } catch (error) {
      throw new Error('Error al actualizar el encargado');
    }
  }

  // Actualizar parcialmente un encargado por su ID
  async updatePartial(id, data) {
    try {
      const updatedManager = await Manager.findByIdAndUpdate(id, data, { new: true });
      if (!updatedManager) {
        throw new Error('Encargado no encontrado');
      }
      return {
        status: 200,
        message: 'Encargado actualizado parcialmente',
        data: updatedManager
      };
    } catch (error) {
      throw new Error('Error al actualizar parcialmente el encargado');
    }
  }

  // Eliminar un encargado por su ID
  async delete(id) {
    try {
      const encargado = await Manager.findById(id);
      if (!encargado) {
        throw new Error('Encargado no encontrado');
      }

      // Verificar si el encargado está asignado a algún departamento
      const departamentoConEncargado = await Departamento.findOne({ encargado: encargado._id });

      if (departamentoConEncargado) {
        throw new Error('No se puede eliminar el encargado porque está asignado a un departamento.');
      }

      // Eliminar al encargado si no está asignado a ningún departamento
      const deletedManager = await Manager.findByIdAndDelete(id);
      return {
        status: 200,
        message: 'Encargado eliminado exitosamente',
        data: deletedManager
      };
    } catch (error) {
      throw new Error('Error al eliminar el encargado');
    }
  }
}

module.exports = ManagerService;

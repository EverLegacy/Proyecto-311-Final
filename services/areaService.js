const Area = require('../models/Area');  // Importamos el modelo de Mongoose
const Departamento = require('../models/Department');  // Importamos el modelo de Departamento

class AreaService {
  async create(data) {
    try {
      const newArea = new Area(data);  // Creamos una nueva instancia del modelo Area
      await newArea.save();  // Guardamos en MongoDB
      return {
        status: 201,
        message: 'Área creada exitosamente',
        data: newArea,
      };
    } catch (error) {
      throw new Error('Error creando el área');
    }
  }

  async getAll() {
    try {
      const areas = await Area.find();  // Encontramos todas las áreas
      return {
        status: 200,
        data: areas,
      };
    } catch (error) {
      throw new Error('Error obteniendo las áreas');
    }
  }

  async getById(id) {
    try {
      const area = await Area.findById(id);  // Buscamos el área por su ID
      if (!area) throw new Error('Área no encontrada');
      return {
        status: 200,
        data: area,
      };
    } catch (error) {
      throw new Error('Error obteniendo el área');
    }
  }

  async update(id, changes) {
    try {
      const updatedArea = await Area.findByIdAndUpdate(id, changes, { new: true });  // Actualizamos el área
      if (!updatedArea) throw new Error('Área no encontrada');
      return {
        status: 200,
        message: 'Área actualizada exitosamente',
        data: updatedArea,
      };
    } catch (error) {
      throw new Error('Error actualizando el área');
    }
  }

  async updatePartial(id, changes) {
    try {
      const updatedArea = await Area.findByIdAndUpdate(id, changes, { new: true });  // Actualización parcial
      if (!updatedArea) throw new Error('Área no encontrada');
      return {
        status: 200,
        message: 'Área actualizada parcialmente',
        data: updatedArea,
      };
    } catch (error) {
      throw new Error('Error actualizando parcialmente el área');
    }
  }

  async delete(id) {
    try {

      // Si no está asignada a un departamento, proceder con la eliminación
      const deletedArea = await Area.findByIdAndDelete(id);
      return {
        status: 200,
        message: 'Área eliminada exitosamente',
        data: deletedArea,
      };
    } catch (error) {
      throw new Error('Error eliminando el área');
    }
  }
}

module.exports = AreaService;

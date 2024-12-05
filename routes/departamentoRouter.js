const express = require('express');
const DepartamentoService = require('../services/departamentoService');
const router = express.Router();
const service = new DepartamentoService();
const Area = require('../models/Area');
const Encargado = require('../models/Manager');

/**
 * @swagger
 * tags:
 *   name: Departamentos
 *   description: Funciones para gestionar los departamentos
 */

/**
 * @swagger
 * /departamentos:
 *   post:
 *     summary: Crea un nuevo departamento
 *     tags: [Departamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Department'
 *     responses:
 *       201:
 *         description: Departamento creado
 *       400:
 *         description: Error de validación de datos
 */
router.post('/', async (req, res, next) => {
  try {
    const { area, encargado } = req.body;

    // Verificar si el nombre del área es válido
    const areaExists = await Area.findOne({ nombre: area });
    if (!areaExists) {
      return res.status(400).json({ message: 'Área no encontrada' });
    }

    // Verificar si el nombre del encargado es válido (si se proporciona)
    if (encargado) {
      const encargadoExists = await Encargado.findOne({ nombre: encargado });
      if (!encargadoExists) {
        return res.status(400).json({ message: 'Encargado no encontrado' });
      }
    }

    const result = await service.create(req.body);
    res.status(result.status).json(result);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /departamentos/{id}:
 *   get:
 *     summary: Obtener un departamento por su ID
 *     tags: [Departamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID del departamento
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Departamento encontrado
 *       404:
 *         description: Departamento no encontrado
 */
router.get('/:id', async (req, res, next) => {
  try {
    const result = await service.getById(req.params.id);
    res.status(result.status).json(result);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /departamentos:
 *   get:
 *     summary: Obtener todos los departamentos
 *     tags: [Departamentos]
 *     responses:
 *       200:
 *         description: Lista de departamentos
 */
router.get('/', async (req, res, next) => {
  try {
    const result = await service.getAll();
    res.status(result.status).json(result);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /departamentos/{id}:
 *   put:
 *     summary: Actualiza un departamento por su ID
 *     tags: [Departamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID del departamento
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Department'
 *     responses:
 *       200:
 *         description: Departamento actualizado
 *       404:
 *         description: Departamento no encontrado
 */
router.put('/:id', async (req, res, next) => {
  try {
    const { area, encargado } = req.body;

    // Verificar si el nombre del área es válido
    if (area) {
      const areaExists = await Area.findOne({ nombre: area });
      if (!areaExists) {
        return res.status(400).json({ message: 'Área no encontrada' });
      }
    }

    // Verificar si el nombre del encargado es válido (si se proporciona)
    if (encargado) {
      const encargadoExists = await Encargado.findOne({ nombre: encargado });
      if (!encargadoExists) {
        return res.status(400).json({ message: 'Encargado no encontrado' });
      }
    }

    const result = await service.update(req.params.id, req.body);
    res.status(result.status).json(result);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /departamentos/{id}:
 *   patch:
 *     summary: Actualiza parcialmente un departamento por su ID
 *     tags: [Departamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID del departamento
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Department'
 *     responses:
 *       200:
 *         description: Departamento actualizado parcialmente
 *       404:
 *         description: Departamento no encontrado
 */
router.patch('/:id', async (req, res, next) => {
  try {
    const { area, encargado } = req.body;

    // Verificar si el nombre del área es válido
    if (area) {
      const areaExists = await Area.findOne({ nombre: area });
      if (!areaExists) {
        return res.status(400).json({ message: 'Área no encontrada' });
      }
    }

    // Verificar si el nombre del encargado es válido (si se proporciona)
    if (encargado) {
      const encargadoExists = await Encargado.findOne({ nombre: encargado });
      if (!encargadoExists) {
        return res.status(400).json({ message: 'Encargado no encontrado' });
      }
    }

    const result = await service.updatePartial(req.params.id, req.body);
    res.status(result.status).json(result);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /departamentos/{id}:
 *   delete:
 *     summary: Eliminar un departamento por su ID
 *     tags: [Departamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID del departamento
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Departamento eliminado
 *       404:
 *         description: Departamento no encontrado
 */
router.delete('/:id', async (req, res, next) => {
  try {
    const result = await service.delete(req.params.id);
    res.status(result.status).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

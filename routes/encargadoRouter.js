const express = require('express');
const ManagerService = require('../services/managerService');
const router = express.Router();
const service = new ManagerService();

/**
 * @swagger
 * tags:
 *   name: Encargados
 *   description: Funciones para gestionar encargados
 */

/**
 * @swagger
 * /encargados:
 *   get:
 *     summary: Obtener todos los encargados
 *     tags: [Encargados]
 *     responses:
 *       200:
 *         description: Lista de encargados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nombre:
 *                     type: string
 *                   estudio:
 *                     type: string
 *                   turno:
 *                     type: string
 */
router.get('/', async (req, res, next) => {
  try {
    const result = await service.getAll();
    res.status(result.status).json(result.data);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /encargados/{id}:
 *   get:
 *     summary: Obtener un encargado por su ID
 *     tags: [Encargados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Encargado encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                   type: string
 *                 estudio:
 *                   type: string
 *                 turno:
 *                   type: string
 *       404:
 *         description: Encargado no encontrado
 */
router.get('/:id', async (req, res, next) => {
  try {
    const result = await service.getById(req.params.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /encargados:
 *   post:
 *     summary: Crear un nuevo encargado
 *     tags: [Encargados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               estudio:
 *                 type: string
 *               turno:
 *                 type: string
 *     responses:
 *       201:
 *         description: Encargado creado exitosamente
 */
router.post('/', async (req, res, next) => {
  try {
    const result = await service.create(req.body);
    res.status(result.status).json(result);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /encargados/{id}:
 *   put:
 *     summary: Actualizar un encargado por su ID
 *     tags: [Encargados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               estudio:
 *                 type: string
 *               turno:
 *                 type: string
 *     responses:
 *       200:
 *         description: Encargado actualizado exitosamente
 */
router.put('/:id', async (req, res, next) => {
  try {
    const result = await service.update(req.params.id, req.body);
    res.status(result.status).json(result);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /encargados/{id}:
 *   patch:
 *     summary: Actualizar parcialmente un encargado por su ID
 *     tags: [Encargados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               estudio:
 *                 type: string
 *               turno:
 *                 type: string
 *     responses:
 *       200:
 *         description: Encargado actualizado parcialmente
 */
router.patch('/:id', async (req, res, next) => {
  try {
    const result = await service.updatePartial(req.params.id, req.body);
    res.status(result.status).json(result);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /encargados/{id}:
 *   delete:
 *     summary: Eliminar un encargado por su ID
 *     tags: [Encargados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Encargado eliminado exitosamente
 *       404:
 *         description: Encargado no encontrado
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

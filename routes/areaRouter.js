const express = require('express');
const AreaService = require('../services/areaService');
const router = express.Router();
const service = new AreaService();

/**
 * @swagger
 * tags:
 *   name: Áreas
 *   description: Funciones de áreas
 */

/**
 * @swagger
 * /areas:
 *   get:
 *     summary: Muestra la lista de áreas
 *     tags: [Áreas]
 *     responses:
 *       200:
 *         description: Lista de áreas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Area'
 */
router.get('/', async (req, res, next) => {
  try {
    const areas = await service.getAll();
    res.status(areas.status).json(areas.data);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /areas/{id}:
 *   get:
 *     summary: Muestra un área por su ID
 *     tags: [Áreas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Área encontrada
 *       404:
 *         description: Área no encontrada
 */
router.get('/:id', async (req, res, next) => {
  try {
    const area = await service.getById(req.params.id);
    res.status(area.status).json(area.data);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /areas:
 *   post:
 *     summary: Crea una nueva área
 *     tags: [Áreas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Area'
 *     responses:
 *       201:
 *         description: Área creada
 */
router.post('/', async (req, res, next) => {
  try {
    const newArea = await service.create(req.body);
    res.status(newArea.status).json(newArea);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /areas/{id}:
 *   put:
 *     summary: Actualiza un área por su ID
 *     tags: [Áreas]
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
 *             $ref: '#/components/schemas/Area'
 *     responses:
 *       200:
 *         description: Área actualizada
 */
router.put('/:id', async (req, res, next) => {
  try {
    const updatedArea = await service.update(req.params.id, req.body);
    res.status(updatedArea.status).json(updatedArea);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /areas/{id}:
 *   patch:
 *     summary: Actualiza parcialmente un área por su ID
 *     tags: [Áreas]
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
 *             $ref: '#/components/schemas/Area'
 *     responses:
 *       200:
 *         description: Área actualizada parcialmente
 */
router.patch('/:id', async (req, res, next) => {
  try {
    const updatedArea = await service.updatePartial(req.params.id, req.body);
    res.status(updatedArea.status).json(updatedArea);
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /areas/{id}:
 *   delete:
 *     summary: Elimina un área por su ID
 *     tags: [Áreas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Área eliminada
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

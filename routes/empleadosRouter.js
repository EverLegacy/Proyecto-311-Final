const express = require('express');
const EmployeeService = require('../services/employeeService');
const router = express.Router();
const service = new EmployeeService();

/**
 * @swagger
 * tags:
 *   name: Empleados
 *   description: Gestión de empleados
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       required:
 *         - nombre
 *         - apellido
 *         - edad
 *         - genero
 *       properties:
 *         nombre:
 *           type: string
 *           example: "Juan"
 *         apellido:
 *           type: string
 *           example: "García"
 *         edad:
 *           type: integer
 *           example: 25
 *         genero:
 *           type: string
 *           example: "Hombre"
 *         departamento1:
 *           type: string
 *           example: "Recursos Humanos"
 *         departamento2:
 *           type: string
 *           example: "Finanzas"
 *         departamento3:
 *           type: string
 *           example: "Marketing"
 */

/**
 * @swagger
 * /empleados:
 *   get:
 *     summary: Muestra la lista de empleados
 *     tags: [Empleados]
 *     responses:
 *       200:
 *         description: Lista de empleados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 */
router.get('/', async (req, res, next) => {
  try {
    const result = await service.getAll();
    res.status(result.status).json(result.data);
  } catch (error) {
    console.error(`Error obteniendo empleados: ${error.message}`, error.stack);
    next(error);
  }
});

/**
 * @swagger
 * /empleados/{id}:
 *   get:
 *     summary: Obtiene un empleado por su ID
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID del empleado
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Empleado encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       404:
 *         description: Empleado no encontrado
 */
router.get('/:id', async (req, res, next) => {
  try {
    const result = await service.getById(req.params.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    console.error(`Error obteniendo el empleado: ${error.message}`, error.stack);
    next(error);
  }
});

/**
 * @swagger
 * /empleados:
 *   post:
 *     summary: Crea un nuevo empleado
 *     tags: [Empleados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       201:
 *         description: Empleado creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       400:
 *         description: Error al crear el empleado
 */
router.post('/', async (req, res, next) => {
  try {
    const result = await service.create(req.body);
    res.status(result.status).json(result);
  } catch (error) {
    console.error(`Error en la creación de empleado: ${error.message}`, error.stack);
    next(error);
  }
});

/**
 * @swagger
 * /empleados/{id}:
 *   put:
 *     summary: Actualiza un empleado por su ID
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID del empleado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       200:
 *         description: Empleado actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       404:
 *         description: Empleado no encontrado
 */
router.put('/:id', async (req, res, next) => {
  try {
    const result = await service.update(req.params.id, req.body);
    res.status(result.status).json(result);
  } catch (error) {
    console.error(`Error actualizando el empleado: ${error.message}`, error.stack);
    next(error);
  }
});

/**
 * @swagger
 * /empleados/{id}:
 *   patch:
 *     summary: Actualiza parcialmente un empleado
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID del empleado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       200:
 *         description: Empleado actualizado parcialmente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       404:
 *         description: Empleado no encontrado
 */
router.patch('/:id', async (req, res, next) => {
  try {
    const result = await service.updatePartial(req.params.id, req.body);
    res.status(result.status).json(result);
  } catch (error) {
    console.error(`Error actualizando parcialmente el empleado: ${error.message}`, error.stack);
    next(error);
  }
});

/**
 * @swagger
 * /empleados/{id}:
 *   delete:
 *     summary: Elimina un empleado por su ID
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID del empleado
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Empleado eliminado
 *       404:
 *         description: Empleado no encontrado
 */
router.delete('/:id', async (req, res, next) => {
  try {
    const result = await service.delete(req.params.id);
    res.status(result.status).json(result);
  } catch (error) {
    console.error(`Error eliminando el empleado: ${error.message}`, error.stack);
    next(error);
  }
});

module.exports = router;

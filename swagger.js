// swagger.js
const SwaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Configuration for Swagger
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Employee Management API',
    version: '1.0.0',
    description: 'API documentation for managing employees, departments, areas, and managers',
  },
  servers: [
    {
      url: 'http://localhost:3000/api/v1', // Your API server URL
      description: 'Development Server',   // Server description
    },
  ],
  components: {
    schemas: {
      Employee: {
        type: 'object',
        properties: {
          nombre: {
            type: 'string',
            description: 'First name of the employee',
          },
          apellido: {
            type: 'string',
            description: 'Last name of the employee',
          },
          edad: {
            type: 'integer',
            description: 'Email address of the employee',
          },
          genero: {
            type: 'string',
            description: 'Gender of the employee',
          },
          departamento1: {
            type: 'string',
            description: 'The first department the employee is assigned to',
          },
          departamento2: {
            type: 'string',
            description: 'The second department the employee is assigned to',
          },
          departamento3: {
            type: 'string',
            description: 'The third department the employee is assigned to',
          },
        },
      },
      Department: {
        type: 'object',
        properties: {
          nombre: {
            type: 'string',
            description: 'Name of the department',
          },
          encargado: {
            type: 'string',
            description: 'Manager of the department',
          },
          area: {
            type: 'string',
            description: 'Area associated with the department',
          },
        },
      },
      Manager: {
        type: 'object',
        properties: {
          nombre: {
            type: 'string',
            description: 'Name of the manager',
          },
          estudio: {
            type: 'string',
            description: 'The manager’s area of study or qualification',
          },
          turno: {
            type: 'string',
            description: 'The shift of the manager (e.g., morning, evening)',
          },
        },
      },
      Area: {
        type: 'object',
        properties: {
          nombre: {
            type: 'string',
            description: 'The name of the area',
          },
          edificio: {
            type: 'string',
            description: 'Building associated with the area',
          },
        },
      },
    },
  },
};

// Swagger options, including the path to your route files
const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Path to your route files for auto-documented routes
};

// Generate Swagger spec
const swaggerSpec = SwaggerJSDoc(options);

function setupSwagger(app) {
  // Serve Swagger UI
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;

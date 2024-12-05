const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');  // MongoDB connection
const setupSwagger = require('./swagger');
const empleadosRouter = require('./routes/empleadosRouter');
const encargadoRouter = require('./routes/encargadoRouter');
const departamentoRouter = require('./routes/departamentoRouter');
const areaRouter = require('./routes/areaRouter');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Set up routes
app.use('/api/v1/empleados', empleadosRouter);
app.use('/api/v1/encargados', encargadoRouter);
app.use('/api/v1/departamentos', departamentoRouter);
app.use('/api/v1/areas', areaRouter);

// Default route
app.get("/", (req, res) => {
    res.send("Hola, sirve express");
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Set up Swagger documentation
setupSwagger(app);

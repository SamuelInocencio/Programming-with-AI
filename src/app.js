const express = require('express');
const taskRoutes = require('./taskRoutes'); // Importa as rotas de tarefas
const errorHandler = require('./errorHandler'); // Middleware para tratamento de erros

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rotas da aplicação
app.use('/api/tasks', taskRoutes);

// Middleware para tratamento de erros
app.use(errorHandler);

module.exports = app;
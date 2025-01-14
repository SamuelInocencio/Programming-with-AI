const express = require('express');
const router = express.Router();
const taskController = require('./taskController');

// Rota para obter todas as tarefas
router.get('/', taskController.getAllTasks);

// Rota para criar uma nova tarefa
router.post('/', taskController.createTask);

// Rota para atualizar uma tarefa pelo ID
router.put('/:id', taskController.updateTask);

// Rota para excluir uma tarefa pelo ID
router.delete('/:id', taskController.deleteTask);

module.exports = router;
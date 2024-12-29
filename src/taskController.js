const taskModel = require('./taskModel');

// Retorna todas as tarefas
exports.getAllTasks = async (req, res, next) => {
    try {
        const tasks = await taskModel.getAll();
        res.status(200).json(tasks);
    } catch (error) {
        next(error); // Passa o erro para o middleware de tratamento
    }
};

// Cria uma nova tarefa
exports.createTask = async (req, res, next) => {
    try {
        const {
            title,
            description
        } = req.body;
        const newTask = await taskModel.create({
            title,
            description
        });
        res.status(201).json(newTask);
    } catch (error) {
        next(error);
    }
};

// Atualiza uma tarefa existente
exports.updateTask = async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const updatedTask = await taskModel.update(id, req.body);
        res.status(200).json(updatedTask);
    } catch (error) {
        next(error);
    }
};

// Exclui uma tarefa existente
exports.deleteTask = async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        await taskModel.delete(id);
        res.status(204).send(); // No Content
    } catch (error) {
        next(error);
    }
};
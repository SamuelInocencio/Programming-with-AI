const db = require('../config/dbConfig'); // Banco de dados simulado (SQLite ou similar)

// Obtém todas as tarefas
exports.getAll = async () => {
    const rows = await db.query('SELECT * FROM tasks');
    return rows;
};

// Cria uma nova tarefa
exports.create = async (task) => {
    const {
        title,
        description
    } = task;
    const result = await db.query(
        'INSERT INTO tasks (title, description) VALUES (?, ?)',
        [title, description]
    );
    return {
        id: result.insertId,
        ...task
    };
};

// Atualiza uma tarefa existente
exports.update = async (id, task) => {
    const {
        title,
        description
    } = task;
    await db.query(
        'UPDATE tasks SET title = ?, description = ? WHERE id = ?',
        [title, description, id]
    );
    return {
        id,
        title,
        description
    };
};

// Exclui uma tarefa existente
exports.delete = async (id) => {
    await db.query('DELETE FROM tasks WHERE id = ?', [id]);
};
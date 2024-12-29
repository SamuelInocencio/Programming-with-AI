const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./tasks.db');

// Inicializa o banco de dados com a tabela de tarefas
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT
        )
    `);
});

module.exports = {
    query: (sql, params = []) =>
        new Promise((resolve, reject) => {
            db.all(sql, params, (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        }),
    connect: (callback) => callback(),
};
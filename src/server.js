const app = require('./app'); // Importa o app configurado
const dbConfig = require('../config/dbConfig'); // Conecta ao banco de dados

const PORT = process.env.PORT || 3000;

// Inicializa o servidor após conectar ao banco de dados
dbConfig.connect(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
});
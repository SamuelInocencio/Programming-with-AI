module.exports = (err, req, res, next) => {
    console.error(err.stack); // Loga o erro no console
    res.status(500).json({
        message: 'Ocorreu um erro no servidor.',
        error: err.message
    });
};
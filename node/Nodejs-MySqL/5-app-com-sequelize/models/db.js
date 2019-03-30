const Sequelize = require('sequelize')

    // Conexão com o banco de dados mysql
    const sequelize = new Sequelize('postapp', 'root', 'GlAGMs34', {
        host: "localhost",
        dialect: 'mysql'
    })
module.exports = {
    Sequilize: Sequelize,
    sequelize: sequelize
}
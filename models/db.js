const { Sequelize } = require('sequelize');

module.exports = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:sa@localhost:5432/note', {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
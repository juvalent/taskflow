const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Task = sequelize.define('Task', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descricao: {
        type: DataTypes.STRING
    },

    concluida: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Task;
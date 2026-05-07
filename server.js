require('dotenv').config();

const express = require('express');
const cors = require('cors');

const sequelize = require('./database');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);

sequelize.sync().then(() => {
    console.log('Banco sincronizado');

    app.listen(3000, () => {
        console.log('Servidor rodando');
    });
});
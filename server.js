require('dotenv').config();

const express = require('express');
const cors = require('cors');

const sequelize = require('./database');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync()
    .then(() => {
        console.log('Banco sincronizado');

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Erro ao conectar no banco:', error);
    });
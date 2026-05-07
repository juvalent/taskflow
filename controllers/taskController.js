const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);

        if (!task) {
            return res.status(404).json({ error: "Task não encontrada" });
        }

        await task.update(req.body);
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);

        if (!task) {
            return res.status(404).json({ error: "Task não encontrada" });
        }

        await task.destroy();
        res.json({ message: "Deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Tarefa não encontrada"
            });
        }

        res.json(task);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
exports.concluirTask = async (req, res) => {
    try {

        const task = await Task.findByPk(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Tarefa não encontrada"
            });
        }

        task.concluida = true;

        await task.save();

        res.json(task);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.getConcluidas = async (req, res) => {
    try {

        const tasks = await Task.findAll({
            where: {
                concluida: true
            }
        });

        res.json(tasks);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
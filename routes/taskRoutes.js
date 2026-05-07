const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

router.post('/', taskController.createTask);
router.get('/', taskController.getTasks);
router.get('/concluidas', taskController.getConcluidas);
router.get('/:id', taskController.getTaskById);
router.put('/:id', taskController.updateTask);
router.patch('/:id/concluir', taskController.concluirTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
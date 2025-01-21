const express = require('express');
const { getTask, addTask, updateTask, deleteTask } = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, getTask);
router.post('/', protect, addTask);
router.put('/:id', protect, updateTask);
router.get('/:id', protect, deleteTask);

module.exports = router;
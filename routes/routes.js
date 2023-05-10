const express = require('express')
const router = express.Router();
const { home } = require('../controllers/home')
const { createTodo } = require('../controllers/createTodo')
const { getTodos } = require('../controllers/getTodos');
const { deleteTodo } = require('../controllers/deleteTodo');
const { editTodo } = require('../controllers/editTodo');
const { createTodoTask } = require('../controllers/createTodoTask');
const { getTodoTasks } = require('../controllers/getTodoTasks');
const { deleteTodoTask } = require('../controllers/deleteTodoTask');
const { editTodoTask } = require('../controllers/editTodoTask');

// Path
router.get('/', home)
router.post('/createTodo', createTodo)
router.get('/getTodos', getTodos)
router.put('/editTodo/:id', editTodo)
router.delete('/deleteTodo/:id', deleteTodo)
router.post('/createTodoTask/:id', createTodoTask)
router.get('/getTodoTasks/:id', getTodoTasks)
router.delete('/deleteTodoTask/:id', deleteTodoTask)
router.put('/editTodoTask/:id', editTodoTask)

module.exports = router;
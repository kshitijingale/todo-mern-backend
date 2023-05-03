const express = require('express')
const router = express.Router();
const { home } = require('../controllers/home')
const { createTodos } = require('../controllers/createTodos')
const { getTodos } = require('../controllers/getTodos');
const { deleteTodos } = require('../controllers/deleteTodos');
const { editTodos } = require('../controllers/editTodos');

// Path
router.get('/', home)
router.post('/createTodos', createTodos)
router.get('/getTodos', getTodos)
router.put('/editTodos/:id', editTodos)
router.delete('/deleteTodos/:id', deleteTodos)

module.exports = router;
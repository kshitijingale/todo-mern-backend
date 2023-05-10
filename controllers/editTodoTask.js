const Todo = require("../model/Todo");

exports.editTodoTask = async (req, res) => {
    try {
        const taskIndex = req.body.taskIndex;
        const editedTask = req.body.editedTask;
        const todoId = req.params.id;
        const todo = await Todo.findById(todoId)
        todo.tasks[taskIndex] = editedTask;
        await todo.save();

        res.status(200).json({
            sucess: true,
            todo
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
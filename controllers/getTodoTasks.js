const Todo = require("../model/Todo");

exports.getTodoTasks = async (req, res) => {
    try {
        const todoId = req.params.id;
        const todo = await Todo.findById(todoId);

        const tasks = todo.tasks;

        res.status(200).json({
            success: true,
            tasks,
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
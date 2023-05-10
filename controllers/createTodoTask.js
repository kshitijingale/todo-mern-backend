const Todo = require("../model/Todo");

exports.createTodoTask = async (req, res) => {
    try {
        const task = req.body.task;

        // if task doesn't exist
        if (!task || (task.length == 0)) {
            res.status(400).json({
                success: false,
                message: "Task is required"
            })
        }
        else {
            const todoId = req.params.id;
            const todo = await Todo.findById(todoId)
            todo.tasks.push(task)
            await todo.save();

            res.status(200).json({
                sucess: true,
                todo
            })
        }

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }

}
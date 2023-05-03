const Todo = require('../model/todo')

exports.createTodos = async (req, res) => {
    console.log(req.body);
    try {
        const { title, tasks } = req.body;

        const todos = await Todo.create({
            title,
            tasks
        })
        res.status(200).json({
            success: true,
            todos
        })
    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            success: false,
            message: "Failed to create todo"
        })
    }
}
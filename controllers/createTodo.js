const Todo = require('../model/Todo')

exports.createTodo = async (req, res) => {
    try {
        const { title } = req.body;

        const todos = await Todo.create({
            title,
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
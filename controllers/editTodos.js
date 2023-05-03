const Todo = require('../model/todo')

exports.editTodos = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body)

        res.status(200).json({
            success: true,
            todo,
            message: "Todo updated successfully"
        })
    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
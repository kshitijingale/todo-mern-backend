const Todo = require('../model/Todo')

exports.deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            todo,
            message: "Todo deleted successfully"
        })

    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
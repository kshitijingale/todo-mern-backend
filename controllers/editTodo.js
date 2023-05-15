const Todo = require('../model/Todo')

exports.editTodo = async (req, res) => {
    try {
        let todo = req.body;
        todo.modifiedDate = Date.now();
        await Todo.findByIdAndUpdate(req.params.id, todo)

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
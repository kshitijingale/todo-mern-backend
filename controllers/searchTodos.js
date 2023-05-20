const Todo = require('../model/Todo')

exports.searchTodos = async (req, res) => {
    try {
        const searchText = req.params.text;
        const todos = await Todo.find({ $text: { $search: `${searchText}` } });

        res.status(200).json({
            success: true,
            todos
        })
    } catch (error) {
        console.log(error.message);
    }

}
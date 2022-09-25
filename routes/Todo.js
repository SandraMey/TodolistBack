const todoRouter = require("express").Router();
const Todo = require('../models/Todo');

todoRouter.get('/todos', async (req, res) => {
	const todos = await Todo.find().sort({ 'complete':1, 'completeDate': 'asc', 'timestamp': 'desc'});

	res.json(todos);
});

todoRouter.get('/todo/complete/:id',  async(req, res) => {
  const todo = await Todo.findById(req.params.id);

  todo.complete =!todo.complete;
	todo.completeDate =!todo.completeDate

  todo.save();

  res.json(todo)
});

module.exports = todoRouter;

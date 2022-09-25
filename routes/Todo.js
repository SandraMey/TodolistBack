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

todoRouter.get('/todo/description/:id', async(req, res) => {
  const description = await Todo.findById(req.params.id);

  res.json(description);
})


module.exports = todoRouter;

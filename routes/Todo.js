const todoRouter = require("express").Router();
const Todo = require('../models/Todo');

todoRouter.get('/todos', async (req, res) => {
	const todos = await Todo.find().sort({ 'complete':1, 'timestamp': 'desc'});

	res.json(todos);
});

module.exports = todoRouter;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	complete: {
		type: Boolean,
		default: false
	},
	completeDate: {
		type: String
	},
	timestamp: {
		type: String,
		default: Date.now()
	},
	description: {
		type: String,
	}
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
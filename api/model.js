const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemsSchema = new Schema({
	title: String,
}, { collection: 'ToDoListApp' });

module.exports = mongoose.model('listItems', ItemsSchema);
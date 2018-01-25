const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: String,
    done: Boolean
});

module.exports = mongoose.model('Task', TaskSchema);
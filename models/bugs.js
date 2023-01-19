
const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
    "title" :{type: String, required: true}
})

const BugModule = mongoose.model('user', bugSchema);

module.exports = {BugModule};
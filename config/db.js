
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config();

// const connection = mongoose.connect(process.env.URL, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
//   });
const connection = mongoose.connect("mongodb://127.0.0.1:27017/bugtracker");

module.exports = {connection};
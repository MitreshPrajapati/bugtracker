
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const dotenv = require('dotenv').config();
// console.log(process.env.URL)
const connection = mongoose.connect(process.env.URL);
// const connection = mongoose.connect("mongodb://127.0.0.1:27017/bugtracker");

module.exports = {connection};
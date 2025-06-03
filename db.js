require('dotenv').config();
const { error } = require('console');
const mongoose = require('mongoose')

const connectionDb = mongoose
.connect(process.env.MONGO_URL)
.then(()=> console.log("MongoDB Connected"))


module.exports = connectionDb
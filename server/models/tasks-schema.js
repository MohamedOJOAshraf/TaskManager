const mongoose = require('mongoose')
const { string } = require('yup')

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
    }
})

module.exports = mongoose.model("Task",taskSchema)
const {object,string} = require('yup');

const validation = object({
    name:string().min(1).max(255).required()
})

module.exports = validation
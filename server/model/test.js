const mongoose = require('mongoose')

let TestSchema = new mongoose.Schema({name: String, age: Number})

module.exports = mongoose.model('Test', TestSchema)

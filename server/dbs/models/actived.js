const mongoose = require('mongoose')
let ActivedSchema = new mongoose.Schema({
  id: {type:Number,  unique: true, required: true},
  content: {type: String,default: ''},
  createTime:{type:Date, default: Date.now()},
  updatedTime:{type:Date, default: Date.now()}
})

module.exports = mongoose.model('actived',ActivedSchema)
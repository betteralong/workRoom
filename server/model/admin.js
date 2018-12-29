const mongoose = require('mongoose')

let AdminSchema = new mongoose.Schema({
  user: {type:String,required:true},
  password: {type:String,required:true},
  name: {type:String, default:''},
  phone: {type:String,default:''},
  createTime:{type:Date,default:Date.now()},
  updatedTime:{type:Date,default:Date.now()}
})

module.exports = mongoose.model('admin',AdminSchema)
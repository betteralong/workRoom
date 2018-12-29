const mongoose = require('mongoose')
let AdminSchema = new mongoose.Schema({
  userName: {type:String, unique: true, required: true},
  password: {type:String, required: true},
  name: {type:String, default:''},
  role: {type:Number, default:2},
  phone: {type:String, default:''},
  remark: {type:String, default:''},
  status: {type:Boolean, default: true},
  createTime:{type:Date, default: Date.now()},
  updatedTime:{type:Date, default: Date.now()}
})

module.exports = mongoose.model('admin',AdminSchema)
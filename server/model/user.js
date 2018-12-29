const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
  username: {type:String,required:true},
  password: {type:String,required:true},
  name: {type:String, default:''},
  phone: {type:String,default:''},
  qq: {type:String,default:''},
  weChat: {type:String,default: ''},
  createTime:{type:Date,default:Date.now()},
  updatedTime:{type:Date,default:Date.now()}
})

module.exports = mongoose.model('user',UserSchema)

const  mongoose = require('mongoose')

const Schema = mongoose.Schema
const UserSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type:String,
    default:''
  },
  phone: {
    type:String,
    default:''
  },
  createTime: {
    type:Date,
    default:Date.now()
  },
  qq: {
    type: String,
    default: ''
  },
  weChat: {
    type: String,
    default: ''
  },
  updatedTime: {
    type:Date,
    default:Date.now()
  }
})

module.exports = mongoose.model('User', UserSchema)
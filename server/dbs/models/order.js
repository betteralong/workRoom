const mongoose =  require('mongoose')

const Schema = mongoose.Schema
const OrderSchema = new Schema({
  orderId: {
    type: String,
    unique: true,
    required: true
  },
  userName: {
    type: String,
    required: true,
  },
  channel: {
    type: Number,
    required: true,
    default: 0
  },
  orderStatus: {
    type: Number,
    default: 0,
  },
  serverStatus: {
    type: Number,
    default: 0
  },
  oriUrl: {
    type: String,
    default:''
  },
  newUrl: {
    type: String,
    default:''
  },
  money: {
    type: Number,
    required: true,
  },
  type: { // 1--留学课程作业 2--留学申请 3--国际期刊发表 4--个人文档 5--商业用途
    type: Number,
    required: true,
    default: 1
  },
  createdTime: {
    type:Date,
    default:Date.now()
  },
  remark: {
    type: String,
    default: ''
  } 
})

module.exports =  mongoose.model('Order', OrderSchema)
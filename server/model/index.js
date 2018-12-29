use
// 1. 连接数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/db')
const conn = mongoose.connection
conn.on('connected', function () {
  console.log('数据库连接成功!')
})

// 2. 得到对应特定集合的Model: UserModel
const userSchema = mongoose.Schema({
  // 用户名
  'name': {type: String},
  // 密码
  'pwd': {type: String},
  // 类型
  'phone': {'type': String}
})
UserModel = mongoose.model('user', userSchema)

// 3. 向外暴露
module.exports = {
  getModel(name) {
    return mongoose.model(name)
  }
}


const mongoose = require('mongoose')
const dbConfig = require('../config')

module.exports = function () {
  mongoose.connect(dbConfig.dbs, {
    useNewUrlParser: true
  })
  
  mongoose.connection.on('connected', function () {    
    console.log('数据库连接成功');  
  });    
  
  /**
  * 连接异常
  */
  mongoose.connection.on('error',function (err) {    
    console.log('数据库连接异常');  
  });    
  
  /**
  * 连接断开
  */
  mongoose.connection.on('disconnected', function () {    
    console.log('断开数据库连接');  
  });
}
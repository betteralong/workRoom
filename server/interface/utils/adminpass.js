const passport = require('koa-passport')
const LocalStrategy  = require('passport-local')
const adminModel  = require('../../dbs/models/admin')
const userModel = require('../../dbs/models/users')

// 全局使用护照没办法分成用户和管理员, 有限校验用户在校验管理员方式解决该问题
passport.use(new LocalStrategy(async (username, password, done) =>{
  let where = {
   userName: username
  }
  let result = await userModel.findOne(where)
  console.log('result',result)
  if(result != null) {
    console.log('result.password',result.password,'password',password)
    if(result.password === password) {
      return done(null, result)
    }else {
      return done(null, false, '密码错误')
    }
  } else {
    console.log('where',where)
    result = await adminModel.findOne(where)
    console.log('result',result)
    if(result != null) {
      if(result.password === password) {
        return done(null, result)
      }else {
        return done(null,false, '密码错误')
      }
    }else {
      return done(null, false, '用户不存在')
    }
  }
}))

// 序列化，存储session，用于自动登录
passport.serializeUser((username, done) => {
  console.log('serializeUser')
  done(null, username)
})

// 反序列化
passport.deserializeUser((username, done) => {
  console.log('deserializeUser')
  return done(null, username)
})

module.exports = passport
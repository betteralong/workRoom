const passport = require('koa-passport')
const LocalStrategy  = require('passport-local')
const UserModel  = require('../../dbs/models/users')

  passport.use(new LocalStrategy(async (username, password, done) =>{
  console.log('aaaaa')
  let where = {
    mail: username
  }

  let result = await UserModel.findOne(where)
  console.log('result',result)
  if(result != null) {
    console.log('result.password',result.password,'password',password)
    if(result.password === password) {
      return done(null, result)
    }else {
      return done(null, false, '密码错误')
    }
  } else {
    return done(null, false, '用户不存在')
  }
}))

// 序列化，存储session，用于自动登录
passport.serializeUser((mail, done) => {
  console.log('serializeUser')
  done(null, mail)
})

// 反序列化
passport.deserializeUser((mail, done) => {
  console.log('deserializeUser')
  return done(null, mail)
})

module.exports = passport
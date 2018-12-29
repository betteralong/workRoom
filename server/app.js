const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
// const koaBody = app.use(users.routes()).use(users.allowedMethods())('koa-body')
const logger = require('koa-logger')
// const config = require('./config')
// const mongoose = require('mongoose')
// const Redis = require('koa-redis')
// const session = require('koa-generic-session')
// const user = require('./routes/user')
// const admin = require('./routes/admin')
const mongoose = require('mongoose')
const session = require('koa-generic-session')
const Redis = require('koa-redis')
const db = require('./dbs')
const dbConfig = require('./dbs/config')
const passport = require('./interface/utils/passport')
const users = require('./interface/users')
const admin = require('./interface/admin')


// const path = require('path')
// error handler
app.keys = ['RedCrayonStudio', 'keykeys']
app.proxy = true
// session 配置
app.use(session({
  key: 'mt',
  prefix: 'mt:uid',
  store: new Redis()
}))

onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())

//db连接
db()

// passport 配置
app.use(passport.initialize())
app.use(passport.session())

app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))
// app.use(koaBody({
//   multipart: true,
//   formidable: {
//     keepExtensions: true,
//     uploadDir:path.join(__dirname,'public/upload'),
//     maxFileSize: 10 *1024*1024,    // 设置上传文件大小最大限制，默认10M
//     onFileBegin: (name, file) => {
//       const dir = path.join(__dirname,`public/upload/`);
//       file.path = `${dir}/${getNowFormatDate()}${file.name}`;
//     },
//   }
// }));
// app.use(session({
//   key:'work',
//   //prefix:'mtpr',
//   store:new Redis()
// }))
// logger
// let client = Redis.createClient(config.redis_port,config.redis_host)
// app.use(session({
//   store: redisStore({
//       // db:config.redis_db,
//       client : client
//   })
// }))

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
app.use(users.routes()).use(users.allowedMethods())
app.use(admin.routes()).use(admin.allowedMethods())
// routes
// app.use(index.routes(), index.allowedMethods())
// app.use(user.routes(), user.allowedMethods())
// app.use(admin.routes(), admin.allowedMethods())
// mongoose.connect(config.dbs,{
//   useNewUrlParser:true
// })
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app

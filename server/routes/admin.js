const router = require('koa-router')()
const User = require('../model/user')
router.prefix('/admin')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.post('/login',async function(ctx) {
  let code = 20000 
  let message = 'test'
  ctx.body ={"code":20000,"data":{"roles":["admin"],"name":"admin","avatar":"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"}}
})

router.post('/logout', async function(ctx){
  let code = 20000
  let message = 'out'
  ctx.body = {
    code: code,
    message: message
  }
})
router.get('/info',async function(ctx) {
  ctx.body ={"code":20000,"data":{"roles":["admin"],"name":"admin","avatar":"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"}}
})




module.exports = router
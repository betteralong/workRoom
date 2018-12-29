const router = require('koa-router')()
const Test = require('../model/test')
const Redis = require('koa-redis')
const Store = new Redis().client
router.prefix('/test')

router.get('/addtest', async function(ctx) {
  console.log('name',ctx.request.query.name,'age:',ctx.request.query.age)
  const test = new Test({name: ctx.request.query.name, age: ctx.request.query.age})
  let code
  try {
    await test.save()
    code = 0
  } catch (e) {
    console.log(e)
    code = -1
  }
  ctx.body = {
    code: code
  }
})
router.get('/redis',async function(ctx){
  const st = await Store.hset('fix','name',Math.random())
  ctx.body={
    code:0
  }
})
module.exports = router
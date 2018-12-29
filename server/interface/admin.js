const Router = require('koa-router')
const User = require('../dbs/models/users')
const Admin = require('../dbs/models/admin')
const Passport = require('./utils/adminpass')
const Order = require('../dbs/models/order')
const Actived = require('../dbs/models/actived')

let router = new Router({
  prefix: '/admin'
})

// 新增管理role 1-- 超级管理员 2--管理员
router.post('/admin/new', async(ctx) =>{
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      message: '请先登录'
    }
    return
  }
  if(ctx.session.passport.user.role == 2) {
    ctx.body = {
      code: -1,
      msg: '普通管理员不支持新增'
    }
  }
  const {
    userName,
    password,
    role,
    phone,
    name
  } = ctx.request.body
  if(!userName.length) {
    ctx.body = {
      code:-1,
      message:'请输入管理员账号'
    }
    return
  }
  if(!password.length) {
    ctx.body = {
      code:-1,
      message:'请输入密码'
    }
    return
  }
  if(!role) {
    ctx.body = {
      code: -1,
      message: '请选择管理员类型'
    }
  }
  let keyWord = 'userName,name,phone,role,password'.split(',')
  let doc = {}
  keyWord.forEach((item)=>{
    if(ctx.request.body[item]) {
      doc[item] = ctx.request.body[item]
    }
  })
  let admin = await Admin.find({
    userName
  })
  if(admin.length) {
    ctx.body = {
      code: -1,
      msg: '该账号已经存在'
    }
    return 
  }
  let newAdmin = await Admin.create(doc)
  if(newAdmin) {
    ctx.body = {
      code: 0,
      message: `新建管理员账号${userName}`
    }
  }
})
// 删除管理员
router.post('/admin/del', async(ctx) =>{
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      message: '请先登录'
    }
    return
  }
  if(ctx.session.passport.user.role == 2) {
    ctx.body = {
      code: -1,
      msg: '普通管理员不支持删除'
    }
  }

  const {
    userName
  } = ctx.request.body
  if(! userName.length) {
    ctx.body = {
      code: -1,
      msg: '请传入要删除的账号'
    }
  }
  let result =  await Admin.remove({userName})
  console.log(result)
  ctx.body = {
    code: 0,
    message: '删除成功'
  }
})

// 修改管理员信息
router.post('/admin/modify', async(ctx, next) =>{
  const where = {
    userName: ctx.request.body.userName
  }
  if(!ctx.request.body.userName.length) {
    ctx.body = {
      code: -1,
      msg: '请传入修改的账号'
    }
    return
  }
  if (ctx.isAuthenticated()) {
    let keyWord = 'name,phone,role,password,remark'.split(',')
    let doc = {}
    keyWord.forEach((item)=>{
      if( ctx.request.body[item]) {
        doc[item] = ctx.request.body[item]
      }
    })
    let updates = {$set:doc}
    await Admin.update(where,updates,(err,doc)=>{
      if (err) {
        ctx.body = {
          code: -1,
          msg: err
        }
        return
      } else {
        ctx.body = {
          code: 0,
          msg: '修改成功'
        }
        return
      }
    })
  } else{
    ctx.body = {
      code: -1,
      msg: '请先登录'
    }
    return
  }
  ctx.body = {
    code: 0,
    msg: '修改成功'
  }
})
// 显示列表
router.get('/admin/list', async(ctx) =>{
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      message: '请先登录'
    }
    return
  }
  if(ctx.session.passport.user.role == 2) {
    let list = []
    list.push(ctx.session.passport.user)
    ctx.body = {
      code: 0,
      data: list
    }
    return
  }
  const {
    userName,
    phone,
    name,
    page,
    limit
  } = ctx.query

  if(!limit) {
    ctx.body = {
      code: -1,
      msg: '请输入limit'
    }
    return
  }
  if(!page) {
    ctx = {
      code: -1,
      msg: '请输入page'
    }
    return
  }

  let query = {}
  if(userName && userName.length) {
    query['userName'] = userName
  }
  if(phone && phone.length) {
    query['phone'] = phone
  }
  if(name && name.length) {
    query['name'] = name
  }
  let list = await Admin.find(query).skip(parseInt(page -1) * parseInt(limit)).limit(parseInt(limit)).exec()
  let total = await Admin.find().count()
  ctx.body ={
    code: 0,
    data: {
      data: list,
      total
    }
  }
})
// 冻结/解冻
router.post('/admin/status', async(ctx) =>{
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      message: '请先登录'
    }
    return
  }
  if(ctx.session.passport.user.role == 2) {
    ctx.body = {
      code: -1,
      msg: '普通管理员不支持冻结操作'
    }
    return
  }
  const {
    userName,
    status
  } = ctx.request.body
  if(! userName.length) {
    ctx.body = {
      code: -1,
      msg: '请传入要删除的账号'
    }
  }
  if(! userName.status) {
    ctx.body = {
      code: -1,
      msg: '请传入修改状态'
    }
  }
  let where = {userName}
  let updates = {$set: {status}}
  await Admin.update(where,updates,(err,doc)=>{
    if (err) {
      console.error(err);
    } else {
      ctx.body = {
        code: 0,
        msg: '修改成功'
      }
    }
  })
})
/* 每个用户都有官网邮箱注册，不支持管理员单独新增用户 */
// 用户删除
router.post('/user/del',async(ctx) =>{
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      message: '请先登录'
    }
    return
  }
  if(ctx.session.passport.user.role == 2) {
    ctx.body = {
      code: -1,
      msg: '普通管理员不支持删除用户'
    }
  }
  let {userName} = ctx.request.body
  if(! userName.length) {
    ctx.body = {
      code: -1,
      msg: '请输入要删除的用户'
    }
    return
  }
  let result  = await User.remove({userName})
  ctx.body = {
    code: 0,
    msg: `删除用户${userName}成功`
  }
})
// 用户修改
router.post('/user/modify', async(ctx) =>{
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      message: '请先登录'
    }
    return
  }
  if(ctx.session.passport.user.role == 2) {
    ctx.body = {
      code: -1,
      msg: '普通管理员不支持删除用户'
    }
    return
  }
  const where = {
    userName: ctx.request.body.userName
  }
  if(!where.userName) {
    ctx.body = {
      code: -1,
      msg: '请输入要修改的账号'
    }
    return
  }
  let keyWord = 'name,phone,password,remark'.split(',')
  let doc = {}
  keyWord.forEach((item)=>{
    if( ctx.request.body[item]) {
      doc[item] = ctx.request.body[item]
    }
  })
  let updates = {$set:doc}
  await User.update(where,updates,(err,doc)=>{
    if (err) {
      ctx.body = {
        code:-1,
        msg: err
      }
    } else {
      ctx.body = {
        code: 0,
        msg: '修改成功'
      }
    }
  })
  ctx.body = {
    code: 0,
    msg: '修改成功'
  }
})
// 用户列表
router.get('/user/list', async(ctx) =>{
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      message: '请先登录'
    }
    return
  }
  const {
    userName,
    name,
    phone,
    limit,
    page
  } = ctx.query
  if(!limit) {
    ctx.body = {
      code: -1,
      msg: '请输入limit'
    }
    return
  }
  if(!page) {
    ctx.body = {
      code: -1,
      msg: '请输入page'
    }
    return
  }
  let query = {}
  if(userName && userName.length) {
    query['userName'] = userName
  }
  if(phone && phone.length) {
    query['phone'] = phone
  }
  if(name && name.length) {
    query['name'] = name
  }
  let list = await User.find(query).skip(parseInt(page -1) * parseInt(limit)).limit(parseInt(limit)).exec()
  let total =  await User.find().count()
  ctx.body ={
    code: 0,
    data: {
      data: list,
      total
    }
  }
})

//订单列表
router.get('/order/list', async(ctx) =>{
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      message: '请先登录'
    }
    return
  }
  const {
    userName,
    orderId,
    status,
    limit,
    page
  } = ctx.query
  if(!limit) {
    ctx.body = {
      code: -1,
      msg: '请输入页码限制'
    }
    return
  }
  if(!page) {
    ctx.body = {
      code:-1,
      msg: '请输入页面'
    }
    return
  }
  let query = {}
  if(userName && userName.length) {
    query['userName'] = userName
  }
  if(orderId && orderId.length) {
    query['orderId'] = orderId
  }
  if(typeof status == "undefined" || status == null) {
    query['status'] = status
  }
  let result = await Order.find(query).skip(parseInt(page) * parseInt(limit)).limit(parseInt(limit)).exec()
  console.log(page,limit,result)
  ctx.body = {
    code: 0,
    data: result
  }
})

// 1--留学课程作业 2--留学申请 3--国际期刊发表 4--个人文档 5--商业用途
router.post('/order/count', async(ctx) =>{
  // if (!ctx.isAuthenticated()) {
  //   ctx.body = {
  //     code: -1,
  //     message: '请先登录'
  //   }
  //   return
  // }
  let result1 = await Order.aggregate([{
    $group: {
      _id: "$type",
      count: {
        $sum: 1
      },
      moneyCount: {
        $sum: "$money"
      }
    }
  }])
  let result2 = await Order.aggregate([
    {
    $group: {
      _id: {year: {$year: "$createdTime"}, month: {$month: "$createdTime"}},
      moneyCount: {
        $sum: "$money"
      }
    }
  }])
  console.log('result2',result2)
  ctx.body = {
    code: 0,
    data: {
      result1,
      result2
    }
  }

})
// 登录
router.post('/login', async (ctx, next) =>{
  return Passport.authenticate('local', (error, user, info, status) =>{
    if(error) {
      ctx.body = {
        code: -1,
        msg: error
      }
    } else {
      if(user) {
        ctx.body = {
          code: 0,
          "data":{"roles":["admin"],"name":"admin","avatar":"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"}
        }
        return ctx.login(user)
      } else {
        console.log('in error')
        ctx.body =  {
          code: 1,
          msg: info
        }
      }
    }
  })(ctx, next)
})
//退出
router.post('/logout', async(ctx, next) =>{
  await ctx.logout()
  // 检查是否在登录状态
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0,
      msg: '安全退出'
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '发生异常，无法安全退出，请检查网络'
    }
  }
})

router.get('/info',async function(ctx) {
    if (!ctx.isAuthenticated()) {
      ctx.body = {
        code: -1,
        message: '请先登录'
      }
    return
  }  
  ctx.body ={"code":20000,"data":{"roles":["admin"],"name":"admin","avatar":"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"}}
})

router.post('/actived/content', async(ctx, next)=>{
  
  let result = await 
  Actived.findOne({id:1})
  console.log('result',result)
  if(result) {
    ctx.body={
      code: 0,
      data: result,
      msg: '获取成功'
    }
  }else{
    ctx.body = {
      code: 0,
      data :{
        content: ''
      },
      msg: '获取成功'
    }
  }
})

router.post('/actived/save', async(ctx, next)=>{
  const { content } = ctx.request.body
  let result = await Actived.find({
    id: 1
  })

  if(result.length) {
   await Actived.update({id:1},{content})
      ctx.body = {
        code: 0,
        msg: '保存成功'
      }
    return
  }
  await Actived.create({
    id: 1,
    content
  })
  ctx.body = {
    code: 0,
    msg: ''
  }
})
module.exports =  router

// router.post('/login',async function(ctx) {


//   let code = 20000 
//   let message = 'test'
//   ctx.body ={"code":20000,"data":{"roles":["admin"],"name":"admin","avatar":"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"}}
// })
// router.post('/logout', async function(ctx){
//   let code = 20000
//   let message = 'out'
//   ctx.body = {
//     code: code,
//     message: message
//   }
// })
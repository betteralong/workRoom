const Router = require('koa-router')
const Redis = require('koa-redis')
const nodeMailer = require('nodemailer')
const User = require('../dbs/models/users')
const Order = require('../dbs/models/order')
const Passport = require('./utils/passport')
const Email = require('../dbs/config')
const axios = require('./utils/axios')
require('../utils/index')

let router = new Router({
  prefix: '/user'
})

let Store = new Redis().client

//注册
router.post('/register', async (ctx) =>{
  const {
    userName,
    password,
    code
  } = ctx.request.body
  if(code) {
    //hash 查询服务端验证码
    const saveCode = await Store.hget(`nodemail:${userName}`, 'code')
    const saveExpire = await Store.hget(`nodemail:${userName}`, 'expire')
    console.log('saveCode',saveCode,'saveExpire',saveExpire)
    if(code === saveCode) {
      //验证码过期
      if(new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期，请重新尝试'
        }
        return 
      }
    }else {
      ctx.body = {
        code: -1,
        msg: '请填写正确的验证码'
      }
      return
    }
  } else {
    //没有验证码
    ctx.body = {
      code: -1,
      msg: '请填写验证码'
    }
    return
  }

  //验证码验证完成
  let user = await User.find({
    userName
  })
  if(user.length) {
    ctx.body = {
      code: -1,
      msg: '该邮箱已被注册'
    }
    return 
  }
  let newUser = await User.create({
    userName,
    password
  })
  if(newUser) {
    ctx.body = {
      code: 0,
      msg:'注册成功'
    }
  } else{
    ctx.body = {
      code: -1,
      msg: '注册失败'
    }
  }
  // if(newUser) {
  //   let res = await axios.post(`users/login`, {
  //     userName,
  //     password
  //   })
  //   if( res.data && res.data.code === 0) {
  //     ctx.body = {
  //       code: 0,
  //       msg: '注册成功',
  //       mail: res.data.userName
  //     }
  //   } else {
  //     ctx.body = {
  //       code: -1,
  //       msg: 'error'
  //     }
  //   }
  // } else {
  //   ctx.body = {
  //     code: -1,
  //     msg: '注册失败'
  //   }
  // }
})

//登录
router.post('/login', async (ctx, next) =>{
  console.log('login')
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
          msg: '登录成功',
          user
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

//获取验证码
router.post('/verfy', async(ctx, next)=> {
  let userName = ctx.request.body.userName
  if(!userName) {
    ctx.body = {
      code: -1,
      msg:'请输入账号'
    }
    return
  }
  const saveExpire = await Store.hget(`nodemail:${userName}`, 'expire')

  if( saveExpire && new Date().getTime() -saveExpire < 0) {
    ctx.body = {
      code: -1,
      msg: '验证请求过于频繁，1分钟内1次'
    }
    return
  }
  // 验证码参数
  let transporter = nodeMailer.createTransport({
    host: Email.smtp.host,
    post: 587,
    secure: false,
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  })

  let params = {
    code: Email.smtp.code(),
    expire: Email.smtp.expire(),
    userName,
  }
  
  //邮箱信息
  let mailOption = {
    from: `"认证邮件" <${Email.smtp.user}>`,
    to: params.userName,
    subject: 'RedCrayonStudio注册码',
    html: `您在RedCrayonStudio中注册，您的验证码是${params.code}`
  }
  console.log(mailOption)
  await transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      return console.log('error:',error)
    } else {
      // redis存储
      console.log('params',params)
      console.log(Store.hmset)
      Store.hmset(`nodemail:${params.userName}`, 'code', params.code, 'expire', params.expire)
    }
  })
  ctx.body = {
    code: 0,
    msg: '验证码已发送，可能会有延时，有效期一分钟'
  }
})

//下单
router.post('/payment', async(ctx, next)=>{
  let {
    userName,
    oriUrl,
    money
  } = ctx.request.body
  console.log('进入下单',ctx.request.body)
  if(!userName) {
    ctx.body = {
      code: -1,
      msg: '请输入用户'
    }
    return
  }
  if(!oriUrl.length) {
    ctx.body = {
      code: -1,
      msg: '请先上传文档'
    }
    return
  }
  if(!money) {
    ctx.body = {
      code: -1,
      msg: '请先送入金额'
    }
  }
  // 生成订单编号
  let orderId = ''
  let platform = "622"
  let r1 = Math.floor(Math.random() * 10);
  let r2 = Math.floor(Math.random() * 10);
  let sysDate = new Date().Format('yyyyMMddhhmmss');
  orderId =  platform + r1 + sysDate + r2
  let  result =  await Order.create({
    orderId,
    userName,
    oriUrl,
    money
  })

  ctx.body = {
    code: 0,
    msg: '创建订单成功'
  } 
  console.log('result',result)
})

//退出
router.get('/exit', async(ctx, next) =>{
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

router.get('/getUser', async (ctx) => {
  if (ctx.isAuthenticated()) {
    const {userName,qq,weChat,phone,name} = ctx.session.passport.user
    ctx.body = {
      code: 0,
      data: {
          userName,
          qq,
          weChat,
          phone,
          name
        }
    }
  } else {
    ctx.body = {
      userName: '',
    }
  }
})

router.post('/modify', async(ctx, next) =>{
  if (ctx.isAuthenticated()) {
    const where = {
      userName: ctx.session.passport.user.userName
    }
    if(ctx.request.body.password) {
      if(ctx.request.body.oldpassword) {
        if(ctx.request.body.oldpassword !== ctx.session.passport.user.password) {
          ctx.body = {
            code: -1,
            msg: '请输入正确的密码'
          }
          return
        }
      } else {
        ctx.body = {
          code: -1,
          msg: '请输入原密码'
        }
        return
      }
    }
    let keyWord = 'name,phone,qq,weChat,password'.split(',')
    let doc = {}
    keyWord.forEach((item)=>{
      if( ctx.request.body[item]) {
        doc[item] = ctx.request.body[item]
      }
    })
    let updates = {$set:doc}
    await User.update(where,updates,(err,doc)=>{
      if (err) {
        console.error(err);
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
    // await User.findOne(where, (err, doc)=>{
    //   if(err) {
    //     console.log('err:',err)
    //     throw err
    //   }
    //   keyWord.forEach((item)=>{
    //     if( ctx.request.body[item]) {
    //       console.log('item:',ctx.request.body[item])
    //       doc[item] = ctx.request.body[item]
    //     }
    //   })
    //   console.log(doc)
    //   doc.save((err,data)=>{
    //     if(err) {
    //       console.log(err)
    //       throw err
    //     }
    //   })
    //   console.log('ok')
    //   ctx.body = {
    //     code: 0,
    //     msg: '修改成功'
    //   }
    //   console.log(ctx)
    // })
  } else{
    ctx.body = {
      code: -1,
      msg: '请先登录'
    }
  }
})


module.exports = router
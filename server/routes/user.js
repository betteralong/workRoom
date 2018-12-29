const router = require('koa-router')()
const User = require('../model/user')
router.prefix('/user')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.post('/login',async function(ctx) {
  let code = -1
  let message = ''
  try{
    const result = await User.findOne({email: ctx.request.body.email})
    if(result) {
      if(result.password === ctx.request.body.password) {
        code = 0
        message= '登陆成功'
      }else{
        code = 1
        message= '密码错误'
      }
    }else{
      code = 1
      message ='该邮箱暂未被注册'
    }
  }catch(e) {
    console.log('e',e)
    message = e
  }
  ctx.body = {
    code: code,
    message:message
  }
})

router.post('/register', async function(ctx){
  let code
  try {
    const result = await User.findOne({email: ctx.request.body.email})
    if(!result){
      try{
        const user = new User(ctx.request.body)
        await user.save()
        code = 0
        message = '注册成功'
      }catch(e) {
        console.log(e)
        code = -1
        message = e
      }
    }else{
      code = 1
      message = '该邮箱已被注册'
    }
  } catch (e) {
    console.log(e)
    code = -1
    message = e
  }
  ctx.body = {
    code: code,
    message: message
  }
})

router.post('/uploadfiles', async (ctx, next) => {
  console.log('进入上传')
  // 上传多个文件
  // console.log('files-json-begin',ctx.request.files,'file-json-end')
  // let files = ctx.request.files.file; // 获取上传文件
  // for (let file of files) {
  //   // 创建可读流
  //   const reader = fs.createReadStream(file.path)
  //   // 获取上传文件扩展名
  //   let filePath = path.join(__dirname, 'public/upload/') + `/${file.name}`
  //   // 创建可写流
  //   const upStream = fs.createWriteStream(filePath)
  //   // 可读流通过管道写入可写流
  //   reader.pipe(upStream);
  // }
 return ctx.body = "上传成功！";
})

module.exports = router

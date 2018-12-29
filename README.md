# 工作室官网

> 基于nodejs的全栈网站


## 技术栈介绍
 # proofredit-front （网站前端）
  element-ui + vue全家桶 
 # proofredit-admin (管理系统)
  vue-admin模板 + vue全家桶
 # server(后端)
 koa2 +mongoose + koa-passport + passport-local + nodemailer + koa-redis
   登录权限采用 koa-passport + passport-local 
   邮箱验证采用 nodemailer + koa-redis

 线上部署 nginx + mp2
 所有请求前缀都带上api 转发到server端的端口号
## Build Setup


```


// 通过设置get设置只读
module.exports =  {
  dbs: 'mongodb://127.0.0.1:27017/workroom',
  redis: {
    get host () {
      return '127.0.0.1'
    },
    get port () {
      return 6379
    }
  },
  smtp: {
    get host () {
      return 'smtp.qq.com'
    },
    get user () {
      return '' // 邮箱
    },
    get pass () {
      return '' // 邮箱密码
    },
    // 验证码
    get code () {
      return () => {
        return Math.random().toString(16).slice(2, 8).toUpperCase()
      }
    },
    // 过期时间
    get expire () {
      return () => {
        return new Date().getTime() + 60 * 1000
      }
    }
  }
}

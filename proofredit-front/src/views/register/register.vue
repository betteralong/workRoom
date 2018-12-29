<template>
  <div class="register-page">
    <div class="w1200 register-container">
      <div class="form-wrap">
        <el-form class="form-container" status-icon ref="form" :rules="rules" :model="form" label-width="120px">
          <el-form-item prop="mail" label="用户名(邮箱):">
            <el-input
              placeholder="请输入邮箱"
              v-model="form.mail">
              <i slot="prefix" class="el-input__icon el-icon-message"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码:">
            <el-input
              type="password"
              placeholder="请输入密码"
              v-model="form.password">
              <i slot="prefix" class="el-input__icon icon iconfont icon-mima"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="rePassword" label="确认密码:">
            <el-input
              type="password"
              placeholder="确认密码"
              v-model="form.rePassword">
              <i slot="prefix" class="el-input__icon icon iconfont icon-mimaqueren"></i>
            </el-input>
          </el-form-item>
           <el-form-item prop="code" label="邮箱验证码:">
            <el-input
              placeholder="请输入验证码"
              v-model="form.code">
              <i slot="prefix" class="el-input__icon icon iconfont icon-mima"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="getVaild" :disabled="isDisabled">获取验证码&nbsp;&nbsp;{{time===60?'':time}}</el-button>
          </el-form-item>
        </el-form>
        <div class="login-btn" @click="handleRegister">注册</div>
        <router-link class="go-login" to="/login">已有账号？立即登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
export default {
  methods: {
    getVaild() {
      if(this.form.mail.length ===0) {
        this.$message('请先输入邮箱')
        return 
      }
      this.beginTimer()
      this.isDisabled = true
      // this.$http.post('/aliy/mail/send',{
        this.$http.post('/api/user/verfy',{
        userName: this.form.mail
      }).then((data)=>{
        console.log(data)
      })
    },
    beginTimer() {
      this.timer = setInterval(()=>{
          if(this.time ===0) {
             clearInterval(this.timer)
             this.isDisabled = false
             this.timer = null
             this.time = 60
          }else {
            this.time--
          }
      },1000)
    },
    handleRegister() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$http.post('/api/user/register',{
            userName: this.form.mail,
            code: this.form.code,
            password: CryptoJS.MD5(this.form.password).toString()  //MDB返回的是数组 要toString
          }).then((data) =>{
            if(data.data){
              if(data.data.code ===0){
                this.$message({
                  message: '注册成功,3S后自动转到登录...',
                  type: 'success'
                })
                setTimeout(()=>{
                  this.$router.push('/login')
                },3000)
              }else{
                if(data.data.message) {
                  this.$message(data.data.message)
                }
              }
            }
          })
        }
      })
    },
  },
  data() {
    let checkRePassword=(rule,value,callback)=>{
      if(this.form.password !== this.form.rePassword){callback(new Error('两次输入的密码不一致'))
      } else{
        callback()
      }
    }
    return {
     time: 60,
     timer: null,
     isDisabled: false,
     form:{
       mail:'',
       password:'',
       rePassword: '',
       code: ''
     },
     rules: {
       mail: [
         { required: true, message: '请输入邮箱地址', trigger: 'blur' },
         { type: 'email', message: '请输入正确的邮箱地址格式', trigger: 'blur' }
       ],
       password: [
         { required: true, message: '请输入密码', trigger: 'blur' },
         { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
       ],
       rePassword: [
         { required: true, message: '请再次输入密码', trigger: 'blur' },
         { validator: checkRePassword, trigger: 'blur' }
       ],
        code: [
         { required: true, message: '请输入验证码', trigger: 'blur' },
         { min: 6, max: 6, message: '请输入6位验证码', trigger: 'blur'}
       ]
     }
    }
  }
}
</script>

<style lang="scss" >
.register-page{
  .register-container{
    background-image:url('~@/assets/img/register.jpg'); background-repeat:no-repeat; background-size:100% 100%;-moz-background-size:100% 100%;
    padding-top: 50px;
    height: 500px;
    opacity:0.86;
    .form-wrap{
      color: #fff;
      font-weight: 700;
      width: 500px;
      height: 460px;
      margin: 0 auto;
      border-radius: 20px;
      background-color: rgba(0,0,0,.3);
    }
    .form-container{
      margin:  0 auto;
      padding-top:  50px; 
      width: 400px;
       .el-form-item__label{
         color: #fff;
      }
      .icon{
        text-align: center;
      }
    }
    .login-btn{
        margin: 0 auto;
        width: 200px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        color: #fff;
        border-radius: 8px;
        text-align: center;
        background:rgb(30, 137, 224);
        &:hover{
          background: #87CEFA;
        }
      }
      .go-login{
        display: block;
        width: 160px;
        margin: 10px auto 0 ;
        text-align: center;
        &:hover{
          color: rgb(30, 137, 224);
        }
      }
  }
}
</style>


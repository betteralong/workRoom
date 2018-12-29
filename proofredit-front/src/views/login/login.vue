<template>
  <div class="login-page">
    <div class="w1200 login-container clearfix">
        <div class="login-gif1">
          <img src="@/assets/img/login1.gif"/>
        </div>
        <div class="login-form">
          <el-form class="form-container" status-icon :rules="rules" ref="form" :model="form" label-width="120px">
            <el-form-item prop="mail" label="用户名(邮箱)：">
              <el-input
                placeholder="请输入邮箱"
                v-model="form.mail">
                <i slot="prefix" class="el-input__icon el-icon-message"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码：">
              <el-input
                type="password"
                placeholder="请输入密码"
                v-model="form.password">
                <i slot="prefix" class="el-input__icon iconfont icon-mima"></i>
              </el-input>
            </el-form-item>
            <!-- <el-form-item label="验证码">
              <el-input
                placeholder="验证码"
                v-model="form.mail">
                <i slot="prefix" class="el-input__icon el-icon-message"></i>
              </el-input>
            </el-form-item> -->
          </el-form>
          <div class="login-btn" @click="handleLogin">登录</div>
          <div class="go-register"><router-link to="/register">没用账号？立即注册</router-link></div>
        </div>
        <div class="login-gif2">
          <img src="@/assets/img/login2.gif"/>
        </div>
    </div>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
export default {
  methods: {
    handleLogin() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$http.post('/api/user/login',{
            username: this.form.mail,
            password: CryptoJS.MD5(this.form.password).toString()  //MDB返回的是数组 要toString
          }).then((data) =>{
            if(data.data) {
              if(data.data.code ===0){
                this.$store.commit('login')
                this.$message({
                  message: '登录成功',
                  type: 'success'
                })
                setTimeout(()=>{
                  this.$router.push('/my')
                },2000) 
              }else {
                if(data.data.message) {
                  this.$message(data.data.message)
                }
              }
            }
          })
        }
      })
    }
  },
  data() {
    return {
      form: {
        mail: '',
        password:''
      },
      rules: {
      mail: [
         { required: true, message: '请输入邮箱地址', trigger: 'blur' },
         { type: 'email', message: '请输入正确的邮箱地址格式', trigger: 'blur' }
       ],
       password: [
         { required: true, message: '请输入密码', trigger: 'blur' },
       ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/style/variable.scss";
.login-page{
  .login-container{
    padding-top: 40px;
    .login-gif1{
      float: left;
      padding: 80px 0 0 40px;
    }
    .login-form{
      float: left;
      width: 510px;
      .form-container{
        padding-top: 65px;
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
          cursor: pointer;
        }
      }
      .go-register{
        text-align: center;
        padding-top: 12px;
        >a {
          font-size: 14px;
          line-height: 20px;
          color: #555;
          &:hover{
            color: $lineColor;
          }
        }
      }
    }
    .login-gif2{
      float: left;
    }
  }
}
</style>


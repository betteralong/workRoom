<template>
  <div class="mybase-page">
    <div class="mybase-button-group clearfix">
      <div class="mybase-button" :class="{'active': activedIndex===1}" @click="handleClick(1)">基本信息</div>
      <div class="mybase-button" :class="{'active': activedIndex===2}"  @click="handleClick(2)">修改密码</div>
    </div>
    <div class="mybase-form-container clearfix">
        <div class="mybase-form" ref="form" :model="form">
          <el-form v-if="activedIndex===1" label-width="60px">
            <el-form-item label="姓名:">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
             <el-form-item label="手机号:">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
             <el-form-item label="QQ:">
              <el-input v-model="form.qq"></el-input>
            </el-form-item>
             <el-form-item label="微信:">
              <el-input v-model="form.weChat"></el-input>
            </el-form-item>
          </el-form>
          <el-form v-else label-width="80px">
            <el-form-item label="旧密码:">
              <el-input type="password" v-model="form2.oldPassword"></el-input>
            </el-form-item>
             <el-form-item  label="新密码:">
              <el-input type="password" v-model="form2.newPassword"></el-input>
            </el-form-item>
             <el-form-item  label="确认密码:">
              <el-input type="password" v-model="form2.rePassword"></el-input>
            </el-form-item>
          </el-form>
          <div class="mybase-button-save">
            <div v-if="activedIndex===1" @click="handleModifyInfo">保存</div>
            <div v-else @click="handleModifyPwd">确认修改</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
export default {
  methods: {
    handleClick(index) {
      this.activedIndex = index
    },
    handleModifyInfo() {
       this.$http.post('/api/user/modify',this.form).then((res)=>{
         if(res && res.code ===0) {
           this.$message({
            message: res.msg,
            type: 'success'
          })
         }else{
           this.$message({
            message: res.msg,
            type: 'error'
          });
         }
       })
    },
    handleModifyPwd() {
       this.$http.post('/api/user/modify',
       {
         password: CryptoJS.MD5(this.form2.password).toString(),
         oldpassword: CryptoJS.MD5(this.form2.oldPassword).toString()
       }
       ).then((data)=>{
         console.log(data)
       })
    }
  },
  created() {
    this.$http.post('/api/user/verfy').then((res) =>{
      this.form.name = res.name
      this.form.qq = res.qq
      this.form.weChat = res.weChat
      this.form.phone = res.phone
    })
  },
  data() {
    return {
      activedIndex: 1,
      form: {
        name: '',
        phone: '',
        qq: '',
        weChat: ''
      },
      form2:{
        oldPassword: '',
        newPassword: '',
        rePassword: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/style/variable.scss";
.mybase-page{
  padding: 24px;
  .mybase-button-group{
    .mybase-button{
      float: left;
      font-size: 12px;
      padding: 12px 20px;
      background: #fff;
      color: #444;
      &:hover{
        cursor: pointer;
      }
    }
    .active{
      background: $themeColor;
      color: #fff;
    }
  }
  .mybase-form{
    width: 320px;
    padding: 24px;
  }
  .mybase-button-save {
    font-size: 12px;
    width: 60px;
    padding: 12px 20px;
    margin: 0 auto;
    border-radius: 4px;
    text-align: center;
    background: $themeColor;
    color: #fff;
    &:hover{
      cursor: pointer;
    }
  }
}
</style>



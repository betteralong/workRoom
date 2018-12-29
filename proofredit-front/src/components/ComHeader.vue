<template>
  <div class="header-page">
    <div class="top-desc">
      <div class="w1200 top-desc-container clearfix">
        <div class="text">您好，欢迎来到RedCrayonStudio!</div>
        <div class="login-group">
          <!-- <a href="#contact">联系我们</a>
          <a href="javacript:void(0)" @click="handleActive()">活动简介</a> -->
          <router-link  to="/login" v-show="!isLogin">登录</router-link>
          <router-link  to="/register" v-show="!isLogin">注册</router-link>
        </div>
      </div>
    </div>
    <div class="top-white">
      <div class="w1200 top-white-container clearfix">
        <div class="logo" >
          <img src="@/assets/img/logo_top.png"/>
        </div>
        <div class="text-center">
          <h2 class="text-1">专业提供论文润色服务</h2>
          <h3 class="text-2">24小时为您服务</h3>
        </div>
        <div class="text-right">
          <img src="@/assets/img/top.gif"/>
        </div>
      </div>
    </div>
    <div class="top-blue">
      <div class="w1200  top-blue clearfix">
        <div class="header-left clearfix">
          <div class="header-nav clearfix">
            <div class="head-nav-item" :class="{'actived-item':activedIndex==1}" @click="handleClick(1)"><router-link to="/index">首页</router-link></div>
            <div class="head-nav-item" :class="{'actived-item':activedIndex==2}" @click="handleClick(2)"><router-link to="/server">服务</router-link></div>
            <div class="head-nav-item" :class="{'actived-item':activedIndex==3}" @click="handleClick(3)"><router-link to="/order">报价&下单</router-link></div>
            <!-- <div class="head-nav-item" :class="{'actived-item':activedIndex==4}" @click="handleClick(4)"><router-link to="/question">更多问题</router-link></div> -->
            <div class="head-nav-item" :class="{'actived-item':activedIndex==4}" @click="handleClick(4)"> <a href="javacript:void(0)">活动简介</a></div>
            <div class="head-nav-item" :class="{'actived-item':activedIndex==5}" @click="handleClick(5)"><router-link to="/introduce">关于我们</router-link></div>
            <div class="head-nav-item" :class="{'actived-item':activedIndex==6}" @click="handleClick(6)"> <a href="javacript:void(0)">联系我们</a></div>
            <div class="head-nav-item" :class="{'actived-item':activedIndex==7}" @click="handleClick(7)"><router-link to="/login">账号登录</router-link></div>
          </div>
        </div> 
        <!-- <div class="header-right">
          <div class="header-nav cleafix">
            <div class="head-nav-item"><router-link to="/index">注册</router-link></div>
            <div class="head-nav-item"><router-link to="/index">登录</router-link></div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  mounted() {
    if(this.$route.path =='/index'){
      this.activedIndex = 1
    }else if(this.$route.path =='/server'){
      this.activedIndex = 2
    }else if(this.$route.path =='/order'){
      this.activedIndex = 3
    }else if(this.$route.path =='/introduce'){
      this.activedIndex = 5
    }else if(this.$route.path =='/login'){
      this.activedIndex = 7
    }
  },
  methods: {
    handleClick(index) {
      console.log('click',index)
      
      if(index === 4) {
        this.activedIndex = 1
        this.$router.push({name:'index',params: {goActive: 1}})
        return
      }else if(index === 6) {
        this.activedIndex = 1
        this.$router.push({name:'index',params: {goActive: 2}})
        return
      }
      this.activedIndex = index
    },
    // handleActive() {
    //   if(this.$route.path.indexOf('/index') ==0) {
    //     window.location.hash ='#news'
    //   }
    //   this.activedIndex = 1
    //   this.$router.push({name:'index',params: {goActive: 1}})
    // }
  },
  computed: {
    ...mapState(['isLogin'])
  },
  data() {
    return{
      activedIndex: 1
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/style/variable.scss";
.top-desc{
  height: 30px;
  color: #555;
  font-size: 14px;
  line-height: 30px;
  border-bottom: 1px solid #ccc;
  .text{
    float: left;
  }
  .login-group{
    float: right;
    >a{
      padding: 0 4px;
      line-height: 30px;
      color: #888;
    }
  }
}
.top-white{
  background: #fff;
  //background: #f5fffa;
  height: 170px;
  .top-white-container{
    .logo{
      float: left;
      padding-top: 14px;
    }
    .text-center{
      float: left;
      width: 330px;
      padding: 40px 60px 0 20px;
      .text-1{
        font-size: 24px;
        line-height: 40px;
        font-weight: 650;
        color: #333;
        &:hover{
          font-size: 28px;
        }
      }
      .text-2{
        font-size: 18px;
        line-height: 34px;
        font-weight: 580;
        text-align: right;
        color: #444;
        &:hover{
          font-size: 24px;
        }
      }
    }
    .text-right{
      float: left;
      width: 260px;
      padding-top: 12px;
      >img{
        width: 100%;
      }
    }
  }
}
.top-blue{
  height: 65px;
  // background: rgb(30, 137, 224);
    //background: #48d1cc;
    background: rgb(36,81,81);
   .header-nav{
      .head-nav-item{
        float: left;
        font-size: 16px;
        height: 62px;
        line-height: 62px;
        color: #fff;
        &:hover{
          background: $lineColor;
          border-bottom: 3px solid #fff;
        }
        a{
          display: block;
          padding:  0 24px;
        }
      }
      .actived-item{
        background: $lineColor;
        border-bottom: 3px solid #fff;
      }
    }
  .header-left{
    float: left;
    width: 780px;
    .header-logo{
      float: left;
      background: #ccc;
      border-radius: 35%;
      margin-right: 20px;
      margin-top: 3px;
      img{
        display: block;
        width: 78px;
      }
    }
  }
  .header-right{
    float: right;
  }
}
</style>


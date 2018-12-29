<template>
  <div class="my-page">
    <div class="my-container w1200 clearfix">
      <div class="my-nav">
        <div class="my-nav-title">个人中心</div>
        <ul class="nav-container">
          <li class="my-nav-item" @click="handleClick(1)">
            <router-link to="/my" :class="{'active': activedIndex===1}">
              <i class="el-icon-caret-right"></i><span>我的订单</span>
            </router-link>
          </li>
          <li class="my-nav-item" @click="handleClick(2)">
            <router-link to="/my/base" :class="{'active': activedIndex===2}">
              <i class="el-icon-caret-right"></i><span>基本信息</span>
            </router-link>
          </li>
          <li class="my-nav-item" @click="handleClick(3)">
            <router-link to="/my/discount" :class="{'active': activedIndex===3}">
              <i class="el-icon-caret-right"></i><span>我的优惠券</span>
            </router-link>
          </li>
          <li class="my-nav-item" @click="handleClick(4)">
            <a  href="javacript:void(0);"  :class="{'active': activedIndex===4}"> 
              <i class="el-icon-caret-right"></i><span>安全退出</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="my-content">
        <div class="title">我的订单</div>
        <router-view/>
      </div>
    </div>
    <!-- <el-upload
      class="upload-demo"
      ref="upload"
      action="/api/user/uploadfiles"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload> -->
  </div>
</template>

<script>
export default {
  methods:{
    handleClick(index) {
      if(index === 4) {
        this.$http.get('/api/user/exit').then((data) =>{
          if(data.data && data.data.code ===0) {
            this.$store.commit('logout')
            setTimeout(()=>{
              this.$router.push('/index')
            },300)
          } else {
            console.log('网络异常')
          }
        })
      }else{
        this.activedIndex = index
      }
    }
  },
  data() {
    return{ 
      activedIndex: 1,
    }
  }
}
</script>

<!--script>
      action="/aliy/file/upload"
action="/api/user/uploadfiles"
  export default {
    data() {
      return {
        fileList: [

        ]
      };
    },
    methods: {
      submitUpload() {
        console.log('upload')
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log('preview')
        console.log(file);
      }
    }
  }
</script-->

<style lang="scss" scoped>
@import "~@/style/variable.scss";
.my-page{
  .my-container{
    padding: 15px 0;
    .my-nav{
      float: left;
      width: 250px;
      .my-nav-title{
        padding: 12px 24px;
        font-size: 16px;
        background:  $themeColor;
        color: #fff;
      }
      .nav-container{
        border: 1px solid #ccc;
      }
      .my-nav-item{
        >a{
          height: 40px;
          line-height: 40px;
          color: #444;
            &:hover {
              color: $lineColor;
            }
            .active{
              color: $lineColor;
            }
          }
        padding-left: 24px;
        border-bottom: 1px dashed #ccc;
      }
    }
    .my-content{
      float: left;
      margin-left: 40px;
      width: 910px;
      min-height: 400px;
      .title{
        color: $themeColor;
        font-size: 14px;
        height: 32px;
        line-height: 32px;
        border-bottom: 1px solid $lineColor;
      }
    }
  }
}
</style>


<template>
  <div class="server-page">
    <div class="w1200 server-container">
      <div class="server-bg">
        <img class="server-bg-img" src="@/assets/img/serverbg.jpg"/>
      </div>
      <div class="server-content">
        <div class="content-item">
          <div class="icon iconfont icon-dati"></div>
          <div class="icon-line"></div>
          <div class="server-text-main">
            <div class="server-title">proofreadit</div>
            <div class="server-text">
              语法校对的主要服务包括：<br/>
              -Grammar errors correction<br/>
              -Punctuation errors correction<br/>
              -Spelling mistakes correction<br/>
              -Typographical mistakes correction<br/>
            </div>
          </div>
        </div>
        <div class="content-item">
          <div class="icon iconfont icon-xuexi"></div>
          <div class="icon-line"></div>
          <div class="server-text-main">
            <div class="server-title">Heavy Editing</div>
            <div class="server-text">
              语句润色包含语法校对的一切业务基础上做升级修改,主要服务内容如下：<br/>
              -Grammar errors correction<br/>
              -Punctuation errors correction<br/>
              -Spelling mistakes correction<br/>
              -Typographical mistakes correction<br/>
              -Sentences/Paragraphs structure polishing(句子/语法结构润色）<br/>
              -Comment boxes:e.g. pointing out the inadequacies of sentences.(注释框：举例：指出句子的不足点)<br/>
              -Opinions revision and improvement：improving paper style and fluence （修改和完善观点:改善文章风格和流畅度）<br/>
            </div>
          </div>
        </div>
        <div class="content-item">
          <div class="icon iconfont icon-xuexi1"></div>
          <div class="icon-line"></div>
          <div class="server-text-main">
            <div class="server-title">Paraphrasing/Rewrite</div>
            <div class="server-text">
              -Applicable to the need for reducing the high repetition rate of papers.<br/>
              -Applicable to the need for restating some contents of document in your own words.<br/>
              -Beyond word limit: choosing whole paper paraphrase for wordcount reduction<br/>
              -Less than word limit: choosing whole paper rewriting for wordcount increasement<br/>
            </div>
          </div>
        </div>
        <div class="content-item">
          <div class="icon iconfont icon-zengjia"></div>
          <div class="icon-line"></div>
          <div class="server-text-main">
            <div class="server-title">Expansion</div>
            <div class="server-text">
              Expansion: Our editors will expand your article according to your continuation thinking.<br/>
              Note: Pls mark the content needs to be expanded and remark your thinking in red. <br/>
              Rather than submit us the original document directly.<br/>
            </div>
          </div>
        </div>
      </div>
      <div class="button-group ">
        <el-button type="success" @click="goOrder" >去下单</el-button>
        <el-button type="warning" @click="goOrder">查看演示</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'server',
  data() {
    return{
    }
  },
  methods:{
    goOrder() {
      this.$router.push('/order')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/style/variable.scss";
.server-page{
  .server-container{
    .server-bg{
      width: 100%;
    }
    .server-bg-img{
      display: block;
      width: 100%;
      height: 250px;
    }
    .button-group{
      text-align: center;
      margin: 24px 0;
    }
    .server-content{
      padding: 24px 0;
      .content-item{
        .icon{
          font-size: 60px;
          height: 80px;
          text-align: center;
          margin: 0 auto;
          width:100px;
          color: $lineColor;
          &:hover{
            font-size: 80px;
          }
        }
        .icon-line{
          height: 3px;
          background: $lineColor;
        }
        .server-text-main{
          padding: 24px 0;
          .server-title{
            text-align: center;
            font-size: 26px;
            line-height: 40px;
            color: #444;
          }
          .server-text{
            text-align: center;
            font-size: 16px;
            line-height: 32px;
            color: #555;
          }
        }
      }
    }
  }
}
</style>

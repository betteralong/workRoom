<template>
  <div class="footer-page" id="contact">
    <div class="w1200 footer-container clearfix">
      <div class="footer-top clearfix">
        <div class="footer-top-left">
          <div class="footer-logo">
            <img src="@/assets/img/logo.png"/>
          </div>
          <div class="footer-top-intruduce">
            我们的目标是帮助全球各地的ESL(English as a Second Language) 研究人员，科研人士，留学生，作家和商务人士润色和编辑其英文水平，以便于他们顺利地完成他们的学业，学术和商业目标。
          </div>
        </div>
        <div class="footer-top-center clearfix">
          <ul class="footer-rank hasbottom">
            <li class="footer-rank-item">英文润色</li>
            <li class="footer-rank-item">学术翻译</li>
          </ul>
          <ul class="footer-rank hasbottom">
            <li class="footer-rank-item">安全保密</li>
            <li class="footer-rank-item">24小时服务</li>
          </ul>
          <ul class="footer-rank">
            <li class="footer-rank-item">多种支付方式</li>
            <li class="footer-rank-item">免费turnitin检测</li>
          </ul>
        </div>
        <div class="footer-top-right">
          <p class="footer-top-title">联系我们</p>
          <div class="footer-contact-time">全天24小时为您服务</div>
          <ul class="footer-concact">
            <li class="icon iconfont icon-qq"><a href="http://wpa.qq.com/msgrd?v=3&uin=212610832&site=qq&menu=yes" target="_blank">212610832</a></li>
            <li class="icon iconfont icon-icon-email"><a href="mailto:service@redcrayonstudio.com" target="_blank">service@redcrayonstudio.com</a></li>
            <li class="icon iconfont icon-weibo"><a href="https://weibo.com/u/6875157323" target="_blank">RedCrayonStudio</a></li>
            <li class="icon iconfont icon-weixin" @mousemove="handleOver"><span>RedCrayonStudio</span></li>
            <div class="code" v-show="showCode" @mouseout="handleOut">
              <img src="@/assets/img/wechatcode.jpg"/>
            </div>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="copyright">
          Copyright ® 2015-2017  Proofredit  All rights reserved. 
          <span><img src="@/assets/img/pic.gif"/></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleOver() {
      this.showCode = true
    },
    handleOut() {
      this.showCode = false
    }
  },
  data() {
    return {
      showCode: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/style/variable.scss";
.footer-page{
  .footer-container{
    border-top: 4px solid $lineColor;
    background: rgb(247, 247, 247);
    .footer-top{
      .footer-top-left{
        float: left;
        width: 300px;
        padding-top: 24px;
        .footer-logo{
          width: 140px;
          margin: 0 auto;
        }
        .footer-top-intruduce{
          padding-left: 24px;
          font-size: 14px;
          color: #666;
          line-height: 24px;
        }
      }
      .footer-top-center{
        float: left;
        width: 520px;
        .footer-rank{
          float: left;
          width: 170px;
          margin-top: 110px;
          .footer-rank-item{
            text-align: center;
            color: #666;
            margin-bottom: 12px;
            &:hover{
              color: #444;
            }
          }
        }
        .hasbottom{
          border-right: 2px solid #666;
        }
      }
      .footer-top-right{
        width: 250px;
        float: left;
        color: #666;
        margin: 20px 0 0 60px;
        .footer-top-title{
          font-size: 20px;
          line-height: 40px;
          height: 40px;
          text-align: center;
        }
        .footer-concact{
          position: relative;
          margin-top: 8px;
          .code {
            position: absolute;
            top: -140px;
            left: 0;
            background: #fff;
            width: 100%;
            height: 100%;
            >img{
              display: block;
              width: 100%;
            }
          }
          .icon{
            font-size: 24px;
            line-height: 40px;
            height: 40px;
            >a{
              font-size: 16px;
              margin-left: 16px;
              color: #666;
            }
             >span{
              font-size: 16px;
              margin-left: 16px;
              color: #666;
            }
          }
        }
      }
    }
    .copyright{
      text-align: center;
      padding: 0 0 24px 0;
      color: #555;
    }
  }
}
</style>

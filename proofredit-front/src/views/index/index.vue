<template>
  <div class="index-page">
    <div class="index-swiper">
      <el-carousel  height="500px" trigger="click">
        <el-carousel-item>
          <div class="swiper-item1">
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="swiper-item2">
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="swiper-item3">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="w1200 index-container">
      <!-- <div class="index-process">
        <ul class="index-process-container clearfix">
          <li class="porcess-item">
            <img src="@/assets/img/d1.png"/>
            <h3 class="process-title">上传文档</h3>
            <el-button type="primary" @click="goOrder">上传</el-button>
          </li>
          <li class="porcess-item">
            <img src="@/assets/img/d2.png"/>
            <h3 class="process-title">填写信息和付款</h3>
            <el-button type="primary" @click="goOrder">付款</el-button>
          </li>
          <li class="porcess-item">
            <img src="@/assets/img/d3.png"/>
            <h3 class="process-title">下载文档</h3>
            <el-button type="primary" @click="goOrder">下载</el-button>
          </li>
        </ul>
      </div> -->
      <div class="index-division">
        <div class="w1200 index-division-container">
          <div class="text-1">WE FOCUS ON</div>
          <div class="text-2">我们专注于</div>
          <div class="divison-line">
            <div class="dot"></div>
          </div>
        </div>
      </div>
      <div class="index-server">
        <ul class="server-contaier clearfix">
          <li class="server-item">
            <img src="@/assets/img/item-1.png"/>
            <div class="text-container">
              <div class="title">留学申请文书</div>
              <div class="content">个人陈述，推荐信，动机函，研究计划等</div>
            </div>
          </li>
          <li class="server-item">
            <div class="text-container">
              <div class="title">留学课程作业</div>
              <div class="content">Essay, Research paper, report, dissertation, book review, literature review, book review, etc.</div>
            </div>
            <img src="@/assets/img/item-2.png"/>
          </li>
          <li class="server-item">
            <img src="@/assets/img/item-4.png"/>
            <div class="text-container">
              <div class="title">个人文档</div>
              <div class="content">摘要，简历，求职信，等等。</div>
            </div>
          </li>
          <li class="server-item">
            <div class="text-container">
              <div class="title">商业用途</div>
              <div class="content">营销材料、报告、手册、小册子,提议,商业计划,网站内容、通讯、法律文书等。</div>
            </div>
            <img src="@/assets/img/item-5.png"/>
          </li>
          <li class="server-item">
            <img src="@/assets/img/item-3.png"/>
            <div class="text-container">
              <div class="title">国际期刊论文</div>
              <div class="content">目标是发表于SCI,SSCI,EI等的期刊论文</div>
            </div>
          </li>
        </ul>
      </div>
      <!-- <div class="index-server">
        <ul class="index-server-container clearfix">
          <li class="server-item">
            <div class="server-item-icon">
              <span class="icon iconfont icon-wenshu"></span>
            </div>
            <div class="server-title">
              留学申请文书
            </div>
            <div class="server-text">
              个人陈述，推荐信，动机函，研究计划等
            </div>
          </li>
          <li class="server-item">
            <div class="server-item-icon">
              <span class="icon iconfont icon-zaixianxuexi"></span>
            </div>
            <div class="server-title">
              留学课程作业
            </div>
            <div class="server-text">
              Essay, Research paper, report, dissertation, book review, literature review, book review, etc.
            </div>
          </li>
          <li class="server-item">
            <div class="server-item-icon">
              <span class="icon iconfont icon-gerenziliao"></span>
            </div>
            <div class="server-title">
              个人文档
            </div>
            <div class="server-text">
              摘要，简历，求职信，等等。
            </div>
          </li>
          <li class="server-item">
            <div class="server-item-icon">
              <span class="icon iconfont icon-Briefcase-"></span>
            </div>
            <div class="server-title">
              商业用途
            </div>
            <div class="server-text">
              营销材料、报告、手册、小册子,提议,商业计划,网站内容、通讯、法律文书等。
            </div>
          </li>
          <li class="server-item">
            <div class="server-item-icon">
              <span class="icon iconfont icon-fankuitianxie"></span>
            </div>
            <div class="server-title">
              国际期刊论文
            </div>
            <div class="server-text">
              目标是发表于SCI,SSCI,EI等的期刊论文
            </div>
          </li>
        </ul>
      </div> -->
      <!-- <div class="index-news clearfix" id="news">
        <div class="new-img" :style="{opacity:opacity}">
          <img src="@/assets/img/news.jpg">
        </div>  
        <div class="new-text">
          <div class="text-title">优惠活动</div>
          <div class="text-content">
            尊敬的用户，本月圣诞优惠活动，狂欢价7折下单！
            尊敬的用户，本月圣诞优惠活动，狂欢价7折下单!
          </div>
        </div>
      </div> -->
    </div>
    <div class="page-discount-container clearfix">
      <div class="discont-content">
        <div class="text-title">优惠活动</div>
          <div class="text-content">
            尊敬的用户，本月圣诞优惠活动，狂欢价7折下单！
            尊敬的用户，本月圣诞优惠活动，狂欢价7折下单!
          </div>
        </div>
      <img src="@/assets/img/active.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    goOrder() {
      this.$router.push('/order')
    },
    _startTimer() {
      const speed = 0.1
      setInterval(() => {
        if(this.opacity - 1 > 0){
          this.opacity = 0
        }else{
          this.opacity += speed
        }
      }, 250);
    },
    _closeTimer() {
      if(this.timer) {
        clearInterval(this.timer)
      }
    },
  },
  mounted() {
    console.log('in')
    // this.$nextTick(()=>{
    //   this._startTimer()
    //     if(this.$route.params.goActive =='1'){
    //       var anchor = this.$el.querySelector("#news")
    //       if(document.documentElement){
    //         document.documentElement.scrollTop = anchor.offsetTop
    //       }else{
    //         document.body.scrollTop = anchor.offsetTop
    //       }
    //     }
    // })
  },
  mounted() {
    console.log('aa')
  },
  activated() {
    console.log('test')
    this.$nextTick(()=>{
      //this._startTimer()
      console.log('in1')
        if(this.$route.params.goActive ===1){
          var anchor = this.$el.querySelector("#news")
          document.body.scrollTop = anchor.offsetTop
          console.log(anchor.offsetTop,document.body.scrollTop)
          console.log('anchor',anchor)
        }else if(this.$route.params.goActive ===2) {
           var anchor = this.$el.querySelector("#contact")
          document.body.scrollTop = anchor.offsetTop
          console.log(anchor.offsetTop,document.body.scrollTop)
          console.log('anchor',anchor)
        }
    })
  },
  destroyed() {
    // this._closeTimer()
  },
  data() {
    return{
      opacity: 0,
      timer: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/style/variable.scss";
.index-page{
  .index-swiper{
    .swiper-item1, .swiper-item2 , .swiper-item3{
      height: 500px;
    }
    .swiper-item1{
      background:url("~@/assets/img/2.png") 50% 0px no-repeat;
      width: 100%;
    }
    .swiper-item2{
      background:url("~@/assets/img/1.png") 50% 0px no-repeat;
      width: 100%;
    }
    .swiper-item3{
      background:url("~@/assets/img/3.png") 50% 0px no-repeat;
      width: 100%;
    }
  }
  .index-container{
    // .swiper-item{
    //   width: 100%;
    //   height: 337px;
    //   position: relative;
    //   .swiper-img{
    //     display: block;
    //     margin: 10px auto;
    //     width: 736px;
    //     height: 307px;
    //   }
    //   .swiper-text1{
    //     position: absolute;
    //     top: 20%;
    //     left: 12%;
    //     width: 500px;
    //     font-size: 34px;
    //     line-height: 50px;
    //     background: rgb(102,177,255);
    //     border-radius: 10px;
    //     text-align: center;
    //     color: #fff;
    //   }
    //   .swiper-text2{
    //     position: absolute;
    //     padding: 12px;
    //     bottom: 30%;
    //     right: 20%;
    //     width: 420px;
    //     font-size: 14px;
    //     line-height: 26px;
    //     background: #666;
    //     border-radius: 10px;
    //     color: #fff;
    //   }
    //   .swiper-text3{
    //     position: absolute;
    //     top: 30%;
    //     left: 20%;
    //     width: 500px;
    //     font-size: 28px;
    //     color: red;
    //   }
    //   .swiper-text5{
    //     position: absolute;
    //     top: 30%;
    //     left: 20%;
    //     width: 500px;
    //     font-size: 28px;
    //     color: rgb(30, 137, 244);
    //   }
    //   .swiper-text6{
    //     position: absolute;
    //     bottom: 30%;
    //     right: 24%;
    //     width: 380px;
    //     font-size: 40px;
    //     color: red;
    //   }
    // }
    .index-division-container{
      margin-top: 24px;
      .text-1{
        font-size: 40px;
        font-weight: 700px;
        line-height: 56px;
        text-align: center;
        color: #333;
      }
      .text-2{
        text-align: center;
        font-size: 24px;
        line-height: 32px;
        color: #666;
      }
      .divison-line{
        margin-top:  18px;
        position: relative;
        height: 3px;
        background: $lineColor;
        .dot{
          position: absolute;
          top: 50%;
          left: 50%;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background: $lineColor;
        }
      }
    }
    .index-process{
      margin-top: 24px;
      .porcess-item{
        float: left;
        width: 400px;
        text-align: center;
        .process-title{
          margin: 12px;
          font-size: 24px;
          color: #555;
        }
      }
    }
  }
  .index-server {
    .server-contaier{
      padding: 24px 0;
      .server-item{
        float: left;
        width: 20%;
        >img{
          width: 100%;
        }
        .text-container{
          height: 160px;
        }
        .title{
          font-size: 24px;
          text-align: center;
          color: #444;
        }
        .content{
          padding: 12px 18px;
          color: #666;
        }
      }
    }
  }
  // .index-server{
  //   padding: 24px 0;
  //   .index-server-container{
  //     .server-item{
  //       float: left;
  //       width: 180px;
  //       height: 200px;
  //       margin-right: 20px;
  //       border: 1px solid rgb(102,177,255);
  //       padding: 20px;
  //       .server-item-icon{
  //         width: 80px;
  //         height: 80px;
  //         margin: 0 auto;
  //         .icon{
  //           font-size: 80px;
  //           color: rgb(102,177,255);
  //           text-align: center;
  //         }
  //       }
  //       .server-title{
  //         margin-top: 12px;
  //         text-align: center;
  //         font-size: 18px;
  //         line-height: 24px;
  //         color: #444;
  //       }
  //       .server-text{
  //         font-size: 14px;
  //         color: #666;
  //       }
  //       &:hover{
  //         width: 190px;
  //         margin-right: 5px;
  //         box-shadow:0px 0px  2px 2px rgb(102,177,255);
  //       }
  //       &:nth-child(5){
  //         margin: 0;
  //       }
  //     }
  //   }
  // }
  // .index-news{
  //   padding: 24px 150px;
  //   .new-img{
  //     float: left;
  //   }
  //   .new-text{
  //     float: left;
  //     width: 400px;
  //     padding: 70px 0 0 100px;
  //     font-size: 14px;
  //     line-height: 24px;
  //     color: #333;
  //     .text-title{
  //       text-align: center;
  //       font-size: 32px;
  //       color: #333;
  //       line-height: 52px;
  //     }
  //   }
  // }
  .page-discount-container{
    padding: 10px 0 40px 0;
    position: relative;
    >img{
      display: block;
    }
    .discont-content{
      position:  absolute;
      width: 500px;
      top:50%;
      left:53%;
      transform:translate(-50%,-50%);
      .text-title{
        text-align: center;
        font-size: 24px;
        color: #444;
      }
      .text-content{
        color: #555;
      }
    }
  }
}
</style>

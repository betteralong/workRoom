<template>
  <div class="order-page">
    <div class="w1200 order-container">
      <div class="order-step">
        <el-steps :active="2">
          <el-step title="登录" icon="el-icon-view"></el-step>
          <el-step title="报价" icon="el-icon-upload"></el-step>
          <el-step title="完善信息" icon="el-icon-upload"></el-step>
          <el-step title="确认订单" icon="el-icon-date"></el-step>
          <el-step title="付款" icon="el-icon-star-on"></el-step>
        </el-steps>
      </div>
      <div class="order-form-container clearfix">
        <div class="order-form" ref="form" :model="form">
          <el-form label-width="80px">
            <p class="form-title">查看我们的定价</p>
            <el-form-item label="文档类型:">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="具体类型:">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="可选服务:">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="交稿时间:">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="字数:">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="币种">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <el-button size="medium" type="success">得到报价</el-button>
        </div>
        <div class="order-intruduce">
          <div class="order-intruduce-title">
            <i class="el-icon-document"></i><span>服务介绍</span>
            <div class="intruduce-text">针对不同类型的文档和服务，我们会安排相应语言水平和专业领域的编辑来负责。请选择您所需的文档类型和服务，并且获得相应的报价。所有报价都是基于美金报价的，其他币种的报价是以美金为基础按照实时汇率进行换算。</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order',
  data() {
    return{
      form:{

      }
    }
  }
}
</script>

<style lang="scss" >
@import "~@/style/variable.scss";
.order-page{
  .order-container{
    .order-step{
      padding: 24px 0;
      margin: 0 auto;
      width: 900px;
    }
    .order-form-container{
      width: 100%;
      margin-bottom: 24px;
      .order-form{
        float: left;
        width: 800px;
        text-align: center;
        background: rgb(250, 250 ,250);
        padding-bottom: 24px;
        .form-title{
          margin:15px 0;
          font-size: 24px;
          line-height: 40px;
          color: #444;
          text-align: center;
        }
        .el-form-item{
          width: 296px;
          margin: 0 auto;
        }
        .el-form-item{
          padding-bottom: 12px;
        }
      }
      .order-intruduce{
        float: right;
        width: 320px;
        background: rgb(250, 250 ,250);
        padding: 24px;
        .order-intruduce-title{
          color: #666;
          >i{
            font-size: 40px;
          }
          >span{
            font-size: 16px;
            line-height: 10px;
          }
          .intruduce-text{
            padding: 12px;
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
    }
  }
}
.order-page{
  .order-container{
    .el-step__head.is-finish{
      color: $lineColor;
      border-color: $lineColor;
    }
    .el-step__title.is-finish{
      color: $lineColor;
    }
  }
}
</style>
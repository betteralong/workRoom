<template>
  <div class="introduce-page">
    <div class="w1200 introduce-container">
      <h1 class="introduce-title">品牌介绍</h1>
      <div class="line"></div>
      <div class="introduce-text text1">&nbsp;&nbsp;&nbsp;&nbsp;Red Crayon 成立于2012年，致力于为全球各地的ESL（English as a Second Language)研究人员、科研人士、留学生、企业提供：</div>
      <div class="introduce-text">&nbsp;&nbsp;&nbsp;&nbsp;英文润色、学术翻译和SCI论文投稿等服务。多年来，Red Crayon 已编辑和润色超过1万份学业、学术、商业英文文档。我们会根据您的文稿研究领域选择对应专家进行英语母语化润色和校对，他们可以使您的文稿母语化，语言风格更加专业化，在原有内容不变的前提下使文稿更加简洁、观点精辟，从而达到语言上的最优化。</div>
      <div class="introduce-text">&nbsp;&nbsp;&nbsp;&nbsp;我们的英美籍编辑毕业于英美名校的各主要专业，均为具有硕士/博士学历的英文母语专业编辑。每位编辑拥有超强的学术水平，严谨的工作态度，在不同领域拥有超过6年的润色编辑经验。无论您需要学期论文，毕业论文，还是留学申请，我们的团队都能为您提供最完美的答卷。</div>
      <h1 class="introduce-title2">我们的优势</h1>
      <div class="line"></div>
      <div class="introduce-text2 text1">⚪&nbsp;&nbsp;全职专业英文母语编辑，均拥有6年以上的服务经验</div>
      <div class="introduce-text2">⚪&nbsp;&nbsp;信息保密，只有负责您文件的编辑才有权限看到文件内容。</div>
      <div class="introduce-text2">⚪&nbsp;&nbsp;严格按照确定的日期和时间交稿，实时反馈进度。</div>
      <div class="introduce-text2">⚪&nbsp;&nbsp;专业的客服团队，7*24小时不间断在线服务。</div>
      <div class="img-container">
        <img src="@/assets/img/about.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "~@/style/variable.scss";
.introduce-page{
  .introduce-container{
    padding: 24px;
    font-size: 24px;
    .introduce-title{
      width: 150px;
      margin: 0 auto;
      border-bottom: 3px solid $themeColor;
      text-align: center;
      color: #333;
      font-size: 32px;
      height: 50px;
      line-height: 40px;
      
    }
    .line{
      margin: 0 auto;
      width: 640px;
      height: 1px;
      background: rgb(102,102,102);
    }
    .introduce-text{
      width: 900px;
      margin: 0 auto;
      font-size: 18px;
      line-height: 32px;
      color: #555;
    }
    .introduce-title2{
      width: 180px;
      margin: 24px auto 0;
      border-bottom: 3px solid $themeColor;
      text-align: center;
      color: #333;
      font-size: 32px;
      height: 50px;
      line-height: 40px;
    }
    .introduce-text2{
      text-align: center;
      width: 900px;
      margin: 0 auto;
      font-size: 18px;
      line-height: 32px;
      color: #555;
    }
    .text1{
      margin-top: 24px;
    }
  }
  .img-container{
    width: 800px;
    margin: -110px auto -40px;
    >img{
      width: 100%;
      display: block;
    }
  }
}
</style>


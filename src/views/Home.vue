<template>
  <div class="home">
    <div class="wrapper">
      <div class="container">
        <div class="imgbox">
          <!-- 主界面具体展示内容 -->
          <div class="mui-content">
            <div class="Section1">
              <p class="MsoNormal" id="yinyan"><span >&nbsp;</span></p>
              <p class="MsoNormal"><span >&nbsp;</span></p>
              <h2>
                <span >一、&nbsp;前言</span>
              </h2>
              <h4>
                <span >&nbsp;&nbsp;1.1、致谢</span>
              </h4>

              <p class="MsoNormal" style="line-height:20.0pt">
                <span >&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>具体内容---{{zhanwei}}</span>
              </p>

              <p class="MsoNormal"><span >&nbsp;</span></p>

              <h4>
                <span >&nbsp;&nbsp;1.2、护理概述</span>
              </h4>

              <p class="MsoNormal" style="line-height:20.0pt">
                <span>具体内容</span>
              </p>

              <p class="MsoNormal"><span >&nbsp;</span></p>

              <h4>
                <span >&nbsp;&nbsp;1.3、注意事项</span>
              </h4>

              <p class="MsoNormal" style="line-height:20.0pt;">
                <span >&nbsp;&nbsp;&nbsp;</span><span>注意内容:</span>
              </p>

              <p class="MsoNormal" style="line-height:20.0pt;">
                <span>具体内容---{{zhanwei}}</span>
              </p>

              <h2>
                <span>二、&nbsp;护理内容介绍</span>
              </h2>

              <h4 class="MsoNormal"><span>&nbsp;&nbsp;2.1、内容结构</span></h4>

              <p class="MsoNormal">
              <div class="tupian">
                <!--                                     <img src="images/fengjing.jpg" /> -->
                <img src="https://cdn.jsdelivr.net/gh/luckyu2/imgLibrary/Images/fengjing.jpg" />
              </div>
              </p>

              <p class="MsoNormal">
              <div class="tupian">
                <!--                                      <img src="images/fengjing.jpg" /> -->
                <img src="https://cdn.jsdelivr.net/gh/luckyu2/imgLibrary/Images/fengjing.jpg" />
              </div>
              </p>

              <p class="MsoNormal"><span >&nbsp;</span></p>

              <h4>
                <span >&nbsp;&nbsp;2.2、物料清单</span>
              </h4>
              <p class="MsoNormal"><span >&nbsp;</span></p>
              <table align="center" class="MsoNormal table-container" border=1 cellspacing=0 cellpadding=0>
                <tr>
                  <td width=68 valign=top style="width:150pt;border:solid windowtext 1.0pt;">
                    <p class="MsoNormal1"><span>XXX</span></p>
                  </td>
                  <td width=123 valign=top style="width:92.15pt;border:solid windowtext 1.0pt; border-left:none;">
                    <p class="MsoNormal1"><span>1台</span></p>
                  </td>
                </tr>

                <tr>
                  <td width=68 valign=top style="width:150pt;border:solid windowtext 1.0pt;border-top:none;">
                    <p class="MsoNormal1"><span >XX线</span></p>
                  </td>
                  <td width=123 valign=top style="width:92.15pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;">
                    <p class="MsoNormal1"><span></span>1条</p>
                  </td>
                </tr>
              </table>

              <p class="MsoNormal"><span >&nbsp;</span></p>
              <p class="MsoNormal" id="anzhuang"><span >&nbsp;</span></p>
              <p class="MsoNormal"><span >&nbsp;</span></p>

              <h2>三、&nbsp;护理指南</h2>
              <h4>&nbsp;3.1、文字内容1</h4>
              <p class="MsoNormal">
                <span>具体内容--{{zhanwei}}</span>
              </p>
              <p class="MsoNormal"><span >&nbsp;</span></p>

              <h4><span >&nbsp;&nbsp;3.2、文字内容2</span></h4>
              <p class="MsoNormal">
                <span>具体内容-{{zhanwei}}</span>
              </p>
              <p class="MsoNormal"><span >&nbsp;</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      zhanwei:'健康的音符，随风花雨，飘进你心里，平安的旋律，如花烂漫，闪亮在你眼里，祝你早日康复，回到幸福生活里。',
      images: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    }
  }
}
</script>
<style>
  /*body{*/
  /*  margin:0px;*/
  /*  padding:0px;*/
  /*  font-family: "Microsoft YaHei";*/
  /*}*/
  .tupian {
    text-align: center;
  }
  img{
    max-width:100%;
  }
  table tr td {
    text-align: center;
    vertical-align: middle;
    word-wrap: break-word;
    word-break: break-all;
  }
  h2{
    text-align: center;
  }
  ul li a:hover,ul li a{
    color: #ffffff;
  }
  header h1 a{
    width: 30px;
  }
  header h1 a img{
    position: absolute;
    top: -5px;
    width: 28px;
    height: 24px;
  }
</style>

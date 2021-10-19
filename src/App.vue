<template>
  <div id="app">
    <div class="nav">
      <van-nav-bar
              border
              fixed
      >
        <van-icon name="invition" slot="title" ><span style="font-size:22px;font-weight: bold;">{{navTitle}}</span></van-icon>
      </van-nav-bar>
    </div>
    <div class="content">
      <router-view/>
    </div>
    <div style="position: fixed;bottom: 40px;width: 100%">
      <van-notice-bar   mode="closeable">
        {{text}}
      </van-notice-bar>
    </div>
    <div class="tabBar">
      <van-tabbar v-model="active"  active-color="#4fb517" >
        <van-tabbar-item  @click="$router.push(`/home`)" >术前康复
          <van-icon slot="icon" :name="active == 0 ? icon.active : icon.normal"/>
        </van-tabbar-item>
        <van-tabbar-item  icon="like"  @click="$router.push(`/about`)">
          术后康复
          <van-icon slot="icon" :name="active == 1 ? icon1.active : icon1.normal"/>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
  import bus from '@/utils/bus'
  export default {
    data() {
      return {
        text:"健康的音符，随风花雨，飘进你心里，平安的旋律，如花烂漫，闪亮在你眼里，祝你早日康复，回到幸福生活里。",
        navTitle:"术前康复",
        icon: {
          normal: 'fire-o',
          active: 'fire'
        },
        icon1: {
          normal: 'like-o',
          active: 'like'
        },
        active: 0
      }
    },
   created() {
     bus.$on('message', (e) => {
       // console.log(e)
       this.navTitle = e
     })
   }
  }
</script>

<style>
  #app {
    height: 50px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
  }
  /*顶部*/
  .nav{
    position: relative;
    height: 40px;
    width: 100%;
  }
  /*内容部分*/
  .content {
    box-sizing: border-box;
    position: absolute;
    top: 40px;
    padding: 10px;
    padding-bottom: 40px;
    /*border: 1px solid red;*/
    overflow-x: scroll;
    overflow-y: hidden;
    /*解决ios上滑动不流畅*/
    -webkit-overflow-scrolling: touch;
    /*纵向超出部分将会隐藏，即滚动条部分被挤出可视区域*/
    /*padding-bottom: 1px;*/
  }
  .content::-webkit-scrollbar{
    display: none;
  }
  .tabBar a{
    text-decoration:none;
    color:inherit;
    font-weight: bold;
  }
</style>

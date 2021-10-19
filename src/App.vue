<template>
  <div id="app">
    <div class="nav">
      <van-nav-bar
              border
              fixed
      >
        <van-icon name="flower-o" slot="title" ><span style="color: black;font-weight: bold;">健康手册</span></van-icon>
      </van-nav-bar>
<!--      <van-nav-bar-->
<!--              title="健康手册"-->
<!--              left-arrow-->
<!--              @click-left="onClickLeft"-->
<!--      />-->
    </div>
    <div class="notice">
      <van-notice-bar  style="width: 100%" mode="closeable">
        健康的音符，随风花雨，飘进你心里，平安的旋律，如花烂漫，闪亮在你眼里，祝你早日康复，回到幸福生活里。
      </van-notice-bar>
    </div>
    <div class="content">
      <router-view/>
    </div>
    <div class="tabBar">
      <van-tabbar v-model="active"  active-color="#42b983">
        <van-tabbar-item   >
          <router-link to="/">术前康复</router-link>
          <van-icon
                  slot="icon"
                  :name="active == 0 ? icon.active : icon.normal"
          />
        </van-tabbar-item>
        <van-tabbar-item  icon="like" >
          <router-link to="/about">术后康复</router-link>
          <van-icon
                  slot="icon"
                  :name="active == 1 ? icon1.active : icon1.normal"
          />
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
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
    methods: {

    }
  }
</script>

<style>
  /*顶部*/
  .nav{
    height: 40px;
    width: 100%;
  }
  /*内容部分*/
  .content {
    position: absolute;
    top: 40px;
    padding: 10px;
    /*border: 1px solid red;*/
  }
  .notice{
    width: 90%;
    position: fixed;
    top: 40px;
    z-index: 99;
  }
  .tabBar a{
    text-decoration:none;
    color:inherit;
    font-weight: bold;
  }
</style>

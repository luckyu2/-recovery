<template>
  <div class="about">
    <van-tabs v-model="active" color="#4fb517" title-active-color="#4fb517" swipeable animated sticky offset-top="40">
      <van-tab title="乳腺">
        <Article/>
      </van-tab>
      <van-tab title="眼科">
        <Article/>
      </van-tab>
      <van-tab title="甲状腺">
        <Article/>
      </van-tab>
      <van-tab title="肿瘤">
        <Article/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import Article from "../components/Article";
  export default {
    name: 'about',
    components: {
      Article
    },
    data() {
      return {
        active: 1
      }
    }
  }
</script>
<style  >
  .about .van-tabs .van-tab__text {
    font-size: 18px;
    font-weight: bold;
  }
  .about .van-tabs .van-tab--active{
    font-size: 24px;
    font-weight: bold;
  }
</style>

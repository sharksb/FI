<template>
    <van-tabbar v-model="active">
  <van-tabbar-item name="home" icon="home-o" to="/index">首页</van-tabbar-item>
  <van-tabbar-item name="search" icon="qr">功能</van-tabbar-item>
  <van-tabbar-item name="friends" icon="friends-o">论坛</van-tabbar-item>
  <van-tabbar-item name="setting" icon="contact">我的</van-tabbar-item>
</van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
     data() {
    return {
      active: 'home',
    };
  },
   components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
}
</script>

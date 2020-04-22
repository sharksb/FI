<template>
    <van-tabbar v-model="active">
  <van-tabbar-item name="home" icon="home-o" to="/login">标签</van-tabbar-item>
  <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
  <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
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

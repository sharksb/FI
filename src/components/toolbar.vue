<template>
  <van-tabbar route>
    <van-tabbar-item replace icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item replace icon="qr" :to=path>功能</van-tabbar-item>
    <van-tabbar-item replace icon="friends-o" to="/platform">论坛</van-tabbar-item>
    <van-tabbar-item replace icon="contact" to="/personCneter">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  data() {
    return {
      type: null,
      path:''
    };
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  beforeMount() {
     this.type = sessionStorage.getItem("type");
    if(this.type == "学生") {
      this.path = '/sfeature'
    }else{
      this.path = '/tfeature'
    }
  },
  methods: {

  }
};
</script>

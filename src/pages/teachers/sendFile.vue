<template>
  <div>
    <van-nav-bar title="发送文件" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active">
      <van-tab title="发送文件">内容 1</van-tab>
      <van-tab title="文件列表">内容 2</van-tab>
      <van-tab title="作业列表">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { NavBar, Tab, Tabs } from "vant";
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  methods: {
    onClickLeft() {
      console.log("返回");
    }
  }
};
</script>
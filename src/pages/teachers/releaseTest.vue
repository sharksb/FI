<template>
  <div>
    <van-nav-bar title="发布测试" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active">
      <van-tab title="发布测试">
        <releasetest></releasetest>
      </van-tab>
      <van-tab title="测试统计"></van-tab>
      <van-tab title="测试成绩"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { NavBar, Tab, Tabs } from "vant";
import releasetest from "@/components/teachers/release_test";

export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    releasetest
  },
  methods: {
    onClickLeft() {
      console.log("返回");
    }
  }
};
</script>
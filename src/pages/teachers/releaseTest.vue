<template>
  <div>
    <van-nav-bar title="发布测试" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active" color="#1989fa">
      <van-tab title="发布测试" name="releaseTest">
        <releasetest></releasetest>
      </van-tab>
      <van-tab title="测试统计" name="testStatis">
        <teststatistics testtype="testStatis"></teststatistics>
      </van-tab>
      <van-tab title="测试成绩" name="testScore">
        <teststatistics testtype="testScore"></teststatistics>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { NavBar, Tab, Tabs } from "vant";
import releasetest from "@/components/teachers/release_test";
import teststatistics from "@/components/teachers/test_statistics";
export default {
  data() {
    return {
      active: ""
    };
  },
  beforeMount() {
    this.active = this.$route.query.active;
  },
  components: {
    [NavBar.name]: NavBar,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    releasetest,
    teststatistics
  },
  methods: {
    onClickLeft() {
       this.$router.push({ path: "/tfeature" });
    }
  }
};
</script>
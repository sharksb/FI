<template>
  <div class="handHomework">
    <van-nav-bar title="获取文件" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active" color="#1989fa">
      <van-tab title="下载文件">
          <obtainFile></obtainFile>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { NavBar, Tab, Tabs } from "vant";
import obtainFile from "@/components/students/obtain_file";
export default {
  data() {
    return {
      active: ""
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    obtainFile
  },
  methods: {
    onClickLeft() {
      console.log("返回");
    }
  }
};
</script>

<style>
.van-tabs__line{
  width: 100% !important;
}
</style>
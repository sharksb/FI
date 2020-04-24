<template>
  <div class="sendFile">
    <van-nav-bar title="发送文件" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active" color="#1989fa">
      <van-tab title="发送文件"><sdfile></sdfile> </van-tab>
      <van-tab title="文件列表"><filelist></filelist></van-tab>
      <van-tab title="作业列表"><homeworklist></homeworklist> </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { NavBar, Tab, Tabs } from "vant";
import sdfile from "@/components/teachers/sd_file";
import filelist from "@/components/teachers/file_list";
import homeworklist from "@/components/teachers/homework_list";
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
    sdfile,
    filelist,
    homeworklist
  },
  methods: {
    onClickLeft() {
      console.log("返回");
    }
  }
};
</script>

<style scoped>
.sendFile{
  text-align: center;
}
</style>
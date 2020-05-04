<template>
  <div class="handHomework">
    <van-nav-bar title="上交作业" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active" color="#1989fa">
      <van-tab title="提交作业">
        <handdhomework></handdhomework>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { NavBar, Tab, Tabs } from "vant";
import handdhomework from "@/components/students/hand_homework";
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
    handdhomework
  },
  methods: {
    onClickLeft() {
       this.$router.go(-1);
    }
  }
};
</script>


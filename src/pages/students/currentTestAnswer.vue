<template>
  <div class="currTestAnswer">
    <van-nav-bar title="提交" left-text="提交作业" left-arrow @click-left="onClickLeft" />
    <testAnswer></testAnswer>
  </div>
</template>

<script>
import { NavBar } from "vant"
import testAnswer from "@/components/students/test_answer"
export default {
  data() {
    return {};
  },
  components: {
    [NavBar.name]: NavBar,
    testAnswer
  },
  methods: {
    onClickLeft() {
    //   this.$router.go(-1);
    console.log("返回")
    }
  }
};
</script>
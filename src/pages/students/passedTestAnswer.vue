<template>
  <div class="currTestAnswer">
    <van-nav-bar title="第四章测试答案" left-text="测试列表" left-arrow @click-left="onClickLeft" />
    <testAnswer></testAnswer>
  </div>
</template>

<script>
import { NavBar } from "vant"
import testAnswer from "@/components/students/test_answer"
export default {
  data() {
    return {
      
    };
  },
  components: {
    [NavBar.name]: NavBar,
    testAnswer
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/sfeature" });
    }
  }
};
</script>
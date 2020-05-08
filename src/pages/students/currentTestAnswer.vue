<template>
  <div class="currTestAnswer">
    <van-nav-bar title="提交" left-text="提交作业" left-arrow @click-left="onClickLeft" />
    <testAnswer :currentAnswer="currentAnswer"></testAnswer>
  </div>
</template>

<script>
import { NavBar } from "vant"
import testAnswer from "@/components/students/test_answer"
export default {
  data() {
    return {
      currentAnswer:true
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
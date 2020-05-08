<template>
  <div class="currentTest">
    <van-nav-bar title="第四章测试" left-text="测试列表" left-arrow @click-left="onClickLeft" />

    <van-form @submit="onSubmit">
      <studentTest></studentTest>
      <van-button native-type="submit" type="info" block class="reset">重新测试</van-button>
    </van-form>
  </div>
</template>

<script>
import { NavBar, CountDown, Button, Form, Toast } from "vant";
import studentTest from "@/components/students/student_test";
export default {
  data() {
    return {
      time: 60 * 60 * 60
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [CountDown.name]: CountDown,
    [Button.name]: Button,
    [Form.name]: Form,
    [Toast.name]: Toast,
    studentTest
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/students/classTest",
        query: { active: "passedTest" }
      });
    },

    onSubmit(values) {
      Toast("当前测试不计入成绩");
      setTimeout(() => {
        this.$router.push({ path: "/students/passedTestAnswer" });
      }, 2000);
    }
  }
};
</script>

<style scoped>
.item {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  margin-right: 5px;
  color: #302a2a;
  font-size: 14px;
  text-align: center;
  border: 1px solid #ddd4d4;
}
.van-count-down {
  text-align: center;
  margin: 1rem auto;
}

.reset {
  margin-top: 4rem;
}
</style>
<template>
  <div class="currentTest">
    <van-nav-bar title="当前测试" left-text="课堂测试" left-arrow @click-left="onClickLeft" />
    <van-count-down :time="time" format="mm:ss"  @finish="finish">
      <template v-slot="timeData">
        <span class="item">{{ timeData.minutes }}</span>:
        <span class="item">{{ timeData.seconds }}</span>
      </template>
    </van-count-down>
     <van-form @submit="onSubmit">
    <studentTest></studentTest>
     <van-button native-type="submit" type="info" block>提交</van-button>
     </van-form>
  </div>
</template>

<script>
import { NavBar, CountDown, Button, Form, Toast } from "vant";
import studentTest from "@/components/students/student_test";
export default {
  data() {
    return {
      time: 30*60*60
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
      this.$router.push({ path: "/tfeature" });
    },

    finish(){
         Toast('测试时间已到');
        //  setTimeout(()=>{
        //       this.$router.go(-1);
        //  },2000)
    },
     onSubmit(values){
          Toast('提交成功');
         setTimeout(()=>{
              this.$router.push({ path: "/students/currentTestAnswer" });
         },2000)
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
  .van-count-down{
      text-align: center;
      margin: 1rem auto;
  }

.currentTest .van-button {
  width: 90%;
  margin: 30px auto 0;
}
</style>
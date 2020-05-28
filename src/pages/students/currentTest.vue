<template>
  <div class="currentTest">
    <van-nav-bar title="当前测试" left-text="课堂测试" left-arrow @click-left="onClickLeft" />
    <h5>结束时间{{endTime}}</h5>
    <van-form @submit="onSubmit">
      <studentTest :questions="questions"></studentTest>
      <van-button native-type="submit" type="info" block>提交</van-button>
    </van-form>
  </div>
</template>

<script>
import { NavBar, CountDown, Button, Form, Toast, Dialog } from "vant";
import studentTest from "@/components/students/student_test";
import app from "@/api/app";
export default {
  data() {
    return {
      questions: null,
      endTime: ""
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
  beforeMount() {
    let testName = this.$route.query.testName;
    console.log(testName);
    this.axios({
      method: "get",
      url: `${this.apiPath}test/obtainOneTest?testName=${testName}`
    })
      .then(reponse => {
        console.log(reponse);
        if (reponse.data.code == 1) {
          Toast("测试不存在");
        } else {
          let data = reponse.data.data;
          this.testTitle = data.testName;
          let testQuestions = data.questions;
          let questions = [];
          let index = null;
          for (index in testQuestions) {
            console.log(index);
            let opt = null;
            if (testQuestions[index].selectedtype == "radio") {
              opt = ["A", "B", "C", "D"];
            } else if (testQuestions[index].selectedtype == "checkbox") {
              opt = ["A", "B", "C", "D", "E", "F"];
            }

            questions.push({
              type: testQuestions[index].selectedtype,
              title: testQuestions[index].title,
              option: testQuestions[index].option,
              opt: opt,
              index: parseInt(index) + 1
            });
            console.log(questions);
            this.questions = questions;
            this.endTime = data.endTime;
          }
        }
        return new Promise((resolve, reject) => {
          resolve(reponse.data.data.endTime);
        });
      })
      .then(endTime => {
        let endTimes = new Date(endTime);
        let replaceendTime = new Date(endTime);
        let endTimeTost = app.transformChangeMinute(replaceendTime, 5);
        let timeId = setInterval(() => {
          let nowtime = new Date(app.transformMinutes(Date.now())).getTime();
          if (nowtime == endTimeTost.getTime()) {
            Dialog({ message: "距离测试提交时间只剩5分钟，请尽快提交" });
          } else if (nowtime == endTimes.getTime()) {
            Toast("测试已结束");
            clearInterval(timeId);
            this.$router.push({ path: "/students/classTest" });
          }
        }, 60000);
      })
      .catch(err => {
        console.log(err);
      });
  },

  methods: {
    onClickLeft() {
      this.$router.push({ path: "/sfeature" });
    },
    onSubmit(values) {
      let testName = this.$route.query.testName;
      let newquestions = this.questions;
      let idCard = sessionStorage.getItem("idCard");
      let index = null;
      let questions = [];
      for (index in newquestions) {
        let indexs = parseInt(index) + 1;
        console.log(newquestions[index]);
        questions.push({
          title: newquestions[index].title,
          index: indexs,
          yourAnswer: values[indexs]
        });
      }
      console.log(questions);
      let info = JSON.stringify({
        idCard: idCard,
        testName: testName,
        questions: questions
      });
      console.log(info);
      this.axios({
        url: `${this.apiPath}test/sendOneStudentAnswerCurrent`,
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        data: info
      }).then(response => {
        console.log(response);
        let data = response.data;
        if (data.code == 2) {
          Toast(data.message);
        } else if (data.code == 3) {
          Toast(data.message);
          this.$router.push({
            path: "/students/currentTestAnswer",
            query: { idCard: idCard, testName: testName }
          });
        }
      });
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

.currentTest .van-button {
  width: 90%;
  margin: 30px auto 0;
}
.currentTest h5 {
  font-size: 14px;
  text-align: center;
}
</style>
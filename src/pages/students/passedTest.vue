<template>
  <div class="currentTest">
    <van-nav-bar :title="testTitle" left-text="测试列表" left-arrow @click-left="onClickLeft" />

    <van-form @submit="onSubmit">
      <studentTest :questions="questions"></studentTest>
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
      testTitle: null,
      questions: null
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
    this.axios({
      method: "get",
      url: `${this.apiPath}test/obtainOneTest?testName=${testName}`
    })
      .then(reponse => {
        console.log(reponse);
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
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/students/classTest",
        query: { active: "passedTest" }
      });
    },

    onSubmit(values) {
      console.log(values[2]);
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
          yourAnswer: [values[indexs]]
        });
      }
      console.log(questions);
      let info = JSON.stringify({
        idCard: idCard,
        testName: testName,
        questions: questions
      });
      console.log(info)
      this.axios({
        url: `${this.apiPath}test/sendOneStudentAnswer`,
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        data: info
      }).then(response => {
        console.log(response)
        let data = response.data
        if(data.code == 2){
          Toast(data.message)
        }else if(data.code == 3){
          Toast(data.message)
          this.$router.push({
          path: "/students/passedTestAnswer",
          query: { idCard: idCard ,testName:testName}
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

.reset {
  margin-top: 4rem;
}
</style>
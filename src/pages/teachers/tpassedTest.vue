<template>
  <div class="currentTest">
    <van-nav-bar :title="testTitle" left-text="测试列表" left-arrow @click-left="onClickLeft" />

    <van-form>
      <studentTest :questions="questions"></studentTest>
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
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/teachers/releaseTest",
        query: { active: "releaseTest" }
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
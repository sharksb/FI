<template>
  <div class="currTestAnswer">
    <van-nav-bar title="提交" left-text="提交作业" left-arrow @click-left="onClickLeft" />
    <testAnswer :questionAnswers="questionAnswers" :correctRate="correctRate" :score="score"></testAnswer>
  </div>
</template>

<script>
import { NavBar } from "vant";
import testAnswer from "@/components/students/test_answer";
export default {
  data() {
    return {
      currentAnswer: true,
      questionAnswers: [],
      correctRate: null,
      score: null
    };
  },
  components: {
    [NavBar.name]: NavBar,
    testAnswer
  },
  beforeMount() {
    let idCard = this.$route.query.idCard;
    let testName = this.$route.query.testName;
    console.log(idCard);
    console.log(testName);
    let info = JSON.stringify({
      idCard: idCard,
      testName: testName
    });
    this.axios({
      url: `${this.apiPath}test/obtainOneStudentCurrentAnswer?idCard=${idCard}&testName=${testName}`,
      method: "get"
    })
      .then(response => {
        console.log(response);
        let data = response.data;
        if (data.code == 2) {
          this.titles = data.data.testName;
          this.questionAnswers = data.data.questions;
          this.score = data.rank.countScore;
          this.correctRate = data.rank.ranking;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/sfeature" });
    }
  }
};
</script>
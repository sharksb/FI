<template>
  <div class="testAnswer">
    <van-panel v-for="(questionAnswer, index) in questionAnswers" :key="index">
      <template #header>
        <div class="testanswer_title">
          <img src="@/assets/testScore.png" alt />
          <span>
            {{questionAnswer.title}}
          </span>
        </div>
      </template>
      <div class="hwd_content">
        <span class="correctAns">正确答案：{{questionAnswer.correctAns}}</span>
        <span class="yourAns">你的答案：{{questionAnswer.yourAns}}</span>
      </div>
    </van-panel>

    <div class="testans_footer">
      <p>正确率:{{correctRate}}%</p>
      <van-progress :percentage="correctRate" stroke-width="15" :show-pivot="false" />
      <p>排名:{{rankRate}}%</p>
      <van-progress :percentage="rankRate" stroke-width="15" :show-pivot="false" color="#F33952" />
    </div>
  </div>
</template>

<script>
import { Panel, Progress } from "vant";
export default {
  data() {
    return {
      questionAnswers: [
        {
          title: ` 常见的网络银行自助处理系统有ATM系统、POS系统、电话银行系统和自助银行系统等。`,
          correctAns:"A",
          yourAns:"B"
        },
        {
          title: ` 狭义的网络金融不包括。`,
          correctAns:"B",
          yourAns:"D"
        }
      ],
      correctRate:50,
      rankRate:40
    };
  },
  components: {
    [Panel.name]: Panel,
    [Progress.name]: Progress
  }
};
</script>

<style>
.testAnswer {
  margin-top: 2rem;
}
.testanswer_title {
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  padding-top: 0.5rem;
}

.testanswer_title span {
  margin-left: 15px;
}
.hwd_content {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.van-panel__content {
  margin-top: 1rem;
}
.van-progress {
  border-radius: 66px;
}

.testans_footer {
  width: 90%;
  margin: 0 auto;
  margin-top: 2rem;
}
.testans_footer p {
  margin-top: 1rem;
  margin-bottom: 0.3rem;
}
.van-cell-group{
    margin-bottom: 2rem;
}
</style>
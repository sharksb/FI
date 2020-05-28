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
        <span class="correctAns">正确答案:<span v-for="(ansc,index) in questionAnswer.correctOption" :key="index">{{ansc}}&nbsp;</span></span>
        <!-- {{questionAnswer.yourAnswer}}  -->
        <span class="yourAns">你的答案:<span v-for="(ans,index) in questionAnswer.yourAnswer" :key="index">{{ans}}&nbsp;</span>  </span>
      </div>
    </van-panel>

    <div class="testans_footer">
      <p>正确率:{{correctRate}}%</p>
      <van-progress :percentage="parseInt(correctRate)" stroke-width="15" :show-pivot="false" />
      <p>分数:{{score}}</p>
    </div>
  </div>
</template>

<script>
import { Panel, Progress } from "vant";
export default {
  props:{
     currentAnswer: {
      type: Boolean,
      default: false
    },
    questionAnswers:{
      type:Array,
      default:[]
    },
    correctRate:{
      type:String,
      default:false,
    },
    score:{
      type:Number,
      default:false
    }
    
  },
  data() {
    return {

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
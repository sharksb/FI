<template>
  <div class="testStasticDetail">
    <van-nav-bar title="详情" left-text="测试统计" left-arrow @click-left="onClickLeft" />
    <div class="chartStatisc_title">
      <img src="@/assets/testScore.png" alt />
      <span>第四次测试</span>
    </div>
    <div v-for="(ques, index) in question" :key="index">
      <chartStastic :question="ques" :id="'chartStastic'+index"></chartStastic>
    </div>
  </div>
</template>

<script>
import { NavBar } from "vant";
import chartStastic from "@/components/teachers/chart_statics";
export default {
  data() {
    return {
      question: [
        {
          title: "第一题",
          xData: ["A", "B", "C", "D"],
          data: [10, 50, 15, 20],
          color: "#c23531"
        },
        {
          title: "第二题",
          xData: ["A", "B", "C", "D", "E", "F"],
          data: [12, 33, 42, 11, 2, 3],
          color: "#61a0a8"
        },
        {
          title: "第三题",
          xData: ["A", "B"],
          data: [70, 11],
          color: "#91c7ae"
        }
      ]
    };
  },
  components: {
    [NavBar.name]: NavBar,
    chartStastic
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/teachers/releaseTest",
        query: { active: "testStatis" }
      });
    }
  }
};
</script>

<style scoped>
.chartStatisc_title {
  width: 80%;
  margin: 2rem auto 0;
  display: flex;
  align-items: center;
}
.chartStatisc_title span {
  margin-left: 15px;
}

</style>
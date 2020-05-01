<template>
  <div class="chartStatisc">
      <div class="chartStatisc_title">
          <img src="@/assets/testScore.png" alt="">
          <span>第四次测试</span>
      </div>
    <div ref="chartBar" class="chartStastic" id="chartStastic"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.getEchartData();
  },
  methods: {
    getEchartData() {
      const chartBar = this.$refs.chartBar;

      const myChart = this.$echarts.init(
        document.getElementById("chartStastic")
      );

      console.log(myChart);
      const option = {
        color: ["#91c7ae", "#749f83", "#ca8622", "#bda29a"],
        xAxis: {
          data: ["A", "B", "C", "D"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10],
            label:{
                show:true,
                 position : 'outside'
            }
            // color:['#c23531','#2f4554', '#61a0a8', '#d48265']
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>

<style scoped>
.chartStatisc_title{
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
}
.chartStatisc_title span{
    margin-left: 15px;
}

.chartStastic {
  width: 80%;
  margin: 0 auto;
  height: 20rem;
}
</style>
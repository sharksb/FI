<template>
  <div class="chartStatisc">
    <div class="chartStatisc_title">
      <img src="@/assets/testScore.png" alt />
      <span>第四次测试</span>
    </div>
    <div ref="chartBar" class="chartStastic" id="chartStastic"></div>
    <div ref="chartBar1" class="chartStastic" id="chartStastic1"></div>
    <div ref="chartBar2" class="chartStastic" id="chartStastic2"></div>
  </div>
</template>

<script>
export default {

  mounted() {
    this.getEchartData();
  },
  methods: {
    getEchartData() {
      const chartBar = this.$refs.chartBar;
      const chartBar1 = this.$refs.chartBar1;
      const chartBar2 = this.$refs.chartBar2;

      const myChart = this.$echarts.init(
        document.getElementById("chartStastic")
      );
      const myChart1 = this.$echarts.init(
        document.getElementById("chartStastic1")
      );
      const myChart2 = this.$echarts.init(
        document.getElementById("chartStastic2")
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
            label: {
              show: true,
              position: "outside"
            }
            // color:['#c23531','#2f4554', '#61a0a8', '#d48265']
          }
        ]
      };
      myChart.setOption(option);
      myChart1.setOption(option);
      myChart2.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
        myChart1.resize();
        myChart2.resize();
      });
    }
  }
};
</script>

<style scoped>
.chartStatisc {
  margin-top: 20px;
}
.chartStatisc_title {
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.chartStatisc_title span {
  margin-left: 15px;
}

.chartStastic {
  width: 80%;
  margin: 0 auto;
  height: 20rem;
}
</style>
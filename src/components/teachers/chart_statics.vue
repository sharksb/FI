<template>
  <div class="chartStatisc">
    
    <div ref="chartBar" class="chartStastic" :id="id"></div>
  </div>
</template>

<script>
export default {
  props: {
    question:Object,
    id:String
  },
  mounted() {
    this.getEchartData();
  },
  methods: {
    getEchartData() {
      const chartBar = this.$refs.chartBar;

      const myChart = this.$echarts.init(
        document.getElementById(this.id)
      );

      console.log(myChart);
      const option = {
        color:this.question.color,
        title: {
          text: this.question.title,
          textStyle: {
            fontWeight: 400,
            fontSize: 16
          }
        },
        xAxis: {
          data: this.question.xData
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: this.question.data,
            label: {
              show: true,
              position: "outside"
            }
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
.chartStatisc {
  margin-top: 20px;
}

.chartStastic {
  width: 80%;
  margin: 0 auto;
  height: 20rem;
}
</style>
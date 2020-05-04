<template>
  <div class="testStasticDetail">
    <van-nav-bar title="详情" left-text="测试统计" left-arrow @click-left="onClickLeft" />
    <chartStastic></chartStastic>
  </div>
</template>

<script>
import { NavBar } from "vant";
import chartStastic from "@/components/teachers/chart_statics";
export default {
  data() {
    return {};
  },
  components: {
    [NavBar.name]: NavBar,
    chartStastic
  },
  methods: {
    onClickLeft() {
      this.$router.push({path:'/teachers/releaseTest',query:{active:'testStatis'}})
    }
  }
};
</script>
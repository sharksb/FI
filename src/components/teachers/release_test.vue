<template>
  <div class="releas_test">
    <van-button @click="releaseTest" class="testButton" round block>发布测试</van-button>
    <listgraph :filelist="filelist"></listgraph>
  </div>
</template>

<script>
import { Button } from "vant";
import listgraph from "@/components/teachers/list_graph";
export default {
  data() {
    return {
      filelist: [
        {
          time: "2020-01-17",
          fileurl: "#",
          filename: "第二次测试"
        },
        {
          time: "2020-12-17",
          fileurl: "#",
          filename: "第一次测试"
        }
      ]
    };
  },
  components: {
    [Button.name]: Button,
    listgraph
  },
  methods: {
    releaseTest() {
      console.log("发布测试");
      this.$router.push({ path: "/teachers/tclassTestDetail" });
    }
  }
};
</script>

<style scoped>
.releas_test {
  margin-top: 2rem;
}
.releas_test button {
  width: 80%;
  margin: 0 auto;
}
</style>
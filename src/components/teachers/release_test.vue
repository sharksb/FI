<template>
  <div class="releas_test">
    <van-button @click="releaseTest" class="testButton" round block>发布测试</van-button>
    <listgraph></listgraph>
  </div>
</template>

<script>
import { Button } from "vant";
import listgraph  from '@/components/teachers/list_graph'
export default {
  data() {
    return {};
  },
  components: {
    [Button.name]: Button,
    listgraph
  },
  methods: {
    releaseTest() {
      console.log("发布测试");
      this.$router.push({path:'/teachers/tclassTestDetail'})
    }
  }
};
</script>

<style scoped>
.releas_test{
    margin-top: 2rem;
}
.releas_test button{
    width: 80%;
    margin: 0 auto;
} 
</style>
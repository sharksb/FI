<template>
  <div class="testStatistics">
    <div class="currentTest">
      <div class="currentTest_title">
        <img src="@/assets/current.png" alt />
        <h3>当前测试</h3>
      </div>
      <h4 @click="enterTestStatistics">进入></h4>
    </div>
    <listgraph></listgraph>
  </div>
</template>
<script>
import listgraph from "@/components/teachers/list_graph";
export default {
  props: {
    testtype: String
  },
  data() {
    return {};
  },
  components: {
    listgraph
  },
  methods: {
    enterTestStatistics() {
      if(this.testtype == 'testStatis'){
        console.log('testStatis')
        this.$router.push({ path: "/teachers/testStasticDetail" });
      }else if(this.testtype == 'testScore'){
         console.log('testScore')
          this.$router.push({ path: "/teachers/testScore" });
      }
      
    }
  }
};
</script>

<style scoped>
.testStatistics {
  margin-top: 2rem;
}
.currentTest {
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.currentTest_title {
  display: flex;
  align-items: center;
}

.currentTest_title h3 {
  margin-left: 20px;
}

h3,
h4 {
  margin: 0;
}
</style>
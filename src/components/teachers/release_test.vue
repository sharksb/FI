<template>
  <div class="releas_test">
    <van-button @click="releaseTest" class="testButton" round block>发布测试</van-button>
    <listgraph :filelist="filelist" :listtype="listtype"></listgraph>
  </div>
</template>

<script>
import { Button } from "vant";
import listgraph from "@/components/teachers/list_graph";
export default {
  data() {
    return {
      listtype:"test",
      filelist: []
    };
  },
  components: {
    [Button.name]: Button,
    listgraph
  },
  beforeMount(){
       this.axios({
             method:'get',
             url:`${this.apiPath}test/obtainTest`,
         }).then((reponse=>{
           let filelist = []
           let dataContent =null
           console.log(reponse)
           for(dataContent of reponse.data.data) {
              filelist.push({
                filename: dataContent.testName,
                time:dataContent.startTime,
                fileurl:'/teachers/tpassedTest'
              })
           }
           console.log(filelist)
           this.filelist = filelist

         })).catch((err)=>{
           console.log(err)
         })
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
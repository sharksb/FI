<template>
  <div class="testList">
    <listgraph :filelist="testlist" :listtype="listtype"></listgraph>
  </div>
</template>

<script>
import listgraph from "@/components/teachers/list_graph";
export default {
  data() {
    return {
      listtype:"test", 
      testlist:null
    };
  },
  components: {
    listgraph
  },
  beforeMount(){
      this.axios({
             method:'get',
             url:`${this.apiPath}test/obtainTest`,
         }).then((reponse=>{
           let filelist = []
           let dataContent =null
           for(dataContent of reponse.data.data) {
              filelist.push({
                filename: dataContent.testName,
                fileurl:'/students/passedTest',
                time:dataContent.startTime
              })
           }
           this.testlist = filelist

         })).catch((err)=>{
           console.log(err)
         })
  }
};
</script>
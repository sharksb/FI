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
      testlist:[
        {
          time: "2020-01-17",
          fileurl: "/students/passedTest",
          filename: "第一次测试"
        },
        {
          time: "2020-03-17",
          fileurl: "/students/passedTest",
          filename: "第四次测试"
        }
      ]
    };
  },
  components: {
    listgraph
  }
};
</script>
<template>
  <div class="testStatistics">
    <listgraph :filelist="filelist" :listtype="listtype"></listgraph>
  </div>
</template>
<script>
import listgraph from "@/components/teachers/list_graph";
export default {
  props: {
    testtype: String
  },
  data() {
    return {
      listtype: "test",
      filelist: []
    };
  },
  beforeMount() {
    this.axios({
      method: "get",
      url: `${this.apiPath}test/obtainTest`
    })
      .then(reponse => {
        let filelist = [];
        let dataContent = null;
        console.log(reponse);
        for (dataContent of reponse.data.data) {
          filelist.push({
            filename: dataContent.testName,
            time: dataContent.startTime,
            fileurl: "/teachers/testScore"
          });
        }
        console.log(filelist);
        this.filelist = filelist;
      })
      .catch(err => {
        console.log(err);
      });
  },
  components: {
    listgraph
  },
  methods: {}
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
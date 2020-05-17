<template>
 <listgraph :filelist="filelist" :listtype="listtype"></listgraph>
</template>

<script>
import listgraph  from '@/components/teachers/list_graph'
export default {
  data() {
    return {
      listtype:"file",
      filelist: []
    }
  },
  components:{
    listgraph
  },
  beforeMount(){
      this.axios({
             method:'get',
             url:`${this.apiPath}file/showFile`,
         }).then((reponse=>{
           console.log(reponse)
           let filelist = []
           let dataContent =null
           for(dataContent of reponse.data) {
              filelist.push({
                filename: dataContent.file,
                fileurl: dataContent.fileUrl,
                time:dataContent.uploadtime
              })
           }
           console.log(filelist)
           this.filelist = filelist

         })).catch((err)=>{
           console.log(err)
         })
  }
};
</script>

<style scoped>
.file_list {
  width: 80%;
  margin: 0 auto;
  margin-top: 3rem;
}
.fl_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.fl_box h5 {
  width: 30%;
  font-size: 16px;
}
.fl_box h4 {
  width: 45%;
  text-align: right;
  font-size: 20px;
}
.fl_box h4 a {
  color: #2c3e50;
}
</style>
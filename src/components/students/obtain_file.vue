<template>
  <div class="obtainFile">
    <div class="obtainFile_box" v-for="(file, index) in files" :key="index">
      <img src="@/assets/filelist.png" alt />
      <div>
      <h5>{{file.uploadtime}}</h5>
      <span><a :href="'http://localhost:8081/upload/'+file.file" download>下载</a></span>
      </div>
      <h4>
       {{file.file}}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
          files:null
        }
    },
    beforeMount(){
         this.axios({
             method:'get',
             url:`${this.apiPath}file/showFile`,
         }).then((reponse=>{
           console.log(reponse.data)
           this.files = reponse.data
         })).catch((err)=>{
           console.log(err)
         })

    }
}
</script>

<style>
h5{
    margin: 0  0  0.5rem 0;
    font-size: 16px;
}
a{
    font-size: 14px;
    text-decoration-line: underline;
    color: #2c3e50;
}
.obtainFile{
    margin-top: 2rem;
}
.obtainFile_box{
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
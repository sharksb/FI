<template>
  <div class="hand_homework">
    <div>
      <van-panel v-for="(file, index) in files" :key="index">
        <template #header>
          <div class="hw_content">
            <div class="hwcon_title">
              <img src="@/assets/fileDetail.png" alt />
              <span>
                <a :href="'http://localhost:8081/'+file.fileUrl" download>{{file.homeFile}}</a>
              </span>
            </div>
            <span
              class="hwcon_status"
              :class="[judgementIsupload(file.isUpload) ? isUploadClor : '']"
            >{{judgementIsupload(file.isUpload)?'未提交':'已提交'}}</span>
          </div>
        </template>

        <div class="hwcon_content" >
          <p>上传时间:{{file.uploadTime}}</p>
          <van-button @click="toSubmit(file.homeFile)" v-if="judgementIsupload(file.isUpload)">提交</van-button>
        </div>
      </van-panel>
    </div>
  </div>
</template>

<script>
import { Panel, Button } from "vant";
export default {
  data() {
    return {
      files: [],
      isUploadClor:'isUploadClor'
    };
  },
  components: {
    [Panel.name]: Panel,
    [Button.name]: Button
  },
  beforeMount(){
        let idCard = sessionStorage.getItem("idCard")
        this.axios({
        url: `${this.apiPath}file/showHomework?idCard=${idCard}`,
        method: "get"
      }).then(response => {
         console.log(response)
         let data = response.data
         this.files = data
      }).catch(err=>{
        console.log(err)
      })
  },
  methods: {
    judgementIsupload(status){
        if(status =="false" || status ==null){
          return true
        }else {
          return false
        }
    },
    toSubmit(filename){
      this.$router.push({
          path: "/students/handworkDetail",
          query: {filename:filename}
       })
      }
  }
};
</script>

<style scoped>
.hand_homework {
  width: 80%;
  margin: 2rem auto 0 auto;
}
h3 {
  margin: 0;
  font-size: 12px;
}
.hw_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hwcon_title {
  display: flex;
  align-items: center;
  width: 75%;
}
.hwcon_title span {
  margin-left: 15px;
}

.hwcon_title span a{
  color: #000;
}
.hwcon_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hwcon_content button {
  border-radius: 15px;
  margin: 1rem 0;
}

.hwcon_content p{
  font-size: 14px;
}
.van-cell-group {
  margin-bottom: 2rem;
}
.isUploadClor{
  color: #ee1212;
}

.hwcon_status {
  width: 16%;
}
</style>
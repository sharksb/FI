<template>
  <div class="handworkDetail">
    <van-nav-bar title="提交" left-text="提交作业" left-arrow @click-left="onClickLeft" />
    <div class="hwd_title">
      <img src="@/assets/fileDetail.png" alt />
      <span>{{filename}}</span>
    </div>
    <van-uploader :after-read="afterRead" deletable v-model="stufileList" multiple :max-count="1" @oversize="overFile" :max-size="3145728">
      <van-button class="uploaderBut" icon="plus" type="primary"></van-button>
    </van-uploader>
    <div class="sendFilBut">
      <van-button round block type="info" @click="onSendFile">发送</van-button>
    </div>
  </div>
</template>

<script>
import { NavBar, Uploader, Button, Toast } from "vant";
export default {
  data() {
    return {
      stufileList: [],
      filename:''
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Uploader.name]: Uploader,
    [Button.name]: Button,
    [Toast.name]: Toast
  },
  beforeMount(){
   let filename = this.$route.query.filename;
   this.filename = filename
  },
  methods: {
    onClickLeft() {
     this.$router.push({ path: "/students/handHomework" });
    },

    onSendFile() {
      let stufile = null;
      for(stufile of this.stufileList){
      let file = stufile.file
      let formData = new FormData()
      formData.append('file', file)
      formData.append('filename', this.$route.query.filename)
      formData.append('idCard', sessionStorage.getItem("idCard"))
      console.log(formData)
      // this.axios({
      //        method:'post',
      //        url:`${this.apiPath}file/remove`,
      //        headers: {
      //       "Content-Type": "multipart/form-data"
      //   },
      //        data: formData
      //    }).then((reponse=>{
      //      console.log(reponse)
      //      let data = reponse.data
      //      if(data.code==1){
      //         Toast(data.data)
      //      }
      //    })).catch((err)=>{
      //      console.log(err)
      //    })
      }
      if (this.stufileList.length == 0) {
        console.log("nihao");
        Toast({
          message: "请上传文件",
          icon: "cross"
        });
      } 
        // setTimeout(() => {
        //   this.$router.go(-1);
        // }, 2000);
     
      console.log(this.stufileList);
    },
    overFile(value){
      console.log(value)
      Toast("文件大小超过了3M")
    }
  }
};
</script>

<style>
.handworkDetail {
  text-align: center;
}

.hwd_title {
  width: 65%;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  align-items: center;
}
.hwd_title span {
  margin-left: 15px;
}

.handworkDetail .van-uploader {
  width: 65%;
  margin: 0 auto;
}

.van-uploader__input-wrapper {
  width: 100%;
}

.uploaderBut {
  border-radius: 2rem;
  width: 100%;
  height: 10rem;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #666;
  margin-top: 2rem;
}

.uploaderBut .van-button__text {
  color: #666;
}

.uploaderBut .van-icon-plus {
  color: #666;
  min-width: 0em;
  font-size: 6rem;
}

.van-uploader__preview {
  margin: 0;
  width: 100%;
  height: 10rem;
  margin-top: 3rem;
}
.van-uploader__preview-image {
  width: 100%;
  height: 100%;
}
.van-uploader__file {
  width: 100%;
  height: 100%;
}
.van-uploader__file-icon {
  font-size: 5rem;
}
.van-uploader__file-name {
  font-size: 16px;
}

.sendFilBut {
  display: flex;
  justify-content: flex-end;
  width: 65%;
  margin: 0 auto;
}

.sendFilBut .van-button {
  width: 5rem;
  margin-top: 2rem;
}
</style>
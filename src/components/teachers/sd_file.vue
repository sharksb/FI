<template>
  <div class="sd_file">
   
      <van-radio-group v-model="radio" direction="horizontal">
        <van-radio name="file">发送文件</van-radio>
        <van-radio name="homeWork">发送作业</van-radio>
      </van-radio-group>
      <van-uploader :after-read="afterRead" deletable v-model="fileList" @delete="deleteFile" @oversize="overFile" :max-size="3145728">
        <van-button class="uploaderBut" icon="plus" type="primary"></van-button>
      </van-uploader>
      <div class="sendFilBut">
        <van-button round block type="info" @click="onSendFile">发送</van-button>
      </div>
   
  </div>
</template>

<script>
import { RadioGroup, Radio, Uploader, Button, Form, Toast } from "vant";
export default {
  data() {
    return {
      radio: "",
      fileList: []
    };
  },
  components: {
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Uploader.name]: Uploader,
    [Button.name]: Button,
    [Form.name]: Form
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      console.log(this.radio);
      let formData = new FormData()
      formData.append('file', file.file)
      formData.append('type',this.radio)
        this.axios({
             method:'post',
             url:`${this.apiPath}file/upload`,
             headers: {
            "Content-Type": "multipart/form-data"
        },
             data: formData
         }).then((reponse=>{
           console.log(reponse)
           let data = reponse.data
           if(data.code==1){
              Toast(data.message)
           }else if(data.code==2){
             Toast(data.message)
           }
         })).catch((err)=>{
           console.log(err)
         })
    },
    deleteFile(file){
      console.log(this.radio)
      let formData = new FormData()
      formData.append('file', file.file)
      
      console.log(formData)
      this.axios({
             method:'post',
             url:`${this.apiPath}file/remove`,
             headers: {
            "Content-Type": "multipart/form-data"
        },
             data: formData
         }).then((reponse=>{
           console.log(reponse)
           let data = reponse.data
           if(data.code==1){
              Toast(data.data)
           }
         })).catch((err)=>{
           console.log(err)
         })
    },
    onSendFile(){
      console.log(this.fileList)
      if(this.radio===""){
        Toast("请选择上传类型")
      }else if(this.fileList.length == 0){
        Toast("请上传文件")
      }else{
         setTimeout(()=>{
           this.radio = ""
           this.fileList.length = 0
         },2000)

      }
    },
    overFile(){
       Toast("文件大小超过了3M")
    }
  }
};
</script>

<style>
.sd_file {
  margin-top: 5rem;
}

.sd_file .van-uploader {
  width: 65%;
  margin: 0 auto;
}

.van-uploader__input-wrapper {
  width: 100%;
}
.van-radio-group {
  width: 65%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.uploaderBut {
  border-radius: 2rem;
  width: 100%;
  height: 10rem;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #666;
  margin-top: 3rem;
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

.sendFilBut{
  display: flex;
  justify-content: flex-end;
  width: 65%;
  margin: 0 auto;
}

.sendFilBut .van-button{
  width: 5rem;
  margin-top: 2rem;
}
/*  */

.sd_file_box {
  width: 65%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sd_file_box p {
  width: 65%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
}
.sd_file_box button {
  width: 20%;
}
</style>
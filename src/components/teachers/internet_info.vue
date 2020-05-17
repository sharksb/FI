<template>
  <div class="internetInfo">
    <div class="title">
      <img src="@/assets/submit.png" alt />
      <span>互联网金融</span>
    </div>

    <div class="content">
      <van-form @submit="onSubmit">
        <van-field
          v-model="title"
          name="title"
          label="标题"
          placeholder="请输入标题"
          :rules="[{ required: true, message: '请填写标题' }]"
        />
        <van-field
          v-model="content"
          type="textarea"
          name="content"
          label="内容"
          placeholder="请输入内容"
          :rules="[{ required: true, message: '请填写内容' }]"
        />
        <van-field
          v-model="source"
          name="source"
          label="来源"
          placeholder="请输入来源"
          :rules="[{ required: true, message: '请填写来源' }]"
        />
        <van-field
          v-model="linkUrl"
          name="linkUrl"
          label="链接"
          placeholder="请输入链接"
          :rules="[{ required: true, message: '请填写链接' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import { Field, Form, Button, Toast } from "vant";
import qs from "qs";
export default {
  data(){
    return {
      title:" ",
      content:" ",
      source:" ",
      linkUrl:" "
    };
  },
  components: {
    [Field.name]: Field,
    [Form.name]: Form,
    [Button.name]: Button,
    [Toast.name]: Toast
  },
  methods: {
    onSubmit(values) {
      console.log(values);
       let data = qs.stringify({
        title: values.title,
        content: values.content,
        source:values.source,
        linkUrl:values.linkUrl
      });
      this.axios({
        url: `${this.apiPath}user/addInformation`,
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: data
      })
        .then(reponse => {
          console.log(reponse);
          let data = reponse.data
          if(data.code == 1){
              Toast(data.message);
          }else if(data.code == 2){
              Toast(data.message);
              this.title = ''
              this.content = ''
              this.source =''
              this.linkUrl =''
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
.internetInfo {
  width :85%;
  margin :1.5rem auto 0;
}
.internetInfo .title {
  display: flex;
  align-items :center;
}
.internetInfo .title span {
  margin-left  :20px;
}

.internetInfo .content {
  margin-top :2rem;
}
</style>
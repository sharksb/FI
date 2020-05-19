<template>
  <div class="platform">
    <div
      class="platform_box"
      v-for="(userinfro, index) in userinfros"
      :key="index"
      @click="toDetail(userinfro.username,userinfro.title)"
    >
      <p>{{userinfro.title}}</p>
      <div class="pbox_bottom">
        <div class="pboxBottom_l">
          <img src="@/assets/person/avater.png" alt />
          <span>{{userinfro.username}}</span>
        </div>
        <span>{{userinfro.time}}</span>
      </div>
    </div>

    <div class="platform_message">
      <van-field
        v-model="message"
        type="textarea"
        maxlength="200"
        placeholder="写下你想说的话"
        show-word-limit
      />
      <van-button class="platform_send" @click="sendMessage">发送</van-button>
    </div>
    <toolbar></toolbar>
  </div>
</template>

<script>
import toolbar from "@/components/toolbar";
import app from "@/api/app.js";
import { Field, Button, Toast } from "vant";
export default {
  data() {
    return {
      isLogin: null,
      userinfros: [],
      message: ""
    };
  },
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [Toast.name]: Toast,
    toolbar
  },
  beforeMount() {
    this.isLogin = sessionStorage.getItem("isLogin");
     this.axios({
            url: `${this.apiPath}platform/showPlatform`,
            method: "get",
          }).then(response => {
             console.log(response)
             let data = response.data
             if(data.code == 1){
               Toast(data.message)
             }else if(data.code ==2){
               this.userinfros = data.data
             }
          }).catch(error=>{
            console.log(error)
          })
  },
  methods: {
    sendMessage() {
      if (this.isLogin) {
        if (this.message != "") {
          let platformInfo = JSON.stringify({
            username: sessionStorage.getItem("username"),
            title: this.message
          });

          this.axios({
            url: `${this.apiPath}platform/writePlatform`,
            method: "post",
            headers: {
              "Content-Type": "application/json"
            },
            data: platformInfo
          }).then(response => {
             console.log(response)
             let data = response.data
             if(data.code == 1){
               Toast(data.message)
             }else if(data.code ==2){
               Toast(data.message)
               this.message = ''
             }
          }).catch(error=>{
            console.log(error)
          })

          this.userinfros.push({
            username: sessionStorage.getItem("username"),
            time: app.transformMinutes(new Date()),
            title: this.message
          });
        
        }
      }
    },
    toDetail(username,title) {
      this.$router.push(
        { path: "/platformDetail",
          query:{
            username:username,
            title:title
          }
         }
        );
    }
  }
};
</script>

<style scoped>
.platform_box {
  width: 80%;
  margin: 0 auto;
  padding-bottom: 15px;
  border-bottom: 1px solid #666;
}

.platform_box p {
  font-size: 22px;
}

.pbox_bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pboxBottom_l {
  display: flex;
  align-items: center;
}

.pboxBottom_l img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.platform_message {
  width: 80%;
  margin: 40px auto 0;
  display: flex;
  flex-direction: column;
}

.platform_message .van-cell {
  border: 1px solid #666;
  border-radius: 15px;
}
.platform_send {
  width: 20%;
  align-self: flex-end;
  border-radius: 12px;
  margin-top: 10px;
}
</style>
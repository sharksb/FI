<template>
  <div class="informationDetail">
    <van-nav-bar :title="reciveusername" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="informationDetail_box" v-for="(message, index) in messages" :key="index">
      <div class="infor_self" v-if="message.sendidcard == idCard">
        <span>{{message.title}}</span>
        <img src="@/assets/person/avater.png" alt />
      </div>
      <div class="infor_other" v-else>
        <img src="@/assets/person/avater.png" alt />
        <span>{{message.title}}</span>
      </div>
    </div>

    <div class="inputValue">
      <van-field v-model="inputValue" placeholder="请输入..." class="inputField" />
      <van-button @click="sendMesage">发送</van-button>
    </div>
  </div>
</template>

<script>
import { NavBar, Field, Button } from "vant";
export default {
  data() {
    return {
      reciveusername: "",
      inputValue: "",
      idCard: "",
      messages: []
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Field.name]: Field,
    [Button.name]: Button
  },
  beforeMount() {
    this.reciveusername = this.$route.query.username;
    let reciveidcard = this.$route.query.idcard;
    let sendidcard = sessionStorage.getItem("idCard");
    this.idCard = parseInt(sessionStorage.getItem("idCard"));
    this.axios({
      url: `${this.apiPath}platform/showOneMessage?reciveidcard=${reciveidcard}&sendidcard=${sendidcard}`,
      method: "get"
    })
      .then(response => {
        console.log(response);
        let data = response.data;
        if (data.code == 2) {
          console.log(data);
          if (data.data.length != 0) {
            this.messages = data.data;
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/platform", query: { active: "message" } });
    },
    sendMesage() {
      let sendData = JSON.stringify({
        sendidcard: sessionStorage.getItem("idCard"),
        sendusername: sessionStorage.getItem("username"),
        reciveidcard: this.$route.query.idcard,
        reciveusername: this.$route.query.username,
        title: this.inputValue
      });
      this.axios({
        method: "post",
        url: `${this.apiPath}platform/sendMessage`,
        headers: {
          "Content-Type": "application/json"
        },
        data: sendData
      }).then(reponse => {
        console.log(reponse);
      });
      this.messages.push({
        sendidcard: sessionStorage.getItem("idCard"),
        title: this.inputValue
      });
      this.inputValue = "";
    }
  }
};
</script>

<style scoped>
.informationDetail_box {
  width: 80%;
  margin: 15px auto 0;
}

.informationDetail_box img {
  width: 30px;
  height: 30px;
}

.infor_other {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 30px auto;
}

.infor_other img {
  margin-right: 15px;
}
.infor_self {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 30px auto;
}

.infor_self img {
  margin-left: 15px;
}
.inputValue {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  padding: 15px 0;
  border-top: 1px solid #ebedf0;
}

.inputValue .inputField {
  width: 70%;
  margin: 0 auto;
  border: 1px solid #ebedf0;
  border-radius: 15px;
}

.inputValue button {
  width: 20%;
  border-radius: 15px;
}
</style>
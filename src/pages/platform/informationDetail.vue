<template>
  <div class="informationDetail">
    <van-nav-bar
      :title="informations.other.otherName"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="informationDetail_box" v-for="(message, index) in informations.messages" :key="index">
      <div class="infor_other" v-if="message.id == 0"> 
        <img src="@/assets/person/avater.png" alt />
        <span>{{message.title}}</span>
      </div>

      <div class="infor_self" v-if="message.id == 1">
        <span>{{message.title}}</span>
        <img src="@/assets/person/avater.png" alt />
      </div>
    </div>

    <div class="inputValue">
          <van-field v-model="inputValue" placeholder="请输入..." class="inputField"/>
          <van-button @click="sendMesage">发送</van-button>
    </div>
  </div>
</template>

<script>
import { NavBar, Field, Button } from "vant";
export default {
  data() {
    return {
      inputValue :"",
      informations : {
        other: {
          otherName: "小红",
          otherAvater: ""
        },
        self: {
          avater: ""
        },
        messages: [
          {
            id: 0,
            title: "在吗"
          },
          {
            id: 1,
            title: "在哒"
          },
           {
            id: 0,
            title: "可以问你一个问题吗"
          },
        ]
      }
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Field.name]: Field,
    [Button.name]: Button
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/platform", query: { active: "message" } });
    },
    sendMesage() {
        this.informations.messages.push({
            id:1,
            title:this.inputValue
        })
        this.inputValue = ""
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
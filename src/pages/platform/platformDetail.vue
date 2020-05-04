<template>
  <div class="platformDetail">
    <van-nav-bar title="论坛" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="platformDetail_title">
      <img src="@/assets/person/avater.png" alt />
      <p>{{postMan.title}}</p>
    </div>
    <div class="platformDetail_time">
      <span>发布人：{{postMan.name}}</span>
      <span>发帖时间：{{postMan.time}}</span>
    </div>

    <div class="platformDetail_box" v-for="(replyMan, index) in replyMen" :key="index">
      <div class="pfbox_title">
        <div class="pfboxTitle_avater">
          <img src="@/assets/person/avater.png" alt />
          <h3>{{replyMan.name}}</h3>
        </div>
        <p>{{replyMan.title}}</p>
      </div>
      <div class="pfbox_note">
        <span>回帖时间：{{replyMan.time}}</span>
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
  </div>
</template>

<script>
import { NavBar, Field, Button } from "vant";
export default {
  data() {
    return {
      postMan:{
        name:"白玉",
        avater:"@/assets/person/avater.png",
        title:"有哪位童鞋知道损失厌恶是什么吗",
        time:"2020-02-14"
      },
      replyMen:[
        {
          name:"大宝",
          avater:"@/assets/person/avater.png",
          title:"不知道",
          time:"2020-02-15"
        }

      ],
      message:""
    }
  },
  components: {
    [NavBar.name]: NavBar,
    [Field.name]: Field,
    [Button.name]: Button
  },
  methods:{
    onClickLeft() {
      this.$router.go(-1)
    },
    sendMessage(){
        this.replyMen.push({
          name: sessionStorage.getItem("name"),
          avater:"@/assets/person/avater.png",
          title:this.message,
          time: new Date().toDateString()
        })
        this.message = ""
    }
  }
};
</script>

<style scoped>
.platformDetail_title {
  display: flex;
  align-items: center;
  width: 90%;
  margin: 30px auto 10px;
}
.platformDetail_title img {
  width: 45px;
  height: 45px;
  margin-right: 15px;
}

.platformDetail_title p {
  font-size: 18px;
}

.platformDetail_time {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  width: 85%;
  margin: 0 auto;
}

.platformDetail_box {
  width: 80%;
  margin: 40px auto 0;
}

.pfbox_title {
  display: flex;
  align-items: center;
}

.pfboxTitle_avater {
  text-align: center;
  margin-right: 15px;
}

.pfboxTitle_avater img {
  width: 30px;
  height: 30px;
}

.pfbox_title h3 {
  margin: 0;
  font-size: 15px;
}

.pfbox_note {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 5px;
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
.platform_send{
    width: 20%;
    align-self: flex-end;
    border-radius: 12px;
    margin-top: 10px;
}
</style>
<template>
  <div class="platform">
    <div class="platform_box" v-for="(userinfro, index) in userinfros" :key="index" @click="toDetail">
      <p>{{userinfro.title}}</p>
      <div class="pbox_bottom">
        <div class="pboxBottom_l">
          <img src="@/assets/person/avater.png" alt />
          <span>{{userinfro.name}}</span>
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
import { Field, Button } from "vant";
export default {
  data() {
    return {
      userinfros:[
      {
        name:"李白",
        avater:"@/assets/person/avater.png",
        time:"2020-02-11",
        title:"有哪位童鞋知道损失厌恶是什么吗"
      },
       {
        name:"李白",
        avater:"../../assets/person/avater.png",
        time:"2020-02-11",
        title:"有哪位童鞋知道损失厌恶是什么吗"
      }
      ],
      message: ""
    };
  },
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    toolbar
  },
  methods:{
    sendMessage(){
      
      this.userinfros.push({
          name:sessionStorage.getItem("name"),
          avater:"../../assets/person/avater.png",
          time :new Date().toDateString(),
          title:this.message
      })
       
     },
     toDetail(){
         this.$router.push({ path: "/platformDetail"});
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
.platform_send{
    width: 20%;
    align-self: flex-end;
    border-radius: 12px;
    margin-top: 10px;
}
</style>
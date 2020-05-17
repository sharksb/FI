<template>
  <div class="registerForm">
      <van-nav-bar
  title="注册"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"/>
    <van-form @submit="onRegister">
      <van-field
        v-model="telephone"
        name="telphone"
        label="手机号"
        placeholder="请输入手机号"
        type="tel"
        left-icon="phone-o"
        :rules="[{ required: true, message: '请输入正确的手机号',pattern:telPattern}]"
        v:bind:error-message="phoneError"
        input:
      ></van-field>

      <van-field
        v-model="sms"
        center
        clearable
        label="短信验证码"
        name="verify"
        placeholder="请输入短信验证码"
        :rules="[{ required: true, message: '请输入验证码' }]"
      >
        <template #button>
          <van-button size="small" type="primary" native-type="button">{{smsMessage}}</van-button>
        </template>
      </van-field>

      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        left-icon="bag-o"
        :rules="[{ required: true, message: '请填写正确的密码格式密码',pattern:passwordPattern}]"
      ></van-field>
      <van-field
        v-model="resetpassword"
        type="password"
        name="password"
        label="确认密码"
        placeholder="请再次输入密码"
        left-icon="bag-o"
        :rules="[{ required: true, message: '两次输入密码不一致',validator}]"
      ></van-field>
       <van-field
        v-model="studentId"
        type="number"
        name="studentId"
        label="学号"
        placeholder="请输入学号"
        left-icon="friends-o"
        :rules="[{ required: true, message: '请输入学号',pattern:studentPattern}]"
      ></van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" size="small" native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Button, Field, Form, NavBar, Toast} from "vant";
import md5 from "js-md5"
import qs from "qs";
export default {
  data() {
    return {
      smsMessage: "发送验证码",
      password: "",
      telephone:"",
      sms: "",
      resetpassword:"",
      studentId:"",
      telPattern:/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/,
      passwordPattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\W]{6,18}$/,
      studentPattern:/^[0-9]{8}$/
    };
  },
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Form.name]: Form,
    [NavBar.name]: NavBar,
    [Toast.name]: Toast
  },
  methods: {
    onRegister(values) {
      console.log("submit", values);
       let data = qs.stringify({
        "telephone": values.telphone,
        "password": md5(values.password),
        "idCard":values.studentId
      });
      if(values){
         this.axios({
             method:'post',
             url:`${this.apiPath}user/register`,
             headers: {
               "Content-Type": "application/x-www-form-urlencoded"
               },
             data: data
         }).then((reponse=>{
          
           if(reponse.data.code == 1){
              Toast(reponse.data.message)
           }else if(reponse.data.code == 2){
             Toast(reponse.data.message)
           }else if(reponse.data.code == 3) {
            console.log(reponse.data)
            Toast(reponse.data.message)
            let infor = reponse.data.data 
            sessionStorage.setItem("isLogin",true)
            sessionStorage.setItem("username", infor.username);
            sessionStorage.setItem("idCard", infor.idCard);
            sessionStorage.setItem("class", infor.class);
            sessionStorage.setItem("telephone", infor.telephone);
            sessionStorage.setItem("type", infor.type);
            setTimeout(()=>{
              this.$router.push({ path: "/" });
            },2000)
           }
          
         })).catch((err)=>{
           console.log(err)
         })
      }
    },
    validator(value){
        return this.resetpassword === this.password
    },
    onClickLeft() {
       this.$router.push({ path: "/personCneter" });
    },
    sendsms() {
      this.smsMessage = "验证码已发送";
    }

  }
};
</script> 

<style  scoped>
.van-button--block {
  width: 60%;
  margin: 0 auto;
}

.van-form{
    margin-top: 6rem;
}
</style>


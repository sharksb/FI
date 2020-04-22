<template>
  <div class="registerForm">
      <van-nav-bar
  title="注册"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"/>
    <van-form @submit="onRegister">
      <van-field
        v-model="username"
        name="telphone"
        label="手机号"
        placeholder="请输入手机号"
        type="tel"
        left-icon="phone-o"
        :rules="[{ required: true, message: '请输入正确的手机号',pattern:/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/}]"
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
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>

      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        left-icon="bag-o"
        :rules="[{ required: true, message: '请填写正确的密码格式密码',pattern}]"
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
        :rules="[{ required: true, message: '请输入学号',pattern:pattern1}]"
      ></van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" size="small" native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Button, Field, Form, NavBar } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
      sms: "",
      resetpassword:"",
      studentId:"",
      pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\W]{6,18}$/,
      pattern1:/^[0-9]{8}$/
    };
  },
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Form.name]: Form,
    [NavBar.name]: NavBar
  },
  methods: {
    onRegister(values) {
      console.log("submit", values);
    },
    validator(value){
        return this.resetpassword === this.password
    },
    onClickLeft() {
      console.log("返回")
    },

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


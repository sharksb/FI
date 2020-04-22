<template>
  <div>
      <van-nav-bar title="登录" left-text="返回" left-arrow  @click-left="onClickLeft"/>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="请输入手机号或者邮箱"
        type="tel"
        :rules="[{ required: true, message: '请输入手机号或者邮箱' }]"
      ></van-field>
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      ></van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" size="small" native-type="submit">提交</van-button>
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
      password: ""
    };
  },
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Form.name]: Form,
    [NavBar.name]: NavBar
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
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


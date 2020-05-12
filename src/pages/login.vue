<template>
  <div>
    <van-nav-bar title="登录" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="telephone"
        name="telephone"
        label="用户名"
        placeholder="请输入手机号或者邮箱"
        type="tel"
        :rules="[{ required: true, message: '请输入手机号或者邮箱' }]"
      ></van-field>
      <van-field
        v-model="password"
        type="password"
        name="password"
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
import { Button, Field, Form, NavBar, Toast } from "vant";
import md5 from "js-md5"
import qs from "qs";
export default {
  data() {
    return {
      telephone: "",
      password: ""
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
    onSubmit(values) {
      console.log(values);
      let data = qs.stringify({
        telephone: values.telephone,
        password: md5(values.password)
      });
      this.axios({
        url: "http://127.0.0.1:8082/login",
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: data
      })
        .then(reponse => {
          console.log(reponse);
          if (reponse.data.code == 1) {
            Toast(reponse.data.data);
          } else if (reponse.data.code == 2) {
            Toast("登录成功");
            let infor = reponse.data.data;
            sessionStorage.setItem("isLogin",true)
            sessionStorage.setItem("username", infor.username);
            sessionStorage.setItem("idCard", infor.idCard);
            sessionStorage.setItem("class", infor.class);
            sessionStorage.setItem("telephone", infor.telephone);
            sessionStorage.setItem("type", infor.type);
            setTimeout(() => {
              this.$router.push({ path: "/" });
            }, 2000);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    onClickLeft() {
      this.$router.push({ path: "/personCneter" });
    }
  }
};
</script> 

<style  scoped>
.van-button--block {
  width: 60%;
  margin: 0 auto;
}
.van-form {
  margin-top: 6rem;
}
</style>


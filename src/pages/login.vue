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
      this.axios
        .get("http://127.0.0.1:8081/user/login")
        .then(response => {
          // this.content = response.data.bpi;
          console.log(response.data);
          let data = response.data;
          let userInfo = data.filter(item => {
            return item.telephone == this.telephone;
          });
          console.log(userInfo);
          if (userInfo.length == 0) {
            Toast("用户不存在");
          } else {
            console.log(userInfo);
            console.log(this.password);
            if (userInfo[0].password != this.password) {
              Toast("密码错误");
            } else {
              Toast("登录成功");
              if (userInfo[0].id == 0) {
                sessionStorage.setItem("personInfor", "teacher");
              } else {
                sessionStorage.setItem("personInfor", "student");
              }
              sessionStorage.setItem("isLogin", true);
              sessionStorage.setItem("telephone", userInfo[0].telephone);
              sessionStorage.setItem("userName", userInfo[0].userName);
              setTimeout(() => {
                this.$router.push({ path: "/" });
              }, 3000);
            }
          }
        })
        .catch(function(error) {
          console.log(error);
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


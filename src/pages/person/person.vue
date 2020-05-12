<template>
  <div class="person">
    <div class="person_box">
      <div class="perbox_header">
        <i class="iconfont icon-xiaoxitongzhi" @touchstart="exit">退出</i>
        <i class="iconfont icon-more-a" @touchstart="restPassword">重置密码</i>
      </div>
      <div class="perbox_circlebox">
        <div class="perbox_circle">
          <img src="@/assets/person/avater.png" alt />
        </div>
      </div>
    </div>
    <!-- v-if="personInfor == 'student'" -->
    <div v-if="isLogin">
      <div class="person_content">
        <div v-if="type == '学生'">
          <p>姓名：{{stuperson.name}}</p>
          <van-divider />
          <p>学校：天津商业大学</p>
          <van-divider />
          <p>院系：信息工程学院</p>
          <van-divider />
          <p>学号：{{stuperson.stuId}}</p>
          <van-divider />
          <p>班级：{{stuperson.class}}</p>
          <van-divider />
        </div>

        <div v-else>
          <p>姓名：{{teaperson.name}}</p>
          <van-divider />
          <p>学校：天津商业大学</p>
          <van-divider />
          <p>院系：信息工程学院</p>
          <van-divider />
          <p>学工号：{{teaperson.teaId}}</p>
          <van-divider />
        </div>
      </div>
    </div>

    <div v-else class="noLogin">
      <van-button block to="./login">登录</van-button>
      <van-button block type="info" to="./register">注册</van-button>
    </div>

    <toolbar></toolbar>
  </div>
</template>

<script>
import toolbar from "@/components/toolbar";
import logo from "@/components/logo";
import { Divider, Button, Dialog } from "vant";
export default {
  data() {
    return {
      type: null,
      isLogin: false,
      stuperson: {
        name: "",
        stuId: "",
        class: ""
      },
      teaperson: {
        name: "",
        teaId: ""
      }
    };
  },
  components: {
    toolbar,
    logo,
    [Divider.name]: Divider,
    [Button.name]: Button
  },
  beforeMount() {
    this.type = sessionStorage.getItem("type");
    this.isLogin = sessionStorage.getItem("isLogin");
    if (this.type == "学生") {
      this.stuperson.name = sessionStorage.getItem("username")
      this.stuperson.stuId = sessionStorage.getItem("idCard")
      this.stuperson.class = sessionStorage.getItem("class")
    } else {
      this.teaperson.name = sessionStorage.getItem("username")
      this.teaperson.teaId = sessionStorage.getItem("idCard")
    }
    
  },
  methods: {
    exit() {
      Dialog.confirm({
        title: "退出",
        message: "确认退出"
      })
        .then(() => {
          sessionStorage.clear();
          this.isLogin = false;
        })
        .catch(() => {
          // on cancel
        });
    },
    restPassword() {
      this.$router.push({ path: "/resetPassword" });
    }
  }
};
</script>

<style scoped>
.person_box {
  border: 1px solid #666;
  position: relative;
  top: 0;
  left: 0;
}
.perbox_header {
  width: 90%;
  margin: 10px auto 0;
  display: flex;
  justify-content: space-between;
  height: 8rem;
}

.perbox_circlebox {
  position: absolute;
  width: 100%;
  top: 4rem;
}
.perbox_circle {
  margin: 0 auto;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border-top: 1px solid #666;
  background-color: white;
  padding: 20px;
}

.person_content {
  margin: 10rem auto 0;
}

.person_content p {
  width: 40%;
  margin: 16px auto;
  line-height: 30px;
}

.van-divider {
  width: 80%;
  margin: 0 auto;
}

.noLogin {
  margin-top: 10rem;
}

.noLogin button {
  border-radius: 15px;
  width: 80%;
  margin: 0 auto 30px;
}
</style>
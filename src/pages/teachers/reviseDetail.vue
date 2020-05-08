<template>
  <div class="reviseDetail">
    <van-nav-bar title="作业列表-批改作业" left-text="批改" left-arrow @click-left="onClickLeft" />

    <div class="reviseStudent">
      <img src="@/assets/testScore.png" alt />
      <span>{{studentName}}</span>
    </div>

    <van-form @submit="onSubmit">
      <div v-for="(question,index) in questions" :key="index">
        <van-panel :title="question.title" :desc="question.titleType">
          <div class="revisedel_content">{{question.answer}}</div>
          <template #footer>
            <van-field
              v-model="question.score"
              :name="question.name"
              label="分数"
              :rules="[{ required: true, message: '请填写分数' }]"
            />
          </template>
        </van-panel>
      </div>
      <van-button round block type="info" class="submitBut" native-type="submit">提交</van-button>
    </van-form>
  </div>
</template>

<script>
import { NavBar, Panel, Button, Field, Form, Toast } from "vant";
export default {
  data() {
    return {
      studentName: "李煜",
      questions: [
        {
          titleType: "简答题",
          title: "取消电子银行登录限制包括哪些内容？",
          answer: `包括取消个人网上银行别名登录、冻结登
            录等限制，将登录方式恢复为 “注册卡号
            ＋登录密码”登录的状态；取消手机银行
            （WAP）登录限制，恢复客户手机银行（
            WAP）服务。`,
          name: "qs1",
          score: ""
        },
        {
          titleType: "简答题",
          title: "取消电子银行登录限制包括哪些内容？",
          answer: `包括取消个人网上银行别名登录、冻结登
            录等限制，将登录方式恢复为 “注册卡号
            ＋登录密码”登录的状态；取消手机银行
            （WAP）登录限制，恢复客户手机银行（
            WAP）服务。`,
          name: "qs2",
          score: ""
        }
      ]
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Panel.name]: Panel,
    [Button.name]: Button,
    [Field.name]: Field,
    [Form.name]: Form
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/teachers/reviseWork" });
      console.log("返回");
    },
    onSubmit(values) {
      console.log("submit", values);
      Toast("提交成功");
      setTimeout(()=>{
         this.$router.push({ path: "/teachers/reviseWork" });
      },2000)
    }
  }
};
</script>
<style>
.reviseStudent {
  width: 80%;
  margin: 2rem auto 1rem auto;
  display: flex;
}
.reviseStudent span {
  margin-left: 10px;
}
.reviseDetail .van-cell-group {
  width: 90%;
  margin: 0 auto;
}
.reviseDetail .van-field__label {
  width: 45px;
}
.reviseDetail .van-cell__title span {
  font-size: 16px;
}
.revisedel_content {
  padding: 0 15px 10px 15px;
}
.reviseDetail .van-panel__footer {
  display: flex;
  justify-content: flex-end;
}
.reviseDetail .van-panel__footer .van-field {
  width: 50%;
}
.reviseDetail .van-panel__footer .van-field .van-field__body {
  border: 1px solid;
  padding-left: 15px;
  border-radius: 10px;
}
.submitBut {
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
}
</style>
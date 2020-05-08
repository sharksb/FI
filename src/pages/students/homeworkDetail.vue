<template>
  <div class="handworkDetail">
    <van-nav-bar title="提交作业" left-text="提交" left-arrow @click-left="onClickLeft" />
    <div class="hwd_title">
      <img src="@/assets/fileDetail.png" alt />
      <span>{{stuHomework.title}}</span>
    </div>

    <div v-for="(stuContent ,index) in stuHomework.contents" :key="index">
      <van-panel :title="stuContent.conTitle" :desc="stuContent.conType">
        <div class="hwd_content">
            {{stuContent.conContent}}
        </div>
        <template #footer>分数：{{stuContent.conScore}}</template>
      </van-panel>
    </div>
  </div>
</template>

<script>
import { NavBar, Panel } from "vant";
export default {
  data() {
    return {
      stuHomework: {
        title: "互联网金融第三次作业",
        contents: [
          {
            conTitle: "取消电子银行登录限制包括哪些内容？",
            conType: "简答题",
            conContent: `包括取消个人网上银行别名登录、冻结登录等限制，将登录方式恢复为 “注册卡号＋登录密码”登录的状态；取消手机银行
                                （WAP）登录限制，恢复客户手机银行（WAP）服务。`,
            conScore: 10
          }
        ]
      }
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Panel.name]: Panel
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/students/handHomework" });
    }
  }
};
</script>

<style>
.hwd_title {
  width: 81%;
  margin: 2rem auto 1rem auto;
  padding: 0 15px;
  display: flex;
  align-items: center;
}

.hwd_title img {
  width: 28px;
}

.hwd_title span {
  margin-left: 15px;
}

.van-cell-group {
  width: 90%;
  margin: 0 auto;
  text-align: left;
}
.van-cell__title span {
  font-size: 16px;
}
.hwd_content {
  padding: 0 15px 10px 15px;
}

.van-panel__footer {
  display: flex;
  justify-content: flex-end;
}
</style>
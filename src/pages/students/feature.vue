<template>
  <div class="feature">
    <logo></logo>
    <div class="feature_title">
      <div
        class="featureTitle_box"
        v-for="(feature, index) in features"
        :key="index"
        @click="enterpage(feature.id)"
      >
        <i class="iconfont" :class="feature.className"></i>
        <h4>{{feature.name}}</h4>
      </div>
    </div>
    <div class="feature_content" v-if="isLogin">
      <div class="featurecon_title">
        <img src="@/assets/submit.png" alt />
        <span>最新消息</span>
      </div>

      <div class="featurecon_box" v-for="(infor, index) in newInformation" :key="index">
        <span>{{infor.title}}</span>
        <p>{{infor.content}}</p>
      </div>

    </div>
    <toolbar></toolbar>
  </div>
</template>

<script>
import toolbar from "@/components/toolbar";
import logo from "@/components/logo";
export default {
  data() {
    return {
      isLogin: null,
      features: [
        {
          id: "obtainFile",
          name: "下载文件",
          className: "icon-fabu-wenjian"
        },
        {
          id: "enterTest",
          name: "测试",
          className: "icon-fabuxiaoxi"
        },
        {
          id: "handHomework",
          name: "上交作业",
          className: "icon-zuoye"
        },
        {
          id: "passedTest",
          name: "测试列表",
          className: "icon-fabuxiaoxi"
        }
      ],
      newInformation: [
        {
          title: "提交文件",
          content: "《第三次作业》提交时间为2020-01.20，请加紧提交"
        },
        {
          title: "接收消息",
          content: "小明：在吗"
        }
      ]
    };
  },
  components: {
    toolbar,
    logo
  },
  beforeMount() {
    this.isLogin = sessionStorage.getItem("isLogin");
  },
  methods: {
    enterpage(featureName) {
      if (this.isLogin) {
        switch (featureName) {
          case "obtainFile":
            this.$router.push({ path: "/students/obtainFile" });
            break;
          case "enterTest":
            this.$router.push({ path: "/students/classTest" });
            break;
          case "handHomework":
            this.$router.push({ path: "/students/handHomework" });
            break;
          case "passedTest":
            this.$router.push({
              path: "/students/classTest",
              query: { active: "passedTest" }
            });
            break;
        }
      } else {
        this.$router.push({ path: "/personCneter" });
      }
    }
  }
};
</script>

<style scoped>
.feature_title {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.featureTitle_box {
  width: 30%;
  text-align: center;
  margin-bottom: 20px;
}
.featureTitle_box h4 {
  margin: 0;
}
.featureTitle_box i {
  font-size: 40px;
}

.featurecon_title {
  display: flex;
  align-items: center;
}
.feature_content {
  width: 80%;
  margin: 30px auto 0;
}

.featurecon_title span {
  margin-left: 15px;
}

.featurecon_box {
  border: 1px solid #666;
  padding: 15px;
  margin-top: 20px;
}
.featurecon_box p {
  margin-top: 10px;
  margin-bottom: 0;
}
</style>
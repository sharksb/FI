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

        <div class="feature_content">
      <div class="featurecon_title">
        <img src="@/assets/submit.png" alt />
        <span>最新消息</span>
      </div>

      <div class="featurecon_box">
        <span>接受文件</span>
        <p>
          接受文件截止日期为2020.05.17
          是否进行提醒
        </p>
      </div>

      <div class="featurecon_box">
        <span>接受消息</span>
        <p>
          小明：老师，我在今天的课堂还有
          点问题，可以问你一下吗
        </p>
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
      features: [
        {
          id: "sendFile",
          name: "发送文件",
          className: "icon-fabu-wenjian"
        },
        {
          id: "releaseTest",
          name: "发布测试",
          className: "icon-fabuxiaoxi"
        },
        {
          id: "fileList",
          name: "文件列表",
          className: "icon-fabu-wenjian"
        },
        {
          id: "homeworkList",
          name: "作业列表",
          className: "icon-zuoye"
        },
        {
          id: "testStatic",
          name: "测试统计",
          className: "icon-count-copy"
        },
        {
          id: "testScore",
          name: "测试成绩",
          className: "icon-chengji"
        }
      ]
    };
  },
  components: {
    toolbar,
    logo
  },

  methods: {
    enterpage(featureName) {
      switch (featureName) {
        case "sendFile":
          this.$router.push({ path: "/teachers/sendFile" });
          break;
        case "releaseTest":
          this.$router.push({ path: "/teachers/releaseTest" });
          break;
        case "fileList":
          this.$router.push({
            path: "/teachers/sendFile",
            query: { active: "fileList" }
          });
          break;
        case "homeworkList":
          this.$router.push({
            path: "/teachers/sendFile",
            query: { active: "homeworkList" }
          });
          break;
        case "testStatic":
          this.$router.push({
            path: "/teachers/releaseTest",
            query: { active: "testStatis" }
          });
          break;
        case "testScore":
          this.$router.push({
            path: "/teachers/releaseTest",
            query: { active: "testScore" }
          });
          break;
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
</style>
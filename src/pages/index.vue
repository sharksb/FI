<template>
  <div>
    <logo></logo>
    <div class="index">
      <!-- first -->
      <div class="first" v-if="isLogin">
        <div class="title">
          <img src="@/assets/submit.png" alt />
          <span>最新消息</span>
        </div>
        <div class="firstContent">
          <div class="firstCon_box">
            <i class="iconfont icon-fabuxiaoxi"></i>
            <span>最新测试将在五分钟后结束</span>
          </div>

          <div class="firstCon_box">
            <i class="iconfont icon-zuoye"></i>
            <span>《第三章作业》最新提交</span>
          </div>
        </div>
      </div>

      <!-- second -->
      <div class="second">
        <div class="title">
          <img src="@/assets/submit.png" alt />
          <span>互联网金融</span>
        </div>
        <div class="second_content">
          <a :href="linkUrl" target="_blank">
            <div class="secondCon_title">
              <i class="iconfont icon-zixunf"></i>
              <span>{{title}}</span>
            </div>
            <div class="secondCon_content">
              <p>{{content}}</p>
              <span>来源：{{source}}</span>
            </div>
          </a>
        </div>
      </div>

      <!-- third -->
      <div class="third">
        <div class="title">
          <img src="@/assets/submit.png" alt />
          <span>相关课程推荐</span>
        </div>

        <div class="third_content">
          <div class="thirdCon_box">
            <img src="@/assets/index/information.png" alt />
            <p>信息管理</p>
          </div>
          <div class="thirdCon_box">
            <img src="@/assets/index/finance.png" alt />
            <p>行为经济学</p>
          </div>
          <div class="thirdCon_box">
            <img src="@/assets/index/internet.png" alt />
            <p>JAVA程序语言设计</p>
          </div>
        </div>
      </div>

      <!-- fourth -->
      <div class="fourth">
        <div class="title">
          <img src="@/assets/submit.png" alt />
          <span>学习网站推荐</span>
        </div>

        <div class="fourth_content">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide>
              <img src="@/assets/index/financeinter.png" alt />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/index/hujiang.png" alt />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/index/muke.png" alt />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/index/qigua.png" alt />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/index/wangyi.png" alt />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/index/zhiwang.png" alt />
            </swiper-slide>
          </swiper>
        </div>
      </div>

      <toolbar></toolbar>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import toolbar from "@/components/toolbar";
import logo from "@/components/logo";
import "swiper/css/swiper.css";
import { Icon } from "vant";
export default {
  name: "carrousel",
  data() {
    return {
      isLogin: null,
      swiperOptions: {
        // Some Swiper option/callback...
        slidesPerView: 4,
        slidesPerGroup: 1,
        loop: true,
        autoplay: true,
        delay: 2000
      },
      title: "",
      content: "",
      source: "",
      linkUrl: ""
    };
  },
  components: {
    [Icon.name]: Icon,
    Swiper,
    SwiperSlide,
    toolbar,
    logo
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  beforeMount() {
    this.isLogin = sessionStorage.getItem("isLogin");
    this.axios({
      url: `${this.apiPath}user/obtainInformation`,
      method: "get"
    })
      .then(reponse => {
        console.log(reponse);
        let news = reponse.data.data;
        this.title = news.title;
        this.content = news.content;
        this.source = news.source;
        this.linkUrl = news.linkUrl;
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {
    // this.swiper.slideTo(1, 1000, true);
  }
};
</script>

<style scoped>
a {
  color: black;
}
.index {
  width: 85%;
  margin: 0 auto;
}

.title {
  display: flex;
  align-items: center;
}

.title span {
  margin-left: 25px;
}

.firstCon_box {
  border-bottom: 1px solid #666;
  padding-left: 20px;
  padding-bottom: 5px;
  margin: 10px auto 20px;
}

.secondCon_title .icon-zixunf {
  font-size: 35px;
}

.secondCon_title span {
  margin-left: 10px;
  font-size: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.second_content {
  border: 1px solid #666;
  padding: 10px;
  border-radius: 20px;
  margin: 15px auto;
}

.secondCon_content p {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.secondCon_content span {
  font-size: 12px;
}

.third_content {
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
}

.thirdCon_box {
  width: 30%;
  border: 1px solid #666;
  border-radius: 20px;
  text-align: center;
  padding: 10px 0;
}
.thirdCon_box img {
  width: 50%;
}
.thirdCon_box p {
  margin: 10px auto 0;
}

.fourth_content {
  border: 1px solid #666;
  border-radius: 20px;
  padding: 10px 0;
  margin: 20px 0;
}

.swiper-slide {
  text-align: center;
}

.swiper-slide img {
  width: 50px;
  height: 50px;
}
</style>
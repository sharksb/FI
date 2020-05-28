<template>
  <div class="platform">
    <van-tabs v-model="active" color="#1989fa">
      <van-tab title="论坛" name="platform">
        <platform></platform>
      </van-tab>
      <van-tab title="消息" name="message">
        <information v-if="isLogin"></information>
      </van-tab>
    </van-tabs>

    <toolbar></toolbar>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";
import platform from "@/components/platform/platform";
import information from "@/components/platform/information";
import toolbar from "@/components/toolbar";
export default {
  data() {
    return {
      active: "",
      isLogin:false
    };
  },

  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    platform,
    information,
    toolbar
  },
  beforeMount() {
    this.active = this.$route.query.active;
    this.isLogin = sessionStorage.getItem("isLogin")
  },
  methods: {}
};
</script>
<template>
  <div>
    <van-nav-bar title="管理" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active" color="#1989fa">
      <van-tab title="内容管理" name="content">
       <internetinfo></internetinfo>
      </van-tab>
      <van-tab title="学生管理" name="student">
      <addstudent></addstudent>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { NavBar, Tab, Tabs } from "vant"
import internetinfo from "@/components/teachers/internet_info";
import addstudent from "@/components/teachers/add_student";
export default {
  data() {
    return {
      active: ""
    };
  },
  beforeMount() {
    this.active = this.$route.query.active;
  },
  components: {
    [NavBar.name]: NavBar,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    internetinfo,
    addstudent
  },
  methods: {
    onClickLeft() {
       this.$router.push({ path: "/tfeature" });
    }
  }
};
</script>
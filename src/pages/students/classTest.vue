<template>
  <div class="classTest">
    <van-nav-bar title="课堂测试" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model="active" color="#1989fa">
      <van-tab title="课堂测试" name="currentTest">
          <classTest></classTest>
      </van-tab>
      <van-tab title="测试列表" name="passedTest">
         <testList></testList>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { NavBar, Tab, Tabs } from "vant";
import classTest from "@/components/students/class_test";
import testList from "@/components/students/test_list";
export default {
  data() {
    return {
      active: ""
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    classTest,
    testList
  },
  beforeMount(){
    this.active = this.$route.query.active
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>

</style>
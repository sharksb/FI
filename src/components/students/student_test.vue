<template>
  <div class="studentTest">
    <div v-for="(ques, index) in questions" :key="index">
      <testRadio v-if="ques.type == 'radio'" :question="ques" :index="index"></testRadio>
      <testCheckbox v-if="ques.type == 'checkbox'" :question="ques" :index="index"></testCheckbox>
      <testJudgement v-if="ques.type == 'judgement'" :question="ques" :index="index"></testJudgement>
    </div>
  </div>
</template>

<script>
import { Panel, Button, Form, Toast } from "vant";
import testRadio from "@/components/students/selectedItem/radio";
import testCheckbox from "@/components/students/selectedItem/checkbox";
import testJudgement from "@/components/students/selectedItem/judgement";
export default {
  props:{
    questions:Array
  },
  // data() {
  //   return {
  //     questions: [
  //       {
  //         type: "radio",
  //         title: "狭义的网路金融不包括",
  //         option: ["网上银行", "网上证券", "网上支付", "金融信息服务业"],
  //         opt: ["A", "B", "C", "D"]
  //       },
  //       {
  //         type: "checkbox",
  //         title:
  //           "一般说来，在大额支付的简单加密信用卡网上支付系统中，实际当事人有",
  //         option: ["网上银行", "网上证券", "网上支付", "金融信息服务业","金融信息服务业","金融信息服务业"],
  //         opt: ["A", "B", "C", "D", "E", "F"]
  //       },
  //       {
  //         type: "judgement",
  //         title:
  //           "常见的网络银行自助处理系统有ATM系统、POS系统、电话银行系统和自助银行系统等。"
  //       }
  //     ]
  //   };
  // },
  components: {
    [Panel.name]: Panel,
    [Toast.name]: Toast,
    testRadio,
    testCheckbox,
    testJudgement
  },
  methods: {}
};
</script>

<style>
.van-cell__title span {
  font-size: 18px;
}

.studenttest_content {
  margin-top: 1rem;
}

.studentTest .van-button {
  width: 60%;
  margin: 2rem auto;
  border-radius: 20px;
}
</style>
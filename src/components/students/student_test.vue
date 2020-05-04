<template>
  <div class="studentTest">
      <testRadio></testRadio>
      <testCheckbox></testCheckbox>
      <testJudgement></testJudgement>
  </div>
</template>

<script>
import {
  Panel,
  Button,
  Form,
  Toast 
} from "vant";
import testRadio from "@/components/students/selectedItem/radio";
import testCheckbox from "@/components/students/selectedItem/checkbox";
import testJudgement from "@/components/students/selectedItem/judgement";
export default {
  data() {
    return {
      radio: ""
    };
  },
  components: {
    [Panel.name]: Panel,
    [Toast.name]: Toast,
    testRadio,
    testCheckbox,
    testJudgement
  },
  methods:{
     
  }

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
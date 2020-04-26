<template>
  <div class="tclassTestDetail">
    <van-nav-bar title="课堂测试" left-text="发布测试" left-arrow @click-left="onClickLeft" />
    <ttestRadio></ttestRadio>
    <ttestCheckbox></ttestCheckbox>
    <ttestJudgement></ttestJudgement>
    <!-- 选择 -->
    <div class="testDetail">
      <div class="testDetailSelect">
        <van-form @submit="onAddOption" class="tdSelect_form">
          <van-radio-group v-model="radioSelect">
            <van-radio name="judgement">判断</van-radio>
            <van-radio name="radio">单选题</van-radio>
            <van-radio name="checkbox">多选题</van-radio>
          </van-radio-group>
          <van-button round block type="info" class="tdSelect_button" native-type="submit">添加</van-button>
        </van-form>
        <van-form @submit="onReleaseTest" class="tdSelect_form">
          <van-radio-group v-model="timeSelect" @change="changeRadio">
            <van-radio name="30">30</van-radio>
            <van-radio name="15">15</van-radio>
            <van-radio name="selfDefine">自定义</van-radio>
          </van-radio-group>
          <div v-if="defineTime">
            <van-field v-model="timeSelect_time" name="time" placeholder="请输入时间" class="timeSelect_time" />
          </div>
            <van-field v-model="timeSelect_name" label="测试名称" name="name"  placeholder="请输入测试名称" class="timeSelect_name" />
          <van-button round   native-type="submit" class="releaseTest_but">发布测试</van-button>
        </van-form>
      </div>
    </div>
  </div>
</template>
<script>
import { NavBar, RadioGroup, Radio, Form, Button, Field } from "vant";
import ttestRadio from "@/components/teachers/selectedItem/radio";
import ttestCheckbox from "@/components/teachers/selectedItem/checkbox";
import ttestJudgement from "@/components/teachers/selectedItem/judgement";
export default {
  data() {
    return {
      radioSelect: "",
      timeSelect: "",
      timeSelect_time: "",
      defineTime:false,
      timeSelect_name:""
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Form.name]: Form,
    [Button.name]: Button,
    [Field.name]: Field,
    ttestRadio,
    ttestCheckbox,
    ttestJudgement
  },
  methods: {
    onClickLeft() {
      console.log("返回");
    },
    onAddOption(values) {
      console.log(values);
    },
    onReleaseTest(values) {
      console.log(values);
    },
    changeRadio(value) {
      if (this.timeSelect == "selfDefine") {
        this.defineTime = true
      }else{
        this.defineTime = false
      }
    }
  }
};
</script>

<style>
.testDetailSelect {
  width: 85%;
  margin: 0 auto;
}
.testDetailSelect .van-radio-group {
  display: flex;
  justify-content: space-between;
}

.tdSelect_form {
  display: flex;
  flex-flow: column;
  margin-top: 1.5rem;
}

.tdSelect_button {
  width: 20%;
  height: 30px;
  line-height: 30px;
  align-self: flex-end;
  margin-top: 0.8rem;
}
.timeSelect_time {
  margin-top: 0.5rem;
}
.timeSelect_name{
  margin-top: 0.8rem;
}
.timeSelect_name .van-cell__title{
  width: 70px;

}

.releaseTest_but{
  width: 85%;
  margin:1rem auto;
}
</style>
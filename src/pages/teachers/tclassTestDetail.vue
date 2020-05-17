<template>
  <div class="tclassTestDetail">
    <van-nav-bar title="课堂测试" left-text="发布测试" left-arrow @click-left="onClickLeft" />
    <!-- 选择 -->
    <van-form @submit="onReleaseTest" class="tdSelect_form">
      <div class="testDetail">
        <div class="testDetailSelect">
          <van-form @submit="onAddOption" class="tdSelect_form">
            <div v-for="(count, index) in counts" :key="index">
              <ttestRadio v-if="count == 'radio'"></ttestRadio>
              <ttestCheckbox v-if="count == 'checkbox'"></ttestCheckbox>
              <ttestJudgement v-if="count == 'judgement'"></ttestJudgement>
            </div>

            <van-radio-group v-model="radioSelect">
              <van-radio name="judgement">判断</van-radio>
              <van-radio name="radio">单选题</van-radio>
              <van-radio name="checkbox">多选题</van-radio>
            </van-radio-group>

            <van-button round block type="info" class="tdSelect_button" native-type="submit">添加</van-button>
          </van-form>
        </div>
      </div>
      <div class="radioSelect">
        <van-radio-group v-model="timeSelect" @change="changeRadio">
          <van-radio name="30">30</van-radio>
          <van-radio name="15">15</van-radio>
          <van-radio name="selfDefine">自定义</van-radio>
        </van-radio-group>
      </div>
      <div v-if="defineTime">
        <van-field
          v-model="timeSelect_time"
          name="time"
          placeholder="请输入时间"
          class="timeSelect_time"
        />
      </div>
      <van-field
        v-model="timeSelect_name"
        label="测试名称"
        name="name"
        placeholder="请输入测试名称"
        class="timeSelect_name"
      />
      <van-button round native-type="submit" class="releaseTest_but">发布测试</van-button>
    </van-form>
  </div>
</template>
<script>
import { NavBar, RadioGroup, Radio, Form, Button, Field, Toast } from "vant";
import qs from "qs";
import ttestRadio from "@/components/teachers/selectedItem/radio";
import ttestCheckbox from "@/components/teachers/selectedItem/checkbox";
import ttestJudgement from "@/components/teachers/selectedItem/judgement";
export default {
  data() {
    return {
      radioSelect: "",
      timeSelect: "",
      timeSelect_time: "",
      defineTime: false,
      timeSelect_name: "",
      counts: [],
      questions: []
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
      this.$router.push({ path: "/teachers/releaseTest" });
    },
    onAddOption(values) {
      console.log(values);
      if (values.title == undefined) {
        console.log("...");
        this.counts.push(this.radioSelect);
        this.indexCount = this.counts.length;
        // console.log(this.radioSelect);
        // console.log(this.counts);
        this.radioSelect = "";
      } else if (values.title == "") {
        Toast("请输入题目");
      } else {
        let title = values.title;
        let note = values.note;
        let score = values.score;
        let correctOption = [values.answer];
        let indexCount = this.counts.length;
        let type = this.counts[indexCount - 1];
        let option = null;
        if (type == "radio") {
          option = [
            values.optionA,
            values.optionB,
            values.optionC,
            values.optionD
          ];
          // let correctOption = [values.answer]
        } else if (type == "checkbox") {
          option = [
            values.optionA,
            values.optionB,
            values.optionC,
            values.optionD,
            values.optionE,
            values.optionF
          ];
        } else if (type == "judgement") {
          option = [
            values.optionA,
            values.optionB,
            values.optionC,
            values.optionD,
            values.optionE,
            values.optionF
          ];
        }
        console.log(type);
        this.counts.push(this.radioSelect);
        let testObject = {
          index: this.counts.length - 1,
          selectedtype: type,
          title: title,
          option: option,
          note: note,
          correctOption: correctOption,
          score: score
        };
        this.questions.push(testObject);
        this.radioSelect = "";
      }
    },
    onReleaseTest(values) {
      if (values.name) {
        console.log(values);

        let testName = this.timeSelect_name;
        let time = null;
        if (this.defineTime) {
          time = this.timeSelect_time;
        } else {
          time = this.timeSelect;
        }
        console.log(this.questions);
        let testSchema = JSON.stringify({
          testName: testName,
          questions: this.questions,
          time: time
        });

        console.log(testSchema);
        this.axios({
          url: `${this.apiPath}test/realeaseTest`,
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          data: testSchema
        }).then(response => {
          console.log(response);
          if (response.data.code == 1) {
            Toast(response.data.message);
          } else if (response.data.code == 2) {
            Toast(response.data.message);
            setTimeout(() => {
              this.$router.push({ path: "/teachers/releaseTest" });
            }, 2000);
          }
        });
      } else {
        Toast("请输入测试名称或者测试时间");
      }
    },
    changeRadio(value) {
      if (this.timeSelect == "selfDefine") {
        this.defineTime = true;
      } else {
        this.defineTime = false;
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
.timeSelect_name {
  margin-top: 0.8rem;
}
.timeSelect_name .van-cell__title {
  width: 70px;
}

.releaseTest_but {
  width: 85%;
  margin: 1rem auto;
}
.radioSelect .van-radio-group{
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 10px auto 0;
}
</style>
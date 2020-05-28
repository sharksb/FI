<template>
  <div class="checkbox">
    <van-panel>
      <template #header>
        <van-field label="（多选）题目" v-model="title" placeholder="请输入题目" class="checkboxTitle" name="title"/>
      </template>
      <div class="teachertest_content">
        <van-field label="A" v-model="optionA" placeholder="请输入选项" name="optionA" class="checkbox_answer"/>
        <van-field label="B" v-model="optionB" placeholder="请输入选项" name="optionB" class="checkbox_answer"/>
        <van-field label="C" v-model="optionC" placeholder="请输入选项" name="optionC" class="checkbox_answer"/>
        <van-field label="D" v-model="optionD" placeholder="请输入选项" name="optionD" class="checkbox_answer"/>
        <van-field label="E" v-model="optionE" placeholder="请输入选项" name="optionE" class="checkbox_answer"/>
        <van-field label="F" v-model="optionF" placeholder="请输入选项" name="optionF" class="checkbox_answer"/>
      </div>
      <template #footer>
         <van-field label="答案" v-model="answer" placeholder="请输入答案，多选答案以“；”结尾" name="answer" class="checkbox_answer"/>
        <van-field label="说明" v-model="note" placeholder="请输入说明" name="note"/>
        <van-field label="分值" v-model="score" placeholder="请输入分值" name="score"/>
      </template>
    </van-panel>
  </div>
</template>

<script>
import { Panel, Field } from "vant";
export default {
  data() {
    return {
      title:"",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      optionE: "",
      optionF: "",
      answer: "",
      note: "",
      score:""
    };
  },
  components: {
    [Panel.name]: Panel,
    [Field.name]: Field
  }
};
</script>

<style>
.teachertest_content {
  display: flex;
  flex-wrap: wrap;
}

.teachertest_content .van-cell {
  width: 50%;
}
.checkboxTitle .van-cell__title {
    width: 95px;
}

.checkbox_answer .van-cell__title {
  width: 40px;
}
</style>
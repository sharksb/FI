<template>
  <div class="radio">
    <van-panel>
      <template #header>
        <van-field label="（判断）题目" v-model="title" placeholder="请输入题目" class="radioTitle" name="title"/>
      </template>
      <div class="teachertest_content">
        <van-field label="A" v-model="correct" name="optionA"/>
        <van-field label="B" v-model="error" name="optionB"/>
      </div>
      <template #footer>
       <van-field label="答案" v-model="answer" placeholder="请输入答案" name="answer"/>
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
      title: "",
      correct: "对",
      error: "错",
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

<style scoped>
.radioTitle .van-cell__title {
  width: 95px;
}

.teachertest_content {
  display: flex;
  flex-wrap: wrap;
}

.teachertest_content .van-cell {
  width: 50%;
}

.radio .van-cell__title {
  width: 35px;
}
</style>
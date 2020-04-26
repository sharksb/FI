<template>
  <div class="radio">
    <van-panel>
      <template #header>
        <van-field label="（判断）题目" v-model="title" placeholder="请输入题目" class="radioTitle" />
      </template>
      <div class="teachertest_content">
        <van-field label="A" v-model="correct" />
        <van-field label="B" v-model="error" />
      </div>
      <template #footer>
        <van-field label="答案" v-model="answer" placeholder="请输入答案" />
        <van-field label="说明" v-model="note" placeholder="请输入说明" />
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
      note: ""
    };
  },
  components: {
    [Panel.name]: Panel,
    [Field.name]: Field
  }
};
</script>

<style>
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

.van-cell__title {
  width: 35px;
}
</style>
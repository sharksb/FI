<template>
  <div class="radio">
    <van-panel>
      <template #header>
        <van-field label="（单选）题目" v-model="title" placeholder="请输入题目" class="radioTitle"/>
      </template>
      <div class="teachertest_content">
        <van-field label="A" v-model="optionA" placeholder="请输入选项" />
        <van-field label="B" v-model="optionB" placeholder="请输入选项" />
        <van-field label="C" v-model="optionC" placeholder="请输入选项" />
        <van-field label="D" v-model="optionD" placeholder="请输入选项" />
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
      optionA:"",
      optionB:"",
      optionC:"",
      optionD:"",
      answer:"",
      note:""
    };
  },
  components: {
    [Panel.name]: Panel,
    [Field.name]: Field
  }
};
</script>

<style scoped>
.radioTitle .van-cell__title{
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
<template>
  <div class="radio">
    <van-panel>
      <template #header>
        <van-field label="（单选）题目" v-model="title" placeholder="请输入题目" name="title" class="radioTitle"/>
      </template>
      <div class="teachertest_content">
        <van-field label="A" v-model="optionA" placeholder="请输入选项" name="optionA"/>
        <van-field label="B" v-model="optionB" placeholder="请输入选项" name="optionB"/>
        <van-field label="C" v-model="optionC" placeholder="请输入选项" name="optionC"/>
        <van-field label="D" v-model="optionD" placeholder="请输入选项" name="optionD"/>
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
import { Panel, Field,Form } from "vant";
export default {
  props:{
    indexCount:Number
  },
  data() {
    return {
      title: "",
      optionA:"",
      optionB:"",
      optionC:"",
      optionD:"",
      answer:"",
      note:"",
      score:""
    };
  },
  components: {
    [Panel.name]: Panel,
     [Form.name]: Form,
    [Field.name]: Field
  }
};
</script>

<style>
.radioTitle .van-cell__title{
    width: 95px !important;
}

.teachertest_content {
  display: flex;
  flex-wrap: wrap;
}

.teachertest_content .van-cell {
  width: 50%;
}

.teachertest_content .van-cell__title {
  width: 45px;
}

</style>
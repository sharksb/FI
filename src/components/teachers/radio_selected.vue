<template>
  <div class="radio_selected">
    <van-form @submit="onSubmit">
      <van-panel v-for="(radioQuestion, index) in radioQuestions" :key="index">
        <template #header>
          <van-field
            label="单选题"
            placeholder="请输入题目"
            class="radiosel_title"
            name="title"
            v-model="radioQuestion.title"
          />
        </template>
        <div class="radiosel_content">
         
          <div class="radioselcon_box" >
              <!-- v-for="(label, index1) in radioQuestion.options" :key="index1" -->
            <van-field :label="label" placeholder="请输入选项" :name="label" v-model="label" />
          </div>
         
        </div>
        <template #footer>
          <van-field label="答案" placeholder="请输入答案" name="answer" v-model="radioQuestion.answer"/>
          <van-field label="说明" placeholder="说明" name="note" v-model="radioQuestion.note"/>
        </template>
      </van-panel>
      <van-button round block type="info" class="submitBut" native-type="submit">提交</van-button>
    </van-form>
  </div>
</template>

<script>
import { Panel, Button, Field, Form } from "vant";
export default {
  data() {
    return {
      radioQuestions: [
        {
          title: "",
          options: {
              labels:['A','B','C','D'],
              selected:[
                  {A:""},
                  {A:""},
                  {A:""},
                  {A:""},
              ]
          },
          answer: "",
          note: "",
          
        }
      ]
    };
  },
  components: {
    [Panel.name]: Panel,
    [Button.name]: Button,
    [Field.name]: Field,
    [Form.name]: Form
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    }
  }
};
</script>

<style>
.radiosel_title .van-cell__title {
  width: 70px;
  font-size: 18px;
  color: #323233;
}

.radiosel_content {
  display: flex;
  flex-wrap: wrap;
}
.radiosel_content .radioselcon_box {
  width: 50%;
}
.radiosel_content .van-cell__title {
  width: 30px;
}
.van-panel__footer .van-cell__title {
  width: 50px;
}
</style>
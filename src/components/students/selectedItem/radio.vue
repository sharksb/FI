<template>
  <div class="radio">
    <van-panel :title="question.title" desc="单选">
      <div class="studenttest_content">
        <van-field :name="'radio'+index" :rules="[{ required: true, message: '请选择答案' }]">
          <template #input>
            <van-radio-group v-model="radio">
              <van-radio v-for="(item, index) in question.opt" :key="index"  :name="item">{{item}}:{{question.option[index]}}</van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </div>
    </van-panel>
  </div>
</template>

<script>
import { Panel, RadioGroup, Radio, Field } from "vant";
export default {
   props:{
     index: Number,
    question:Object
  },
  data() {
    return {
      radio: ""
    };
  },
  components: {
    [Panel.name]: Panel,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Field.name]: Field
  }
};
</script>

<style scoped>
.radio {
  width: 85%;
  margin: 0 auto;
}
.van-radio-group {
  width: 70%;
  margin: 0 auto;
}
.van-radio {
  margin-bottom: 0.6rem;
}
</style>
<template>
  <div class="judgement">
    <van-panel :title="question.title" desc="判断">
      <div class="studenttest_content">
        <van-field :name="(index+1).toString()" :rules="[{ required: true, message: '请选择答案' }]">
          <template #input>
            <van-radio-group v-model="judgement">
              <van-radio name="对">A：对</van-radio>
              <van-radio name="错">B．错</van-radio>
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
  props: {
    index: Number,
    question: Object
  },
  data() {
    return {
      judgement: ""
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
.judgement {
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
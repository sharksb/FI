<template>
  <div class="checkbox">
    <van-panel :title="question.title" desc="多选">
      <div class="studenttest_content">
        <van-field :name="(index+1).toString()"  :rules="[{ required: true, message: '请选择答案' }]">
          <template #input>
            <van-checkbox-group v-model="checkbox">
              <van-checkbox
                v-for="(item, index) in question.option"
                :key="index"
                :name="item"
              >{{question.opt[index]}}:{{item}}</van-checkbox>
            </van-checkbox-group>
          </template>
        </van-field>
      </div>
    </van-panel>
  </div>
</template>

<script>
import { Panel, Checkbox, CheckboxGroup, Field } from "vant";
export default {
  props: {
    index: Number,
    question: Object
  },
  data() {
    return {
      checkbox: []
    };
  },
  components: {
    [Panel.name]: Panel,
    [CheckboxGroup.name]: CheckboxGroup,
    [Checkbox.name]: Checkbox,
    [Field.name]: Field
  }
};
</script>

<style scoped>
.checkbox {
  width: 85%;
  margin: 0 auto;
}
.van-checkbox-group {
  width: 70%;
  margin: 0 auto;
}
.van-checkbox {
  margin-bottom: 0.6rem;
}
</style>
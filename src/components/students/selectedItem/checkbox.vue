<template>
  <div class="checkbox">
    <van-panel title="一般说来，在大额支付的简单加密信用卡网上支付系统中，实际当事人有" desc="多选">
      <div class="studenttest_content">
        <van-checkbox-group v-model="checkbox">
          <van-checkbox name="A">A:复选框 a</van-checkbox>
          <van-checkbox name="B">B:复选框 b</van-checkbox>
          <van-checkbox name="C">C:复选框 b</van-checkbox>
          <van-checkbox name="D">D:复选框 b</van-checkbox>
          <van-checkbox name="E">E:复选框 b</van-checkbox>
          <van-checkbox name="F">F:复选框 b</van-checkbox>
        </van-checkbox-group>
      </div>
    </van-panel>
  </div>
</template>

<script>
import { Panel, Checkbox, CheckboxGroup } from "vant";
export default {
  data() {
    return {
      checkbox: []
    };
  },
  components: {
    [Panel.name]: Panel,
    [CheckboxGroup.name]: CheckboxGroup,
    [Checkbox.name]: Checkbox
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
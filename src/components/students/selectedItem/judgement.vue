<template>
  <div class="judgement">
    <van-panel title="常见的网络银行自助处理系统有ATM系统、POS系统、电话银行系统和自助银行系统等。" desc="判断">
      <div class="studenttest_content">
        <van-radio-group v-model="judgement">
          <van-radio name="A">A：对</van-radio>
          <van-radio name="B">B．错</van-radio>
        </van-radio-group>
      </div>
    </van-panel>
  </div>
</template>

<script>
import { Panel, RadioGroup, Radio } from "vant";
export default {
  data() {
    return {
      judgement: ""
    };
  },
  components: {
    [Panel.name]: Panel,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio
  }
};
</script>

<style scoped>
.judgement{
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
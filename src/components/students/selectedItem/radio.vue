<template>
  <div class="radio">
    <van-panel title="狭义的网络金融不包括" desc="单选">
      <div class="studenttest_content">
        <van-radio-group v-model="radio">
          <van-radio name="A">A：网上银行</van-radio>
          <van-radio name="B">B．网上证券</van-radio>
          <van-radio name="C">C．网上支付</van-radio>
          <van-radio name="D">D．金融信息服务业</van-radio>
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
      radio: ""
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
.radio{
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
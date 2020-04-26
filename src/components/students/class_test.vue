<template>
  <div class="classtest">
      <van-button round block to="/students/currentTest">进入当前测试</van-button>
      <p>2020-01-17</p>
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  data() {
    return {

    };
  },
  components: {
    [Button.name]: Button
  },
  methods: {}
};
</script>

<style>
.classtest{
    width: 80%;
    margin: 0 auto;
    margin-top: 8rem;
}
p{
    text-align: center;
    margin-top: 2rem;
}
</style>
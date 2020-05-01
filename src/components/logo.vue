<template>
  <div>
    <div class="logo">
      <i class="iconfont icon-hulianwangjinrong"></i>
      <h3>互联网金融</h3>
    </div>
    <van-divider :style="{ color: '#666', borderColor: '#666'}" />
  </div>
</template>

<script>
import { Divider } from "vant";
export default {
  components: {
    [Divider.name]: Divider
  }
};
</script>

<style scoped>
.logo {
  width: 85%;
  margin: 10px auto auto;
  display: flex;
  align-items: center;
}

.logo h3 {
  margin: 0;
  margin-left: 15px;
}

.icon-hulianwangjinrong {
  font-size: 60px;
}

.van-divider {
    margin-top: 10px;
}
</style>
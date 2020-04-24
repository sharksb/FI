<template>
  <div class="homework_list">
    <div class="homework_box" v-for="(homework, index) in homeworklist" :key="index
    ">
      <div class="homework_title">
        <img src="@/assets/fileDetail.png" alt />
        <h3>{{homework.homeworkNmae}}</h3>
      </div>
      <div class="homework_charge">
        <div class="hc_title">
          <h4>收取情况：</h4>
          <router-link to="/teachers/fileCharge">
            <h5>详情></h5>
          </router-link>
        </div>
        <van-progress
          :percentage="homework.chargePercent"
          stroke-width="14"
          :show-pivot="false"
        />
      </div>
      <div class="homework_charge">
        <div class="hc_title">
          <h4>批改作业：</h4>
          <router-link to="/teachers/reviseWork">
            <h5>详情></h5>
          </router-link>
        </div>
        <van-progress
          :percentage="homework.revisePercent"
          stroke-width="14"
          :show-pivot="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Progress } from "vant";
export default {
  data() {
    return {
      homeworklist: [
        {
          homeworkNmae: "第一章作业",
          chargePercent: 50,
          revisePercent: 30
        }
      ]
    };
  },
  components: {
    [Progress.name]: Progress
  }
};
</script>

<style scoped>
.homework_list {
  margin-top: 3rem;
}
.homework_title {
  display: flex;
  align-content: center;
}
.homework_title h3 {
  margin: 0;
}
.homework_title img {
  margin-right: 10px;
}

.homework_box {
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #666;
  width: 75%;
  margin: 0 auto;
}

.van-progress {
  border-radius: 15px;
}

.homework_charge h4 {
  text-align: left;
  margin-bottom: 0.3rem;
}
.homework_charge h5 {
  margin-bottom: 0.3rem;
}

.hc_title {
  display: flex;
  justify-content: space-between;
}
</style>
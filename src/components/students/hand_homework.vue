<template>
  <div class="hand_homework">
    <div >
      <van-panel>
        <template #header>
          <div class="hw_content">
            <div class="hwcon_title">
              <img src="@/assets/fileDetail.png" alt />
              <span>互联网金融第三次作业</span>
            </div>
            <span class="hwcon_status">未提交</span>
          </div>
        </template>
        <div class="hwcon_content">
          <h3>截止日期：2020-02-15</h3>
          <van-button>提交</van-button>
        </div>
      </van-panel>

       <van-panel>
        <template #header>
          <div class="hw_content">
            <div class="hwcon_title">
              <img src="@/assets/fileDetail.png" alt />
              <span>互联网金融问答题</span>
            </div>
            <span class="hwcon_status">已提交</span>
          </div>
        </template>
        <div class="hwcon_content">
          <h3>截止日期：2020-02-15</h3>
          <van-button>再次提交</van-button>
        </div>
      </van-panel>
    </div>
  </div>
</template>

<script>
import { Panel, Button } from "vant";
export default {
  data() {
    return {};
  },
  components: {
    [Panel.name]: Panel,
    [Button.name]: Button
  }
};
</script>

<style scoped>
.hand_homework{
    width: 80%;
    margin: 2rem auto 0 auto;
}
h3{
    margin: 0;
    font-size: 12px;
}
.hw_content{
    display: flex;
    justify-content: space-between;
}
.hwcon_title {
  display: flex;
  align-items: center;
}
.hwcon_title span{
    margin-left: 15px;
}
.hwcon_content{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.van-cell-group{
    margin-bottom: 2rem;
}
</style>
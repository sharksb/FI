<template>
  <div class="homework_detail">
    <van-nav-bar title="收取情况" left-text="作业列表" left-arrow @click-left="onClickLeft" />

    <!-- 已交 -->
    <div class="hwdetail_title">
      <img src="@/assets/submit.png" alt />
      <span>已交</span>
    </div>
    <div class="submitHomework" v-for="(homework, index) in submitHomework" :key="index">
      <h1>{{homework.className}}</h1>
      <h2>{{homework.submitCount}}人</h2>
      <a :href="homework.url">下载</a>
    </div>

    <!-- 未交 -->
    <div class="hwdetail_title">
      <img src="@/assets/submit.png" alt />
      <span>未交</span>
    </div>
    <van-collapse v-model="activeName" accordion>
      <div v-for="(noHomework, index) in nosubmitHomework" :key="index">
        <van-collapse-item
          :title="noHomework.className"
          :name="index"
          :value="noHomework.nosubmitCount"
        >
          <ul>
            <li v-for="(item ,index) in noHomework.studentInfor" :key="index">
              <span>{{item.studentName}}</span>
              {{item.studentId}}
            </li>
          </ul>
        </van-collapse-item>
      </div>
    </van-collapse>

    <van-button @click="alertButton" class="alertButton" round block>一键警告</van-button>
  </div>
</template>

<script>
import { NavBar, Collapse, CollapseItem, Button } from "vant";
export default {
  data() {
    return {
      submitHomework: [
        {
          className: "信息1601",
          submitCount: 30,
          url: "#"
        },
        {
          className: "信息1602",
          submitCount: 31,
          url: "#"
        },
        {
          className: "信息1603",
          submitCount: 32,
          url: "#"
        }
      ],
      nosubmitHomework: [
        {
          className: "信息1601",
          nosubmitCount: 2,
          studentInfor: [
            {
              studentName: "李煜",
              studentId: 20165175
            },
            {
              studentName: "大红",
              studentId: 20164125
            }
          ]
        },
        {
          className: "信息1602",
          nosubmitCount: 2,
          studentInfor: [
            {
              studentName: "李煜",
              studentId: 20165175
            },
            {
              studentName: "大红",
              studentId: 20164125
            }
          ]
        }
      ],
      activeName: "1"
    }
  },
  components: {
    [NavBar.name]: NavBar,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Button.name]: Button
  },
  methods: {
    onClickLeft() {
      console.log("返回");
    },
    alertButton() {
      console.log("一键警告");
    }
  }
};
</script>

<style>
.homework_detail {
  width: 85%;
  margin: 0 auto;
}

.hwdetail_title {
  display: flex;
  align-items: center;
  text-align: left;
  margin-top: 2rem;
}
.hwdetail_title span {
  font-size: 20px;
  margin-left: 20px;
}

.submitHomework {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #666;
}

.submitHomework h1,
h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 400;
}
.submitHomework a {
  font-size: 14px;
  text-decoration-line: underline;
}
.van-collapse-item__content {
  width: 80%;
  margin: 0 auto;
}
.van-collapse-item__content ul {
  width: 100%;
}

.van-collapse-item__content ul li {
  display: flex;
  justify-content: space-between;
}
.van-cell__title span {
  font-size: 18px;
}

.alertButton {
  margin-top: 2rem;
}
</style>
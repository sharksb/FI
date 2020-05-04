<template>
  <div class="homework_detail">
    <van-nav-bar title="收取情况" left-text="作业列表" left-arrow @click-left="onClickLeft" />

    <van-collapse v-model="activeName" accordion>
      <div v-for="(noHomework, index) in nosubmitHomework" :key="index">
        <van-collapse-item :title="noHomework.className" :name="index" value="详情">
          <ul>
            <li v-for="(item ,index) in noHomework.studentInfor" :key="index">
              <span>{{item.studentName}}</span>
              {{item.studentId}}
              <van-button @click="checkButton" size="mini" round>查看</van-button>
              <van-button @click="uploadButton" size="mini" round>下载</van-button>
            </li>
          </ul>
        </van-collapse-item>
        <div class="up_but">
          <van-button class="upButton" @click="classButton">下载</van-button>
        </div>
      </div>
    </van-collapse>

    <van-button @click="uploadAllButton" class="alertButton" round block>一键下载</van-button>
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
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Button.name]: Button
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
      console.log("返回");
    },
    uploadAllButton() {
      console.log("一键下载");
    },
    classButton(){
     console.log("下载班级")
    },
    checkButton() {
      this.$router.push({path:'/teachers/reviseDetail'})
      console.log("查看");
    },
    uploadButton() {
      console.log("下载");
    }
  }
};
</script>

<style>
ul {
  width: 80%;
  margin: 0 auto;
}
li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.up_but{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
}

.upButton {
  background-color: #80abc8;
  height: 35px;
  line-height: 35px;
  border-radius: 15px;
}
.alertButton{
    margin-top: 2rem;
}
</style>
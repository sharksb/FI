<template>
  <div class="test_score">
    <van-nav-bar title="测试成绩详情" left-text="测试成绩" left-arrow @click-left="onClickLeft" />

    <van-collapse v-model="activeName" accordion>
      <div v-for="(testScore, index) in testScores" :key="index">
        <van-collapse-item :name="index" value="详情">
          <template #title>
            <div class="testSore_title">
              <img src="@/assets/testScore.png" alt />
              {{testScore.className}}
            </div>
          </template>
          <ul>
            <li>
              <span>总人数：{{testScore.studentCount}}</span>测试成绩
            </li>
            <li v-for="(item ,index) in testScore.studentInfor" :key="index" class="testScore_li">
              <h6>{{item.studentName}}</h6>
               <h6>{{item.studentId}}</h6>
               <h6>{{item.studentSoce}}</h6>
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
import { NavBar, Collapse, CollapseItem, Button, Icon } from "vant";
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
      testScores: [
        {
          className: "信息1601",
          studentCount: 30,
          testStudentCount: 28,
          studentInfor: [
            {
              studentName: "李煜",
              studentSoce: 73
            },
            {
              studentName: "大红",
              studentSoce: 95
            },
            {
              studentName: "菲菲",
              studentSoce: 95
            },
            {
              studentName: "丽丽",
              studentSoce: 95
            },
            {
              studentName: "王紫荆",
              studentSoce: 73
            },
            {
              studentName: "肖珺婕",
              studentSoce: 95
            },
             {
              studentName: "刘欣丽",
              studentSoce: 95
            },
             {
              studentName: "李峰",
              studentSoce: 95
            }
          ]
        },
        {
          className: "信息1602",
          studentCount: 32,
          studentInfor: [
              {
              studentName: "李煜",
              studentSoce: 73
            },
            {
              studentName: "大红",
              studentSoce: 95
            },
             {
              studentName: "李煜",
              studentSoce: 73
            },
            {
              studentName: "大红",
              studentSoce: 95
            },
            {
              studentName: "王紫荆",
              studentSoce: 73
            },
            {
              studentName: "肖珺婕",
              studentSoce: 95
            },
             {
              studentName: "刘欣丽",
              studentSoce: 95
            },
             {
              studentName: "李峰",
              studentSoce: 95
            }
          ]
        },
        {
          className: "信息1603",
          studentCount: 32,
          studentInfor: [
            {
              studentName: "李煜",
              studentSoce: 73
            },
            {
              studentName: "大红",
              studentSoce: 95
            },
             {
              studentName: "李煜",
              studentSoce: 73
            },
            {
              studentName: "大红",
              studentSoce: 95
            },
            {
              studentName: "菲菲",
              studentSoce: 95
            },
            {
              studentName: "丽丽",
              studentSoce: 95
            },
            {
              studentName: "王紫荆",
              studentSoce: 73
            },
            {
              studentName: "肖珺婕",
              studentSoce: 95
            },
             {
              studentName: "刘欣丽",
              studentSoce: 95
            },
             {
              studentName: "李峰",
              studentSoce: 95
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
    [Button.name]: Button,
    [Icon.name]: Icon
  },
  beforeMount(){
    let testName = this.$route.query.testName
      this.axios({
      method: "get",
      url: `${this.apiPath}test/obtainScore?testName=${testName}`
    })
      .then(reponse => {
        let data = reponse.data
        if(data.code ==2){
          this.testScores = data.data
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    onClickLeft() {
      this.$router.push({path:'/teachers/releaseTest',query:{active:'testScore'}})
    },
    uploadAllButton() {
      console.log("一键下载");
    },
    classButton() {
      console.log("下载班级");
    },
    checkButton() {
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
.testSore_title {
  display: flex;
  align-items: center;
}

.testSore_title img {
  margin-right: 1rem;
}
.van-collapse {
  margin-top: 2rem;
}
.up_but {
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
.alertButton {
  margin-top: 2rem;
}

.testScore_li {
  display: flex;
  justify-content: space-between;
}

.testScore_li h6 {
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  width: 20%;
  text-align: center;
}
</style>
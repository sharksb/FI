<template>
  <div>
    <van-nav-bar title="收取情况" left-text="作业列表" left-arrow @click-left="onClickLeft" />
    <div class="homework_detail">
      <!-- 已交 -->
      <div class="hwdetail_title">
        <img src="@/assets/submit.png" alt />
        <span>已交</span>
      </div>
        <van-collapse  v-model="activeName" accordion>
        <div v-for="(homework, index) in submitHomework" :key="index">
          <van-collapse-item
            :title="homework.className"
            :name="index"
            :value="homework.submitCount"
          >
            <ul>
              <li v-for="(item ,index) in homework.studentInfor" :key="index">
                <span>{{item.studentName}}</span>
                {{item.studentId}}
                <a :href="'http://localhost:8081/'+item.stuUrl" download>下载</a>
              </li>
            </ul>
          </van-collapse-item>
        </div>
      </van-collapse>

      <!-- 未交 -->
      <div class="hwdetail_title">
        <img src="@/assets/submit.png" alt />
        <span>未交</span>
      </div>
      <van-collapse v-model="activeNames" accordion>
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
  </div>
</template>

<script>
import { NavBar, Collapse, CollapseItem, Button } from "vant";
export default {
  data() {
    return {
      submitHomework: [],
      nosubmitHomework: [],
      activeName: ['1'],
      activeNames: ['1']
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Button.name]: Button
  },
    beforeMount(){
      let filename = this.$route.query.filename
        this.axios({
             method:'get',
             url:`${this.apiPath}file/showHomeworkDetail?filename=${filename}`,
         }).then((reponse=>{ 
           console.log(reponse)
           let data = reponse.data
           this.nosubmitHomework = data.data.nosubmitHomework
           this.submitHomework =  data.data.submitHomework
           console.log(this.nosubmitHomework)
         })).catch((err)=>{
           console.log(err)
         })
    },
  methods: {
    onClickLeft() {
       this.$router.push({ path: "/teachers/sendFile",query:{active:'homeworkList'} });
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
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
          <h5 @click="toDetail(homework.homeworkNmae)">详情></h5>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Progress } from "vant";
export default {
  data() {
    return {
      homeworklist: []
    };
  },
  components: {
    [Progress.name]: Progress
  },
  beforeMount(){
      this.axios({
             method:'get',
             url:`${this.apiPath}file/showHomeworkForTeacher`,
         }).then((response=>{
           console.log(response)
           this.homeworklist = response.data
         })).catch((err)=>{
           console.log(err)
         })
  },
  methods:{
    toDetail(filename){
      this.$router.push({path:'/teachers/fileCharge',query:{filename:filename}})
    }
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
  font-size: 16px;
}
.homework_title img {
  margin-right: 10px;
  width: 32px;
  height: 32px;
}

.homework_box {
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #666;
  width: 75%;
  margin: 0 auto 2rem;
}

.van-progress {
  border-radius: 15px;
}

.homework_charge h4 {
  text-align: left;
  margin: 0;
}
.homework_charge h5 {
  margin: 0;
}

.hc_title {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
}
</style>
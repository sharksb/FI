<template>
  <div class="classtest">
      <van-button round block  @click="enterTest">进入当前测试</van-button>
      <p>{{date}}</p>
  </div>
</template>

<script>
import { Button, Toast } from "vant";
import app from "@/api/app"
export default {
  data() {
    return {
      date:''
    };
  },
  components: {
    [Button.name]: Button
  },
  beforeMount(){
     this.date = app.getNowDate()
  },
  methods:{
    // to="/students/currentTest"
     enterTest(){
       let idCard = sessionStorage.getItem("idCard")
       this.axios({
       method: "get",
       url: `${this.apiPath}test/judgementCurrentTest?idCard=${idCard}`
      })
      .then(reponse => {
        console.log(reponse);
        let data = reponse.data
        if(data.code == 1){
          Toast(`测试已在${data.data}结束`)
        }else if(data.code == 2){
           Toast(data.message)
        }else if(data.code == 3){
          this.$router.push(
            {path:'/students/currentTest',
            query:{
              testName:data.data
            }}
          )
        }
      })
      .catch(err => {
        console.log(err);
      });
     }
  }
};
</script>

<style scoped>
.classtest{
    width: 80%;
    margin: 0 auto;
    margin-top: 8rem;
}
.classtest p{
    text-align: center;
    margin-top: 2rem;
}
</style>
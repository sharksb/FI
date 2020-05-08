<template>
  <div class="file_list">
    <div class="fl_box" v-for="(file, index) in filelist" :key="index">
      <img src="@/assets/filelist.png" alt />
      <h5>{{file.time}}</h5>
      <h4 v-if="listtype == file">
        <a :href="file.fileurl">{{file.filename}}</a>
      </h4>
      <h4 v-else>
        <a @click="toDeatil(file.fileurl)">{{file.filename}}</a>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listtype: String,
    filelist: Array
  },
  data() {
    return {};
  },
  methods:{
  toDeatil(e){
   if(e.indexOf('passedTest') >  -1) {
      this.$router.push({path:e})
   }
  }  
  }
};
</script>

<style scoped>
.file_list {
  width: 80%;
  margin: 0 auto;
  margin-top: 3rem;
}
.fl_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.fl_box h5 {
  width: 30%;
  font-size: 16px;
}
.fl_box h4 {
  width: 45%;
  text-align: right;
  font-size: 20px;
}
.fl_box h4 a {
  color: #2c3e50;
}
</style>
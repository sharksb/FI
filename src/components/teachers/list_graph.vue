<template>
  <div class="file_list">
    <div class="fl_box" v-for="(file, index) in filelist" :key="index">
      <img src="@/assets/filelist.png" alt />
      <h5>{{file.time}}</h5>
      <h4>
        <a :href="file.fileurl">{{file.filename}}</a>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filelist: [
        {
          time: "2020-01-17",
          fileurl: "#",
          filename: "第一章作业"
        },
        {
          time: "2020-01-17",
          fileurl: "#",
          filename: "第一章作业"
        }
      ]
    };
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
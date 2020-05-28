<template>
  <div class="internetInfo">
    <div class="title">
      <img src="@/assets/submit.png" alt />
      <span>添加学生</span>
    </div>

    <div class="content">
      <van-form @submit="onSubmit">
        <van-field
          v-model="studentName"
          name="studentName"
          label="姓名"
          placeholder="请输入姓名"
          :rules="[{ required: true, message: '请填写姓名' }]"
        />
        <van-field
          v-model="studentId"
          name="studentId"
          label="学号"
          placeholder="请输入学号"
          :rules="[{ required: true, message: '请填写学号' }]"
        />
        <van-field
          v-model="classId"
          name="classId"
          label="班级"
          placeholder="请输入班级"
          :rules="[{ required: true, message: '请填写班级' }]"
        />

        <div style="margin: 36px 16px;">
          <van-button round block type="info" native-type="submit">添加</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import { Field, Form, Button, Toast } from "vant";
import qs from "qs";
export default {
  data() {
    return {
      studentName: " ",
      studentId: " ",
      classId: " "
    };
  },
  components: {
    [Field.name]: Field,
    [Form.name]: Form,
    [Button.name]: Button,
    [Toast.name]: Toast
  },
  methods: {
    onSubmit(values) {
      console.log(values);
      let studentName = values.studentName.trim()
      let studentId = values.studentId.trim()
      let classId = values.classId.trim()
      let data = qs.stringify({
        studentName: studentName,
        studentId: studentId,
        classId:classId
      });
      this.axios({
        url: `${this.apiPath}user/addStudent`,
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: data
      })
        .then(reponse => {
          console.log(reponse);
          let data = reponse.data
          if(data.code == 1){
              Toast(data.message);
          }else if(data.code == 2){
              Toast(data.message);
              this.studentName = ''
              this.studentId = ''
              this.classId =''
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
.internetInfo {
  width: 85%;
  margin: 1.5rem auto 0;
}

.internetInfo .title {
  display: flex;
  align-items: center;
}

.internetInfo .title span {
  margin-left: 20px;
}

.internetInfo .content {
  margin-top: 2rem;
}
</style>
<template>
  <div class="information">
    <!-- teacher -->
   
    <div class="firstMan" v-if="personInfor == '学生'" >
     <router-link  to="/tinformationDetail" >
      <div class="firstMan_avater">
        <img src="@/assets/person/avater.png" alt />
        <span>授课老师</span>
      </div>
      <mt-badge size="small" color="#888">{{teacherCount}}</mt-badge>
      </router-link>
    </div>
    

    <div class="teacherMan" v-else>
      <div class="firstMan">
        <div class="firstMan_field">
          <img src="@/assets/person/avater.png" alt />
          <div class="platform_message">
            <van-field
              v-model="message"
              type="textarea"
              maxlength="200"
              placeholder="写下你想说的话"
              show-word-limit
            />
          </div>
        </div>
      </div>
      <div class="teacher_button">
        <van-button class="platform_send" @click="sendMessage">发送</van-button>
      </div>
    </div>
    <!-- 所有学生 -->
    <div class="allStudent">
      <van-collapse v-model="activeNames">
        <van-collapse-item title="所有学生" name="1">
          <ul>
            <li
              @touchstart="enterDetail(student.username,student.idCard)"
              @touchend="leaveDetail($event)"
              v-for="(student, index) in allStudents"
              :key="index"
            >
              <div class="allStudent_item">
                <img src="@/assets/person/avater.png" alt />
                <span>{{student.username}}</span>
                <p>{{student.idCard}}</p>
              </div>
            </li>
          </ul>
        </van-collapse-item>
      </van-collapse>
    </div>

    <!-- 其他消息 -->
    <div
      class="otherInfor_box"
      v-for="(sendMessageStudent, index) in sendMessageStudents"
      @touchstart="enterDetail(sendMessageStudent.sendusername,sendMessageStudent.sendidcard)"
      @touchend="leaveDetail($event)"
      :key="index"
    >
      <div class="otherInfor">
        <div class="firstMan_avater">
          <img src="@/assets/person/avater.png" alt />
          <div>
            <span>{{sendMessageStudent.sendusername}}-{{sendMessageStudent.sendidcard}}</span>
            <p>{{sendMessageStudent.title}}</p>
          </div>
        </div>
        <mt-badge size="small" color="#888">{{sendMessageStudent.count}}</mt-badge>
      </div>
    </div>
  </div>
</template>

<script>
import { Badge } from "mint-ui";
import { Collapse, CollapseItem, Field, Button, Toast } from "vant";
import "mint-ui/lib/style.css";
export default {
  data() {
    return {
      personInfor: null,
      message: "",
      activeNames: ["1"],
      allStudents: [],
      sendMessageStudents: [],
      teacherCount: 0
    };
  },
  components: {
    [Badge.name]: Badge,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Field.name]: Field,
    [Button.name]: Button,
    [Toast.name]: Toast
  },
  beforeMount() {
    this.personInfor = sessionStorage.getItem("type");
    let idCard = sessionStorage.getItem("idCard");
    this.axios({
      url: `${this.apiPath}platform/obtainAllStudent`,
      method: "get"
    })
      .then(response => {
        console.log(response);
        let data = response.data;
        if (data.code == 2) {
          console.log(data);
          this.allStudents = data.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
    this.axios({
      url: `${this.apiPath}platform/obtainMessage?reciveidcard=${idCard}`,
      method: "get"
    })
      .then(response => {
        console.log(response);
        let data = response.data;
        if (data.code == 2) {
          console.log(data);
          this.sendMessageStudents = data.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
      this.axios({
      url: `${this.apiPath}platform/countTeacher`,
      method: "get"
    })
      .then(response => {
        console.log(response);
        let data = response.data;
        if (data.code == 2) {
          console.log(data);
          this.teacherCount = data.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    enterDetail(username, idcard) {
      this.$router.push({
        path: "/informationDetail",
        query: {
          username,
          idcard
        }
      });
    },
    leaveDetail(e) {
      e.currentTarget.className = "";
    },
    sendMessage() {
      if (this.message == "") {
        Toast("请输入内容");
      } else {
        let sendData = JSON.stringify({
          title: this.message
        });
        this.axios({
          url: `${this.apiPath}platform/sendTeacher`,
          headers: {
            "Content-Type": "application/json"
          },
          method: "post",
          data: sendData
        })
          .then(response => {
            let data = response.data;
            if (data.code == 2) {
              Toast(data.message);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
      this.message = "";
    }
  }
};
</script>

<style scoped>
p {
  margin: 0;
}
.firstMan {
  width: 80%;
  margin: 20px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.firstMan a {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.firstMan_avater {
  display: flex;
  align-items: center;
}
.firstMan_avater img {
  width: 40px;
  height: 40px;
  margin-right: 15px;
}

.firstMan_field {
  display: flex;
  width: 100%;
}

.platform_message {
  width: 100%;
}
.platform_message .van-field {
  border-radius: 15px;
  border: 1px solid #666;
}

.firstMan_field img {
  width: 40px;
  height: 40px;
  margin-right: 15px;
}
.teacherMan {
  display: flex;
  flex-direction: column;
}

.teacher_button {
  width: 80%;
  margin: 10px auto 15px;
  display: flex;
  justify-content: flex-end;
}
/*  */
.allStudent {
  width: 80%;
  margin: 20px auto 0;
}

.allStudent ul li {
  padding: 8px 0;
}
.allStudent ul li div {
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.allStudent ul li img {
  width: 30px;
  height: 30px;
  margin-right: 20px;
}
.allStudent ul li span {
  width: 30%;
  display: inline-block;
}
.allStudent ul li p {
  width: 50%;
}

.grayBg {
  background-color: #cecece;
}

.otherInfor {
  width: 80%;
  margin: 20px auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.otherInfor span {
  font-size: 14px;
}
</style>
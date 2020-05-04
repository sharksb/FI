<template>
  <div class="information">
    <!-- teacher -->
    <div class="firstMan" v-if="personInfor == 'student'" @touchstart="enterDetail($event)">
      <div class="firstMan_avater" >
        <img src="@/assets/person/avater.png" alt />
        <span>授课老师</span>
      </div>
      <mt-badge size="small" color="#888">30</mt-badge>
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
              @touchstart="enterDetail($event)"
              @touchend="leaveDetail($event)"
              v-for="(student, index) in allStudents"
              :key="index"
            >
              <div>
                <img src="@/assets/person/avater.png" alt />
                <span>{{student.name}}</span>
              </div>
            </li>
          </ul>
        </van-collapse-item>
      </van-collapse>
    </div>

    <!-- 其他消息 -->
    <div
      class="otherInfor_box"
      @touchstart="enterDetail($event)"
      @touchend="leaveDetail($event)"
      v-for="(sendMessageStudent, index) in sendMessageStudents"
      :key="index"
    >
      <div class="otherInfor">
        <div class="firstMan_avater">
          <img :src="sendMessageStudent.avater" alt />
          <div>
            <span>{{sendMessageStudent.name}}</span>
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
import { Collapse, CollapseItem, Field, Button } from "vant";
import "mint-ui/lib/style.css";
export default {
  data() {
    return {
      personInfor:null,
      message: "",
      activeNames: ["1"],
      allStudents: [
        {
          name: "小红",
          avater: "@/assets/person/avater.png"
        },
        {
          name: "小红",
          avater: "@/assets/person/avater.png"
        },
        {
          name: "小红",
          avater: "@/assets/person/avater.png"
        }
      ],
      sendMessageStudents: [
        {
          name: "小雨",
          avater: "@/assets/person/avater.png",
          title: "在吗",
          count: 13
        },
        {
          name: "小雨",
          avater: "@/assets/person/avater.png",
          title: "在干嘛",
          count: 1
        }
      ]
    };
  },
  components: {
    [Badge.name]: Badge,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Field.name]: Field,
    [Button.name]: Button
  },
    beforeMount() {
    this.personInfor = sessionStorage.getItem("personInfor");
  },
  methods: {
    enterDetail(e) {
      e.currentTarget.className = "grayBg";
       this.$router.push({path:"/informationDetail"})
    },
    leaveDetail(e) {
      e.currentTarget.className = "";
    },
    sendMessage() {
      console.log(this.message);
      this.message = ''
    },

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
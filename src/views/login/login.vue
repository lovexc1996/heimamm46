<template>
  <div class="login-container">
    <div class="left-box">
      <!-- 顶部的标题 -->
      <div class="title-box">
        <img class="logo" src="../../assets/login_logo.png" alt />
        <span class="title">黑马面面</span>
        <span class="line"></span>
        <span class="sub-title">用户登录</span>
      </div>
      <div class="inputAre">
        <el-input
          class="userInput"
          placeholder="请输入用户名"
          prefix-icon="el-icon-user"
          v-model="username"
        ></el-input>
        <el-input
          class="pswInput"
          show-password
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          v-model="password"
        ></el-input>
        <el-input class="pskInput" placeholder="请输入验证码" prefix-icon="el-icon-key" v-model="passkey"></el-input>
      </div>
      
    </div>
    <img src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      passkey: ""
    };
  },
  //组件的名字
  name: "login"
};
</script>

<style lang="less">
.login-container {
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  display: flex;
  /* 上下居中 */
  align-items: center;
  /* 左右均分 */
  justify-content: space-around;
  .left-box {
    width: 478px;
    background-color: #f5f5f5;
    height: 550px;
    .title-box {
      display: flex;
      align-items: center;
      margin-top: 44px;
      margin-left: 48px;
      .logo {
      }
      .title {
        font-size: 24px;
        margin-left: 16px;
        margin-right: 14px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
      .line {
        width: 1px;
        height: 28px;
        background: rgba(199, 199, 199, 1);
      }
      .sub-title {
        margin-left: 12px;
        font-size: 22px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
    }
    .inputAre {
      margin-top: 29px;
      margin-left: 43px;
      .userInput {
        margin-bottom: 25px;
        width: 394px;
        background: rgba(255, 255, 255, 1);
      }
      .pswInput {
        margin-bottom: 25px;
        width: 394px;
        background: rgba(255, 255, 255, 1);
      }
      .pskInput {
        width: 284px;
        background: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>
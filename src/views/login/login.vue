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
      <el-form ref="loginform" :rules="rules" :model="loginform" label-width="43px">
        <!-- 手机号 -->
        <el-form-item>
          <el-input placeholder="请输入手机号" prefix-icon="el-icon-user" v-model="loginform.phone"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            show-password
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            v-model="loginform.password"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="logincode">
          <el-row>
            <el-col :span="17">
              <el-input
                placeholder="请输入验证码"
                prefix-icon="el-icon-key"
                v-model="loginform.logincode"
              ></el-input>
            </el-col>
            <el-col :span="7">
              <img class="logincode" src="../../assets/login_captcha.png" alt />
            </el-col>
          </el-row>
        </el-form-item>
        <!-- 用户协议 -->
        <el-form-item>
          <el-checkbox v-model="loginform.isChecked">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button class="loginbtn" @click="submitForm('loginform')" type="primary">登录</el-button>
          <el-button class="loginbtn" type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img src="../../assets/login_banner_ele.png" alt />
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      loginform: {
        // 手机号
        phone: "",
        // 密码
        password: "",
        // 验证码
        logincode: "",
        // 勾选框
        isChecked: false
      },
      // 校验规则
      rules: {
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          { min: 6, max: 12, message: "密码的长度为6-12位", trigger: "blur" }
        ],
        logincode: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur"
          },
          { min: 4, max: 4, message: "验证码的长度为4位", trigger: "blur" }
        ]
      }
    };
  },
  // 方法
  methods: {
    // 提交表单
    submitForm(formName) {
      // 等同于this.$refs['loginForm']相当于获取到了Element0ui的表单
      // this.$refs['loginForm'] 等同于 this.$refs.loginForm
      // validate这个方法是Element-ui的表单的方法
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message.success("验证成功");
          // 验证正确
        } else {
          this.$message.error("验证失败");
          // 验证错误
          return false;
        }
      });
    }
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
  // 左侧盒子
  .left-box {
    width: 478px;
    background-color: #f5f5f5;
    height: 550px;
    // 设置样式 把表单间隙空出来
    padding-right: 41px;
    box-sizing: border-box;
    .title-box {
      display: flex;
      align-items: center;
      margin-top: 44px;
      margin-left: 48px;
      margin-bottom: 27px;
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
    // 登录验证码
    .logincode {
      height: 40.8px;
      width: 100%;
    }
    // 底部的按钮
    .loginbtn {
      width: 100%;
      margin-bottom: 26px;
      margin-left: 0;
    }
    // 验证码的 栅格容器
    .code-col {
      height: 40.8px;
    }
  }
  // 协议布局
  .el-checkbox {
    display: flex;
    // 上下居中
    align-items: center;
    .el-checkbox__label {
      display: flex;
    }
  }
}
</style>
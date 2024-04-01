<template>
    <div class="login">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form" :model="userStore.loginForm" :rules="rules" ref="loginForms">
                    <h1>Hello</h1>
                    <h2>欢迎来到甄选商场</h2>
                    <el-form-item prop="username">
                        <el-input type="text" :prefix-icon="User" v-model="userStore.loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" :prefix-icon="Lock" v-model="userStore.loginForm.password"
                            show-password></el-input>

                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" type="primary" size="default" @click="login"
                            class="login_btn">登录</el-button>

                    </el-form-item>

                </el-form>

            </el-col>
        </el-row>


    </div>
</template>
<script setup lang='ts'>
import { User, Lock } from "@element-plus/icons-vue";
import type { FormInstance, FormRules } from 'element-plus'
import { userLoginStore } from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElNotification } from "element-plus";
import type { loginForm, loginResponseData, userResponseData } from '@/api/user/type'
// 获取时间工具
import { timeInterval } from '@/utils/time';
import { ref, reactive } from 'vue'
// 调用useXxxxxStore得到对应的store
const userStore = userLoginStore()

let loading = ref(false)
// 获取整个form表单元素，使用validate()方法可以判断表单是否校验通过
let loginForms = ref()
let $router = useRouter()

// 定义自定义校验规则函数
const validatorUserName = (rule:any,value: any, callback: any) => {
    // value输入的值，callback成功需要调用的函数
    if (value.lenght >= 5) {
        callback();
    } else {
        callback(new Error('账号至少5位'))
    }
}


const rules = reactive<FormRules<loginForm>>({
    // blur 失去焦点触发 change 文本发生变化校验
    // required是否必须校验
    username: [

        // { required: true, message: '请输入用户名', trigger: 'change' },
        // { min: 3, max: 5, message: '用户名长度应为3~5', trigger: 'change' },

        // 使用自定义校验规则
        { trigger: 'change', validator: validatorUserName }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'change' },
        { min: 3, max: 5, message: '用户名长度应为3~5', trigger: 'change' },
    ],

})
async function login() {
    // 验证表单是否通过校验，没通过不发送请求
    await loginForms.value.validate()
    // loading图标转动
    loading.value = true
    // 登录函数
    try {
        // login里定义了Promise所以如果


        await userStore.login();

        // 登录成功跳转到首页
        $router.push('/')
        ElNotification({
            type: "success",
            message: `hi, ${timeInterval()}好`
        })
        loading.value = false

    } catch (error) {
        loading.value = false
        ElNotification({
            type: "error",
            message: (error as Error).message
        })
    }

}

</script>
<style scoped lang='scss'>
.login {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;
}

.login_form {
    position: relative;
    width: 80%;
    top: 45vh;
    background: url('@/assets/images/login_form.png');
    padding: 40px;

    h1 {
        color: white;
        font-size: 40px;
    }

    h2 {
        color: white;
        font-size: 20px;
        margin: 20px 0;
    }

    .login_btn {
        width: 100%;
    }
}
</style>

<template>
    <div class="login">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form">
                    <h1>Hello</h1>
                    <h2>欢迎来到甄选商场</h2>
                    <el-form-item>
                        <el-input type="text" :prefix-icon="User" v-model="userStore.loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item>
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

import { userLoginStore } from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElNotification } from "element-plus";
import { ref } from 'vue'
// 调用useXxxxxStore得到对应的store
const userStore = userLoginStore()

let loading = ref(false)
let $router = useRouter()

async function login() {
    // loading图标转动
    loading.value = true
    // 登录函数
    try {
        // login里定义了Promise所以如果

        console.log(await userStore.login());

        // 登录成功跳转到首页
        $router.push('/')
        ElNotification({
            type: "success",
            message: '登录成功'
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

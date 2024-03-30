// 关于用户的小仓库
// 引入defineStore用于创建store
import { defineStore } from 'pinia'

// 引入登录api
import { reqLogin } from '@/api/user/index'
// 定义并暴露一个store
export const userLoginStore = defineStore('user', {
    // 动作
    actions: {
        async login() {
            // console.log();
            let result = await reqLogin(this.loginForm);
            // console.log(result)
            if (result.code == 200) {
                // 存储token：本地持久化存储 
                this.token = result.data.token
                localStorage.setItem('TOKEN', result.data.token)
                return 'ok';
            } else {

                return Promise.reject(new Error(result.data.message))
            }



        }
    },
    // 状态
    state: () => {
        return {
            loginForm: {
                username: "admin",
                password: "111111"
            },
            // 从本地获取用户token
            token: localStorage.getItem('TOKEN')
        }
    },
    // 计算
    getters: {}
});
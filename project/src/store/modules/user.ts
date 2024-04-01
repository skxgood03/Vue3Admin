// 关于用户的小仓库
// 引入defineStore用于创建store
import { defineStore } from 'pinia'
// ts数据类型
import type { loginForm, loginResponseData, userResponseData } from '@/api/user/type'
import type { UserState } from './types/type';
// 引入登录api
import { reqLogin } from '@/api/user/index'
import { GETTOKEN, SETTOKEN } from '@/utils/token'
// 定义并暴露一个store
export const userLoginStore = defineStore('user', {

    // 状态
    state(): UserState {
        return {
            loginForm: {
                username: "admin",
                password: "111111"
            },
            // 从本地获取用户token
            token: GETTOKEN()
        }
    },

    // 动作
    actions: {
        async login() {
            // console.log();
            let result: loginResponseData = await reqLogin(this.loginForm);
            // console.log(result)
            if (result.code == 200) {
                // 存储token：本地持久化存储 
                this.token = (result.data.token as string)
                SETTOKEN((result.data.token as string))
                return 'ok';
            } else {

                return Promise.reject(new Error(result.data.message))
            }



        }
    },

    // 计算
    getters: {}
});
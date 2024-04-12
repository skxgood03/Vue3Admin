// 定义小仓库的数据类型
import type { loginForm, loginResponseData, userResponseData } from '@/api/user/type'
import type { RouteRecordRaw } from 'node_modules/vue-router/dist/vue-router'

export interface UserState {
    token: string | null,
    loginForm: loginForm,
    meunRoutes: RouteRecordRaw[]
}
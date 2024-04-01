// 定义小仓库的数据类型
import type { loginForm, loginResponseData, userResponseData } from '@/api/user/type'

export interface UserState{
    token:string|null,
    loginForm:loginForm
}
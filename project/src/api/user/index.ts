import request from '@/utils/request';
// 引入定义好的ts类型规范
import type { loginForm, loginResponseData, userResponseData } from './type'

// 统一管理接口
enum API {
    LOGIN_URL = '/user/login',
    USERINFO_URL = '/user/info'
}
// 暴露请求函数
// 登录接口方法
export const reqLogin = (data: loginForm) => request.post<any, loginResponseData>(API.LOGIN_URL, data)
// 返回用户信息
export const reqUserInfo = () => request.get<any, userResponseData>(API.USERINFO_URL)
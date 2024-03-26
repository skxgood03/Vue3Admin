// axios二次封装 ：请求拦截器 响应拦截器
import axios from "axios";
import { ElMessage } from "element-plus";
//创建axios实例
let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,  //基础路径前缀
    timeout: 5000 //响应时间
})
//请求拦截器
request.interceptors.request.use(config => {
    // 可以去给后端请求时添加一些公共参数 比如heard等
    return config;
});
//响应拦截器
request.interceptors.response.use((response) => {
    // 成功的回调
    return response.data;
}, (error) => {
    //处理网络错误
    let msg = '';
    let status = error.response.status;
    switch (status) {
        case 401:
            msg = "token过期";
            break;
        case 403:
            msg = '无权访问';
            break;
        case 404:
            msg = "请求地址错误";
            break;
        case 500:
            msg = "服务器出现问题";
            break;
        default:
            msg = "无网络";

    }
    ElMessage({
        type: 'error',
        message: msg
    })
    return Promise.reject(error);
});
export default request;
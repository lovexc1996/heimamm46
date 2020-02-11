// 导入axios
import axios from 'axios';

// 为了更加方便的设置每个模块的请求,一般会通过create创建新的axios对象
// 创建的对象和axios功能一样,但是可以单独的为他设置自己的属性
// login登录
// request请求
export const loginRequest = axios.create({
    // 基地址
    baseURL:process.env.VUE_APP_URL,
    // 是否跨域
    withCredentials:true
})

// 用户的登录 接口
export function login(data) {
    return loginRequest({
        url:"/login",
        method:"post",
        data
    })
}
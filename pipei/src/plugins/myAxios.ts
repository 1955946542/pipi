import axios from "axios";

const myAxios = axios.create({
    baseURL: 'http://localhost:8080/api', //向哪个基本地址发送请求
    timeout: 5000,
});

myAxios.defaults.withCredentials = true; // 为 true 表示向后台发送请求时携带上凭证（cookie）

// 配置拦截器（请求开始前，运行中，结束后自定义一些操作）
// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
    console.log("准备发送请求",config);
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
    console.log("收到响应",response);
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么

    // 如果是返回 response ，返回的是 AJAX 层级的 data，这个 data 里面再套了一层 data（这才是用户层的data）
    // 因此直接添加拦截器返回应用层的 data ，后面就不用套中取套
    return response.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default myAxios;
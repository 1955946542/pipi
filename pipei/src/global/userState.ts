import {ref} from 'vue';
import {UserType} from "../models/user";

// 创建一个响应式的用户状态
const userState: UserType= ref(null);

// 添加设置用户状态的方法
export function setUserState(user: any) {
    userState.value = user;
}

// 导出响应式的用户状态
export default userState;
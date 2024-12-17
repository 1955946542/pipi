import myAxios from "../plugins/myAxios.ts";
import {showFailToast} from "vant";

export async function getCurrentUser() {
    const res = await myAxios.get('/api/user/current');
    if (res.code === 0) {
        return res.data;
    } else {
        showFailToast("获取用户信息失败");
        return null;
    }
}
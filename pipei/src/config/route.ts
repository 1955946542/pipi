import Index from "../pages/index.vue";
import Team from "../pages/team.vue";
import Setting from "../pages/setting.vue";
import Search from "../pages/search.vue";

// 定义路由
const routes = [
    { path: '/', component: Index },
    { path: '/team', component: Team},
    { path: '/setting', component: Setting },
    { path: '/search', component: Search }
]

// 不导出，其他文件用不了的
export default routes;

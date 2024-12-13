import Index from "../pages/index.vue";
import Team from "../pages/team.vue";
import Setting from "../pages/setting.vue";
import Search from "../pages/search.vue";
import SettingEdit from "../pages/settingEdit.vue";
import SearchResult from "../pages/searchResult.vue";

// 定义路由
const routes = [
    { path: '/', component: Index },
    { path: '/team', component: Team},
    { path: '/setting', component: Setting },
    { path: '/search', component: Search },
    { path: '/search/result', component: SearchResult },
    { path: '/setting/edit', component: SettingEdit },
]

// 不导出，其他文件用不了的
export default routes;

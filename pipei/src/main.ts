import {createApp} from 'vue'
// import './style.css'
import App from './App.vue'
import {NavBar, Button, Tabbar, TabbarItem, Card, Empty} from 'vant';
import { Divider } from 'vant';
import { TreeSelect } from 'vant';
import * as VueRouter from 'vue-router'
import routes from './config/route.ts'
import { Cell, CellGroup } from 'vant';
import { Field } from 'vant';


const app = createApp(App)
app.use(Button);
app.use(NavBar);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Divider);
app.use(TreeSelect);
app.use(Cell);
app.use(CellGroup);
app.use(Field);
app.use(Card);
app.use(Empty);

// 创建 router 实例(通过这里可以传入 routes 配置)
const router = new VueRouter.createRouter({
    // 内部提供 history 模式的实现，这里使用 hash 模式
    history: VueRouter.createWebHashHistory(),
    routes // (缩写) 相当于 routes: routes
})
app.use(router);

// 先 use 再挂载
app.mount('#app');


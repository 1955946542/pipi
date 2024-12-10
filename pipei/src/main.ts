import {createApp} from 'vue'
// import './style.css'
import App from './App.vue'
import {NavBar, Button, Tabbar, TabbarItem} from 'vant';

const app = createApp(App)
app.use(Button);
app.use(NavBar);
app.use(Tabbar);
app.use(TabbarItem);

// 先 use 再挂载
app.mount('#app');

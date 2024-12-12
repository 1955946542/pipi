<script setup lang="ts">
import { ref } from 'vue';
import {showToast} from "vant";
import index from "../pages/index.vue";
import * as VueRouter from "vue-router";

const router = VueRouter.useRouter();
const onClickLeft = () => router.back(); //放回上一个界面
const onClickRight = () => {router.push({path:'/search'})}

const active = ref("index");
const onChange = (index) => showToast(`标签 ${index}`);
</script>

<template>

  <van-nav-bar
      title="标题"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>

  <div id="content">
    <!--根据不同页面显示不同内容-->
    <router-view></router-view>
  </div>

  <van-tabbar v-model="active" active-color="#ff9300" @change="onChange">
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="friends-o" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/setting" icon="setting-o" name="setting">设置</van-tabbar-item>
  </van-tabbar>

</template>

<style scoped>

</style>
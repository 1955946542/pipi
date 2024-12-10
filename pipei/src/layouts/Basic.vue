<script setup lang="ts">
import { ref } from 'vue';
import {showToast} from "vant";
import index from "../pages/index.vue";
import team from "../pages/team.vue";
import setting from "../pages/setting.vue";

const onClickLeft = () => alert('左');
const onClickRight = () => alert('右');

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
    <template v-if="active==='index'">
      <index/>
    </template>

    <template v-if="active==='team'">
      <team/>
    </template>

    <template v-if="active==='setting'">
      <setting/>
    </template>
  </div>

  <van-tabbar v-model="active" active-color="#ff9300" @change="onChange">
    <van-tabbar-item icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="team">队伍</van-tabbar-item>
    <van-tabbar-item icon="setting-o" name="setting">设置</van-tabbar-item>
  </van-tabbar>

</template>

<style scoped>

</style>
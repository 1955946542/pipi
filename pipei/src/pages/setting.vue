<script setup lang="ts">

import { useRouter } from 'vue-router';
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {showFailToast} from "vant";
import userState from "../global/userState.ts";

// 使用原生 Date 对象格式化日期
const formatDate = (date: string) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

const router = useRouter();

const user = ref(userState.value);
onMounted(async ()=>{
  const res = await myAxios.get('/user/current');
  if (res.code === 0) {
    user.value = res.data;
  }else {
    showFailToast("获取用户信息失败");
  }
})

const toEdit = (key: string, value: string) => {
  router.push({
    path: '/setting/edit',
    query: {
      key,
      value
    }
  })
}
</script>

<template>
  <!--用户存在才加载-->
  <template v-if="user">
    <van-cell title="昵称" is-link @click="toEdit('username', user.username)" :value="user.username"/>
    <van-cell title="账号" :value="user.userAccount"/>
    <van-cell title="头像" is-link @click="toEdit('avatarUrl', user.avatarUrl)">
      <img alt style="height: 48px" :src="user.avatarUrl">
    </van-cell>
    <van-cell title="性别" is-link @click="toEdit('gender', String(user.gender))" :value="user.gender"/>
    <van-cell title="电话" is-link @click="toEdit('phone', user.phone)" :value="user.phone"/>
    <van-cell title="邮箱" is-link @click="toEdit('email', user.email)" :value="user.email"/>
    <van-cell title="标签" is-link @click="toEdit('tags', user.tags)" :value="user.tags"/>
    <van-cell title="星球编号" :value="user.planetCode"/>
    <van-cell title="创建时间" :value="formatDate(user.createTime)"/>
  </template>
</template>

<style scoped>

</style>
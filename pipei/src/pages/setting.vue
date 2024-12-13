<script setup lang="ts">
const user = {
  id: 1,
  username: "donkin",
  userAccount: "1995",
  avatarUrl: "https://tsundora.com/image/2018/04/karakai_jouzu_no_takagi-san_69.jpg",
  gender: "男",
  phone: "1778",
  email: "1995",
  planetCode: "null",
  createTime: new Date(),
}

import { useRouter } from 'vue-router';
const router = useRouter();

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
  <van-cell title="昵称" is-link @click="toEdit('昵称', user.username)" :value="user.username"/>
  <van-cell title="账号" :value="user.userAccount"/>
  <van-cell title="头像" is-link @click="toEdit('头像', user.avatarUrl)">
    <img alt style="height: 48px" :src="user.avatarUrl">
  </van-cell>
  <van-cell title="性别" is-link @click="toEdit('性别', String(user.gender))" :value="user.gender"/>
  <van-cell title="电话" is-link @click="toEdit('电话', user.phone)" :value="user.phone"/>
  <van-cell title="邮箱" is-link @click="toEdit('邮箱', user.email)" :value="user.email"/>
  <van-cell title="星球编号" :value="user.planetCode"/>
  <van-cell title="创建时间" :value="user.createTime.toISOString()"/>
</template>

<style scoped>

</style>
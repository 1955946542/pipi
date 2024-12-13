<script setup lang="ts">
import {ref} from "vue";
import {useRoute} from "vue-router";

// 获取路由链接传来的参数
const route = useRoute();
const {tags} = route.query;

const mockUser = {
  id: 1,
  username: "donkin",
  userAccount: "1995",
  avatarUrl: "https://tsundora.com/image/2018/04/karakai_jouzu_no_takagi-san_69.jpg",
  gender: "男",
  phone: "1778",
  email: "1995",
  planetCode: "null",
  tags: ['java',"python"],
  createTime: new Date(),
}
const userList = ref([mockUser]);
</script>

<template>
  <van-card
      v-for="user in userList"
      :desc="user.userAccount"
      :title="user.username"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="primary" v-for="tag in user.tags" style="margin-right: 8px;margin-top: 8px">
        {{tag}}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">查看详情</van-button>
    </template>
  </van-card>

</template>

<style scoped>

</style>
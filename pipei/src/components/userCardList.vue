<script setup lang="ts">
import {UserType} from "../models/user";

interface UserCardListProps {
  userList:UserType[];
}

// props 可以得到父组件传递过来的信息(这个组件等会是放在其他组件中，抽出来的部分)
const props = withDefaults(defineProps<UserCardListProps>(),{
  // 如果父组件传递为空，使用这个默认值
  userList:[],
});

</script>

<template>
  <van-card
      v-for="user in props.userList"
      :desc="user.userAccount"
      :title="user.username"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="primary" v-for="tag in user.tags" style="margin-right: 8px;margin-top: 8px">
        {{ tag }}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">查看详情</van-button>
    </template>
  </van-card>

  <van-empty v-if="userList.length === 0"
             image="https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png"
             image-size="80"
             description="数据为空"
  />
</template>

<style scoped>

</style>
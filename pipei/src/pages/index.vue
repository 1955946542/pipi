<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import myAxios from "../plugins/myAxios.ts";
import UserCardList from "../components/userCardList.vue";

// 获取路由链接传来的参数
const route = useRoute();

const userList = ref([]);

onMounted(async () => {
  const userListData = await myAxios.get('/user/recommend', {
    params:{
      pageSize:8,
      pageNum:1,
    },
  })
      .then(response => {
        console.log('/user/recommend 完整的响应数据:', response);
        // 检查响应结构
        if (response.data && response.code===0) {
          // 这里 records 是因为后端使用了 Mybatis-plus 的分页插件
          return response?.data?.records;
        } else {
          console.error('/user/recommend 接口返回错误:', response.data);
          return [];
        }
      })
      .catch(error => {
        console.error('/user/recommend 请求失败:', error);
        return [];
      });

  if (userListData && userListData.length > 0) {
    userList.value = userListData.map(user => ({
      ...user,
      tags: user.tags ? JSON.parse(user.tags) : []
    }));
  }

});

</script>

<template>
  <user-card-list :user-list="userList"/>
</template>

<style scoped>

</style>
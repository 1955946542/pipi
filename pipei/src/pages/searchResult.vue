<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import myAxios from "../plugins/myAxios.ts";
import * as qs from 'qs';

// 获取路由链接传来的参数
const route = useRoute();

// 通过 axios 发送 get 请求
// url 是填写后端映射地址

const {tags} = route.query;

const userList = ref([]);

onMounted(async () => {
  // 检查传入的参数
  console.log('查询参数 tags:', tags);
  console.log('查询参数类型:', typeof tags);
  
  // 构造请求参数
  const params = {
    tagNameList: Array.isArray(tags) ? tags : [tags]  // 确保是数组
  };
  
  console.log('发送的请求参数:', params);

  const userListData = await myAxios.get('/user/search/tags', {
    params,
    paramsSerializer: params => {
      const result = qs.stringify(params, { indices: false });
      console.log('序列化后的参数:', result);  // 查看实际发送的参数
      return result;
    }
  })
  .then(response => {
    console.log('完整的响应数据:', response);
    // 检查响应结构
    if (response.data && response.data.code === 0) {  // 假设 0 是成功码
      return response.data.data;
    } else {
      console.error('接口返回错误:', response.data);
      return [];
    }
  })
  .catch(error => {
    console.error('请求失败:', error);
    return [];
  });

  console.log('获取到的用户数据:', userListData);
  
  if (userListData && userListData.length > 0) {
    userList.value = userListData.map(user => ({
      ...user,
      tags: user.tags ? JSON.parse(user.tags) : []
    }));
  }
});

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
      description="搜索结果为空"
  />


</template>

<style scoped>

</style>
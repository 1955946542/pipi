<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import myAxios from "../plugins/myAxios.ts";
import { showFailToast, showSuccessToast } from "vant";
import userState, { setUserState } from "../global/userState.ts";

const route = useRoute();
const router = useRouter();
const editKey = ref('');
const value = ref('');

// 在组件挂载时获取路由参数
onMounted(() => {
  const { key, value: initialValue } = route.query;
  console.log('路由参数:', route.query); // 调试日志

  if (!key || typeof key !== 'string') {
    showFailToast("缺少更新字段");
    router.back();
    return;
  }

  editKey.value = key;
  value.value = initialValue as string || '';

  console.log('editKey:', editKey.value); // 调试日志
  console.log('value:', value.value); // 调试日志
});

const onSubmit = async () => {
  if (!userState) {
    showFailToast("用户未登录");
    return;
  }

  if (!editKey.value || value.value === undefined || value.value === '') {
    showFailToast("更新信息不完整");
    return;
  }

  // 创建更新对象
  const updateData = {
    id: userState.value.id,
    username: userState.value.username,
    userAccount: userState.value.userAccount,
    avatarUrl: userState.value.avatarUrl,
    gender: userState.value.gender || '',
    phone: userState.value.phone || '',
    email: userState.value.email || '',
    userStatus: userState.value.userStatus,
    userRole: userState.value.userRole,
    planetCode: userState.value.planetCode || '',
    // 确保 tags 是字符串
    tags: typeof userState.value.tags === 'string'
        ? userState.value.tags
        : JSON.stringify(userState.value.tags || [])
  };

  // 更新指定字段，特殊处理 tags 字段
  if (editKey.value === 'tags') {
    // 如果更新的是 tags 字段，确保发送字符串
    updateData[editKey.value] = Array.isArray(value.value)
        ? JSON.stringify(value.value)
        : value.value;
  } else {
    updateData[editKey.value] = value.value;
  }

  const res = await myAxios.post('/user/update', updateData);

  if (res.code === 0) {
    // 更新成功后，如果是 tags 字段，需要解析回数组
    if (editKey.value === 'tags') {
      const parsedTags = JSON.parse(updateData.tags);
      updateData.tags = parsedTags;
    }
    setUserState(updateData);
    showSuccessToast('修改成功');
    router.back();
  } else {
    console.error('更新失败:', res);
    showFailToast(res?.message || "修改错误");
  }
}
</script>

<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="value"
          :label="editKey"
          :placeholder="`请输入${editKey}`"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        确认修改
      </van-button>
    </div>
  </van-form>
</template>
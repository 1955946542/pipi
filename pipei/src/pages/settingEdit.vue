<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const value = ref('');
const editKey = ref('');

onMounted(() => {
  const { key, value: queryValue } = route.query;
  if (key) {
    editKey.value = key as string;
  }
  if (queryValue) {
    value.value = queryValue as string;
  }
})

const onSubmit = () => {
  console.log('要修改的字段：', editKey.value);
  console.log('修改后的值：', value.value);
  // TODO: 这里之后添加调用后端接口的逻辑
  router.back();
}
</script>

<template>
  <van-cell-group inset>
    <van-field v-model="value" :label="editKey" :placeholder="`请输入${editKey}`"/>
    <van-button type="primary" loading-type="spinner" @click="onSubmit" block style="margin-top: 16px;">确认修改</van-button>
  </van-cell-group>
</template>

<style scoped>

</style>
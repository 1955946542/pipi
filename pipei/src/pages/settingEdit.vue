<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import myAxios from "../plugins/myAxios.ts";
import {showFailToast, showSuccessToast} from "vant";

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

const onSubmit = async () => {
  console.log('要修改的字段：', editKey.value);
  console.log('修改后的值：', value.value);
  const res = await myAxios.post('/user/update',{
    'id': 1, //todo 这里还没实现获取当前用户 id，因此使用假的
    [editKey.value]:value.value, // [动态赋值] 不写死，因为每个修改可能不一样
  })
  if (res.success) {
    showSuccessToast('修改成功');
    router.back(); //返回前页
  }else{
    showFailToast("修改错误");
  }
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
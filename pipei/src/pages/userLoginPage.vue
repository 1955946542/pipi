<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";
import myAxios from "../plugins/myAxios.ts";
import {showFailToast, showSuccessToast} from "vant";
import userState, { setUserState } from "../global/userState.ts";

const router = useRouter();

const userAccount = ref('');
const userPassword = ref('');
const onSubmit = async () => {

  console.log({
    userAccount: userAccount.value,
    userPassword: userPassword.value,
  })

  const res = await myAxios.post('/user/login',{
    userAccount:userAccount.value,
    userPassword:userPassword.value,
  })
  console.log(res);
  if(res.code === 0 && res.data) {
    // 使用 setUserState 方法设置用户状态
    setUserState(res.data);
    console.log('保存后的用户状态:', userState.value); // 验证数据是否正确保存
    showSuccessToast("登录成功");
    router.push('/');
  }else{
    showFailToast(res.message || "登录失败");
  }
};

</script>

<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="userAccount"
          label="账号"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="userPassword"
          type="password"
          name="userPassword"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<style scoped>

</style>
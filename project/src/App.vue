<template>
  <div>
    <!-- 矢量图用法 -->
    <SvgIcon name="phone" color="red" width="100px" height="100px"></SvgIcon>

  </div>
</template>
<script setup lang="ts">
import {reqLogin} from './api/user'
import {onMounted} from 'vue'
onMounted(() => {
  // request({
  //   url:"/user/login",
  //   method:'post',
  //   data: {
  //     username:'admin'
  //   }
  // }).then(res=>{
  //   console.log(res);
    
  // })

  // 统一管理api的写法
  reqLogin({username:'admin',password:"111"})
});
</script>
<style scoped lang="scss">
</style>

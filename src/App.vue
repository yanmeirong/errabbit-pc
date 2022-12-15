<template>
  <div>
    <!-- vue2组件需要一个根元素，vue3可以是代码片段 -->
    <p>{{$store.state.username}}</p>
  </div>
</template>

<script> 
import {useStore} from 'vuex'
export default {
name:'App',
setup(){
  //使用vuex仓库
  const store=useStore()
  //使用跟模块state的数据
  console.log(store.state.username)
}
}
</script>

<style>

</style>

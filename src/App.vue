<template>
  <div id="app">
    <!-- exclude定义不需要缓存的组件名 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>

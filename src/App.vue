<template>
  <div id="app">
    <!-- exclude定义不需要缓存的组件名 如exclude="Detail"-->
    <keep-alive>
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

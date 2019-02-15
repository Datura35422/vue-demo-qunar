<template>
  <div class="wrapper">
    <!-- 添加v-if处理当header传入空数组时不渲染数据，避免提前渲染空数组，swiper停留在最后一页 -->
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 1000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff // 样式穿透，表示子组件中只要出现swiper-pagination-bullet-active都要变成red,不受scoped限制
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25% //防止抖动，高度会相对于宽度撑开31.25%，实现宽高比例一直保持宽高比
  background #eee
  .swiper-img
    width 100%
</style>

<template>
  <div>
    <div class="item border-bottom" v-for="(item, index) of list" :key="index">
      <div class="item-title">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div class="item-children" v-if="item.children">
        <!-- 递归组件，自身调用自身 -->
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.item-title
  padding 0 .2rem
  line-height .8rem
  font-size .32rem
  .item-title-icon
    display inline-block
    position relative
    left .06rem
    top .06rem
    margin-right: .1rem
    width .36rem
    height .36rem
    background: url("http://s.qunarzz.com/piao/image/touch/sight/detail.png") 0 -.45rem no-repeat
    background-size: .4rem 3rem
.item-children
  padding 0 .2rem
</style>

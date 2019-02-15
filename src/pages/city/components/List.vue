<template>
  <div class="list" ref="wrapper">
    <!-- better-scroll包裹一个div -->
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="btn-list">
          <div class="btn-wrapper">
            <div class="btn">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="btn-list">
          <div class="btn-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="btn">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(value, key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="item of value" :key="item.id">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #ccc
.list
  position absolute
  top 1.58rem
  bottom 0
  left 0
  right 0
  overflow hidden
  .title
    padding .2rem
    line-height .44rem
    font-size .26rem
    color #666
    background #eee
  .btn-list
    padding .1rem .6rem .1rem .1rem
    overflow hidden
    .btn-wrapper
      float left
      width 33.33%
      .btn
        margin .1rem
        padding .1rem 0
        text-align center
        border .02rem solid #ccc
        border-radius .06rem
  .item-list
    .item
      padding-left .2rem
      line-height .76rem
</style>

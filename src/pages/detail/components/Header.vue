<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop // 滚动时文档top高度
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () { // 页面隐藏时，解绑全局事件
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header-abs
  position absolute
  top .2rem
  left .2rem
  width .8rem
  height .8rem
  line-height .8rem
  text-align center
  border-radius .4rem
  background rgba(0, 0, 0, .8)
  .header-abs-back
    font-size .4rem
    color #fff
.header-fixed
  position fixed
  top 0
  left 0
  right 0
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  text-align center
  font-size .32rem
  color #ffffff
  background $bgColor
  z-index 2
  .header-fixed-back
    position absolute
    top 0
    left 0
    width .64rem
    text-align center
    font-size .4rem
    color #fff
</style>

<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']) // ...为展开运算符，mapState将vuex中的数据映射到计算属性中，获取mapState中的city数据数据映射到city的计算属性中
  }
}
</script>

<style lang="stylus" scoped>
// 1rem = html font-size = 50px
// ~@在路径中表示src目录
@import '~styles/varibles.styl'
.header
  display flex
  line-height $headerHeight
  background $bgColor
  color #fff
  .header-left
    width .64rem
    float left
    .back-icon
      text-align center
      font-size .4rem
  .header-input
    flex 1
    height .64rem
    line-height .64rem
    margin-top .12rem
    margin-left .2rem
    padding-left .2rem
    color #ccc
    background #fff
    border-radius .1rem
  .header-right
    min-width 1.04rem
    padding 0 .1rem
    float right
    text-align center
    color #fff
    .arrow-icon
      margin-left -.04rem
      font-size .24rem
</style>

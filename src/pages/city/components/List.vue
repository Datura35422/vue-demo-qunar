<template>
  <div class="list" ref="wrapper">
    <!-- better-scroll包裹一个div -->
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="btn-list">
          <div class="btn-wrapper">
            <div class="btn">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="btn-list">
          <div class="btn-wrapper" v-for="item of hotCities" :key="item.id" @click="handleCityClick(item.name)">
            <div class="btn">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(value, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="item of value" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    }) // ...为展开运算符，mapState将vuex中的数据映射到计算属性中，获取mapState中的city功能数据映射到currentCity的计算属性中
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  // 监听器
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city) // 向vuex派发changeCity方法, 方法1
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/') // 点击跳转到首页
    },
    ...mapMutations(['changeCity'])
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

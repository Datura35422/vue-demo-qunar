<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city) // 向vuex派发changeCity方法, 方法1
      this.$store.commit('changeCity', city)
      this.$router.push('/') // 点击跳转到首页
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.search
  padding 0 .1rem
  height .72rem
  background $bgColor
  .search-input
    box-sizing border-box
    padding 0 .1rem
    width 100%
    height .62rem
    line-height .62rem
    color #666
    text-align center
    border-radius .06rem
.search-content
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  z-index 1
  background #eee
  .search-item
    line-height .62rem
    padding-left .2rem
    color #666
    background #fff
</style>

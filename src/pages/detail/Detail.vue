<template>
  <div>
    <detail-banner :title="sightName" :bannerImg="bannerImg" :gallery="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="container">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      lastId: null,
      bannerImg: '',
      categoryList: [],
      gallaryImgs: [],
      sightName: ''
    }
  },
  methods: {
    getDetailInfo () {
      // 获取url上的参数
      // axios.get('/api/detail.json?id=' + this.$route.params.id).then(this.getDetailInfoSucc)
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.categoryList = data.categoryList
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
.container
  height 50rem
</style>

<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="container"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json').then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      console.log(res)
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

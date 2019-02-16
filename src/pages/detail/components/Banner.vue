<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" />
      <div class="banner-info">
        <div class="banner-title">
          故宫(AAAAA景区)
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe64b;</span>
          8
        </div>
      </div>
    </div>
    <common-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  data () {
    return {
      showGallery: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
        'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  height 0
  padding-bottom 55%
  overflow hidden
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    bottom 0
    right 0
    left 0
    line-height .6rem
    color #fff
    background linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
    .banner-title
      flex 1
      padding 0 .2rem
      font-size .32rem
    .banner-number
      margin-top .14rem
      padding 0 .4rem
      height .32rem
      line-height .32rem
      font-size .24rem
      border-radius .2rem
      background rgba(0, 0, 0, .8)
      .banner-icon
        font-size .24rem
</style>

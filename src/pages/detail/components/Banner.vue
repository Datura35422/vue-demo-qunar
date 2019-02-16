<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">
          {{title}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe64b;</span>
          {{imgLength}}
        </div>
      </div>
    </div>
    <common-gallery :imgs="gallery" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  props: {
    bannerImg: String,
    gallery: Array,
    title: String
  },
  components: {
    CommonGallery
  },
  data () {
    return {
      showGallery: false
    }
  },
  computed: {
    imgLength () {
      return this.gallery.length
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

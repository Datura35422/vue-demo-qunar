// 异步处理数据
export default {
  changeCity (ctx, city) { // ctx为上下文,即vuex这个对象
    ctx.commit('changeCity', city)
  }
}

<template>
  <div class="shouquan">
    <div class="sqborder">
      <img src='/static/images/toTop.png' v-if="floorstatus" class='sqgoTop' @click="sqgoTop">
      <img src="/static/images/share.png" alt="" class="sqshare" @click="sqshare">
      <button open-type="share" class="btn_share"></button>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        floorstatus: false
      }

    },
    onPageScroll(e) {
      // console.log(e)
      var that=this;
      if (e.scrollTop > 100) {
        that.floorstatus = true
      }else{
        that.floorstatus = false
      }

    },
    methods: {
      sqgoTop() { // 一键回到顶部
        if (wx.pageScrollTo) {
          wx.pageScrollTo({
            scrollTop: 0
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
          })
        }
      },

    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .sqgoTop
    opacity 0.7
    height 80rpx
    width 80rpx
    position fixed
    top 500rpx
    right 30rpx
    z-index 999
    background-color: #fff;
    border-radius 43rpx
  .sqshare
    opacity 0.7
    height 80rpx
    width 80rpx
    position fixed
    top 631rpx
    right 29rpx
    z-index 999
    background-color #fff
    border-radius 43rpx
  .btn_share
    height 80rpx
    width 80rpx
    position fixed
    top 631rpx
    right 29rpx
    z-index 999
    background-color #fff
    border-radius 43rpx
    opacity 0
</style>

<template>
  <div class="tell">
    <div class="way1">
      <span class="call" >
        电话通知
      </span>
    </div>
    <div class="way2">
      <span class="call" >
        短信通知
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    // guesCall: function () {
    //   wx.showModal({
    //     title:"是否通知该应聘者？"
    //     succeed (res) {
    //       if(res.confirm){
    //         console.log('电话通知应聘者')
    //       }else if(res.cancel){
    //           wx.navigateTo({
    //             url:"/page/resume/main"
    //           });
    //           console.log('faile')
    //       }
    //     }
    //   })
    // }
  }

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .tell
    width 320rpx
    box-sizing border-box
    display flex
    flex-direction column
    .way1
      background-color #1296DB
      padding 0 0
      margin 0
      border 1rpx solid #eee
      width 160rpx
      box-sizing border-box
    .way2
      background-color #1296DB
      padding 0 0
      margin 0
      border 1rpx solid #eee
      width 160rpx
      box-sizing border-box
      .call
        font-size medium
        color #FFFFFF
</style>

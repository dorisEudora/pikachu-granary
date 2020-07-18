<template>
  <div class="shouquan">
<!--    <div class="header">温馨提示</div>-->
<!--    <div class="user">-->
<!--      <div class="tiaokuan">-->
<!--        <div>同意条款同意条款同意条款同意条款同意条款同意条款同意条款同意条款同意条款同意条款同意条款同意条款同意条款同意条款同意条款同意条款同意条款</div>-->
<!--      </div>-->
<!--      <van-checkbox :value="false" class="check" checked-color="#07c160" @change="onChange">复选框</van-checkbox>-->
<!--        <button open-type="getUserInfo" lang="zh_CN" class="btn_all" @getuserinfo="login">授权登录</button>-->
<!--    </div>-->
    <div class="modal-mask"></div>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="header">温馨提示</div>
        <div class="content-text">
          同意条款同意条款同意条款同意条款款同意条款同意条款款同意条款同意条款款同意条款同意条款款同意条款同意条款款同意条款同意条款款同意条款同意条款款同意条款同意条款款同意条款同意条款款同意条款同意条款款同意条款同意条款
          同意条款同意条款同意条款同意条款同意条款同意条款同意条款同意条款
        </div>
      </div>
      <div class="check">
        <van-checkbox label-class="label" 	icon-size="35rpx" :value="agree" @change="onChangeagree" checked-color="#07c160">点击按钮即代表您同意此授权</van-checkbox>
      </div>
      <div class="modal-footer">
        <button  class="btn" @click="getuserinfoCancel">取消</button>
        <button open-type="getUserInfo" lang="zh_CN" class="btn" @getuserinfo="getuserinfoConfirm"  :disabled="dis" >授权登录</button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        agree: false,
        dis: true
      }

    },
    methods: {
      onChangeagree(event){
        console.log(event.mp.detail)
        this.agree = event.mp.detail
        if(this.agree==false){
          this.dis = true
        }else {
          this.dis = false
        }

      },
      getuserinfoCancel(){
        wx.switchTab({
          url: "/pages/index/main",
        })
      },
      getuserinfoConfirm(){
        wx.getUserInfo({
          success: (res)=>{
            console.log(res.userInfo)
            wx.setStorageSync("userinfo",res.userInfo)
            this.$emit("userinfoChange",false)
          },
          fail: ()=>{
            wx.switchTab({
              url: "/pages/index/main",
            })
          }
        })

      }

    }

  }
</script>
<style>
  /*#disable{*/
  /*  disabled*/
  /*}*/
  .check{
    height: 78rpx;
    font-size: 35rpx;
  }
  .modal-mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.5;
    overflow: hidden;
    z-index: 9000;
    color: #fff;
  }
  .modal-dialog {
    box-sizing: border-box;
    width: 560rpx;
    overflow: hidden;
    position: fixed;
    top: 30%;
    left: 0;
    z-index: 9999;
    background: #fff;
    margin: -150rpx 95rpx;
    border-radius: 16rpx;
  }
  .modal-content {
    box-sizing: border-box;
    display: flex;
    padding: 0rpx 10rpx 50rpx 10rpx;
    font-size: 32rpx;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .content-text {
    height:330rpx;
    font-size: 14px;
    letter-spacing: 3px;
    color: #1296DB;
    overflow-x: scroll;
  }
  .modal-footer {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    border-top: 1px solid #e5e5e5;
    font-size: 16px;
    font-weight:bold;
    height: 120rpx;
    line-height: 45px;
    text-align: center;
    background:#feb600;
  }
  button {
    width: 50%;
    background:#feb600;
    color:#FFFFFF;
    font-weight:bold;
  }
  .header {
    width: 280px;
    height:65px;
    font-size: 44px;
    text-align: center;
  }

</style>
<!--<style lang="stylus" rel="stylesheet/stylus">-->
<!--  .shouquan-->
<!--    width 525rpx-->
<!--    height 783rpx-->
<!--    position fixed-->
<!--    top 100rpx-->
<!--    left 100rpx-->
<!--    background #000-->
<!--    overflow hidden-->
<!--    z-index 9000-->
<!--    color #fff-->
<!--    .header-->
<!--      /*background-color red*/-->
<!--      height 100rpx-->
<!--      font-size 68rpx-->
<!--      line-height 100rpx-->
<!--      text-align center-->
<!--      background #fff-->
<!--      color black-->
<!--      opacity 1.0-->
<!--    .user-->
<!--      /*background-color blue*/-->
<!--      .tiaokuan-->
<!--        display block-->
<!--        /*background-color yellow*/-->
<!--        height 515rpx-->
<!--        color #333333-->
<!--      .check-->
<!--        display block-->
<!--        height 50rpx-->
<!--        /*background-color black*/-->
<!--        font-size 27rpx-->
<!--      .btn_all-->
<!--        display block-->
<!--        /*background-color purple*/-->
<!--        height 200rpx-->

<!--</style>-->

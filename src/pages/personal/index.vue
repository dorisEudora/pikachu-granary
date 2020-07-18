<template>
  <div class="personal">
    <div v-if="userinfoShow">
    <shouQuan @userinfoChange="getchilduserinfo(arguments)"></shouQuan>
    </div>
<!--    <button open-type="getUserInfo" lang="zh_CN" class="btn" @getuserinfo="getuserinfoConfirm"   >授权登录</button>-->
    <div class="top">
      <div class="userinfo" >
        <!-- 取userinfo变量中的avatarUrl字段，也就是微信头像的链接 -->
        <img :src="userinfo.avatarUrl" alt="">
      </div>
      <div class="name">
        <!-- 取userinfo变量中的nickName字段，也就是微信昵称 -->
        <label>{{userinfo.nickName}}</label>
        <p class="notice">{{quote}}</p>
      </div>
    </div>
    <van-cell-group custom-class="personInfo">
      <van-cell title="我的认证" is-link value="（未认证）" @click="toIdentify" custom-class="info"></van-cell>
      <van-cell title="在招职位" is-link @click="toJobs" custom-class="info"/>
      <van-cell title="意见与反馈" is-link @click="toResume" custom-class="info"/>
    </van-cell-group>
  </div>
</template>

<script>
import shouQuan from '../../components/shouQuan/shouQuan.vue'
export default {
  components:{
    shouQuan
  },
  data () {
    return {
        userinfo:{
          avatarUrl:""
        },
        userinfoShow:false,
        quote:"",
      };
  },
  onShow(){
    this.rankArray();
      const userinfo = wx.getStorageSync("userinfo")
      if(userinfo){
        console.log(userinfo)
        this.userinfo = userinfo
        this.userinfoShow = false
        this.rankArray();
        console.log("userinfo")
      }else{
        this.userinfoShow = true
        console.log('userinfoShow')
      }
    },
  methods: {
    getuserinfoConfirm(){
      var that = this;
      wx.getUserInfo({
        success: (res)=>{
          console.log(res.userInfo)
          wx.setStorageSync("userinfo",res.userInfo)
          that.userinfo = res.userInfo
          this.$emit("userinfoChange",false)
        },
        fail: ()=>{
          console.log(test)
          wx.switchTab({
            url: "/pages/index/main",
          })
        }
      })

    },
    rankArray () {
      //Math.random()会生成0-1之间的小数，比如0.48204242025855937
      var a = Math.random() + ""
      //a.charAt(5)取a这个字符串的第6位数，能保证rand1为0-9之间的随机数
      var rand1 = a.charAt(5)
      //创建一个数组对象
      var quotes = new Array
      //将10个励志语句放到数组中
      quotes[1] = '不奋发，则心日颓靡；不检束，则心日恣肆'
      quotes[2] = '自制是一种秩序，一种对于快乐与欲望的控制'
      quotes[3] = '哪怕一点小小的克制，也会使人变得强而有力'
      quotes[4] = '做一个自律的人，像优秀的人学习，然后做好自己'
      quotes[5] = '真正的自由是在所有时候都能控制自己'
      quotes[6] = '每天爱自己多一点！！！'
      quotes[7] = '如果连自己都不能控制，有什么资格去谈自己想要的'
      quotes[8] = '登峰造极的成就源于自律'
      quotes[9] = '自我控制是最强者的本能'
      quotes[0] = '立志言为本，修身行乃先'
      //根据随机数rand1，在数组中找出随机语句，并赋值到quote上面
      this.quote = quotes[rand1]
    },
    getchilduserinfo(argu){
      this.userinfoShow = argu[0];
      this.userinfo = wx.getStorageSync("userinfo")
    },

    toIdentify(){
      wx.navigateTo({
        url:"/pages/identification/main"
      })
    },
    toJobs(){
        wx.navigateTo({
            url:"/pages/jobs/main"
        })
    },
    toResume(){
      wx.navigateTo({
        url: "/pages/feedback/main"
      })
    }

  }
  }



</script>

<style lang="stylus" rel="stylesheet/stylus">
.personal
  .top
    height 80px
    width 100%
    background #1296DB
    padding-top 30px
    display block
    .userinfo
      padding-bottom 5px
      float left
      img
        width 120rpx
        height 120rpx
        margin 10rpx
        border-radius 90rpx
        border 1px #D0D0D0 solid
    .name
      padding-top 30px
      padding-left 5px
      color #FFFFFF
      font-size 16px
      float left
      .notice
        color #D8D8D8
        font-size 12px
  .personInfo
    .info
      height 130rpx
      padding-top 32rpx




</style>

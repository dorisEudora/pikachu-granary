<template>
  <div id="jobs">
    <div class="jobslist">
      <div class="jobsInfo">
        <div class="jobInfo">
          <span>招收快递员</span>
          <div class="workTime">5—10/小时</div><!--从putjobs中传递过来-->
        </div>
        <P>已经投递：<span>5</span></P>
      </div>
      <div class="putTime">
        <van-cell icon="/static/images/job/time.png" title="2019年1月一日" @click="workers" custom-class="time" is-link />
      </div>
      <div class="del">
        <van-button
          round type="info"
          @onclick="delJob"
          size="normal"
          color="linear-gradient(to right, #4bb0ff, #1296DB)"
          loading-class="a">
          删除
        </van-button>
      </div>
    </div>
    <div class="jobslist">
      <div class="jobsInfo">
        <div class="jobInfo">
          <span>招收快递员</span>
          <div class="workTime">5—10/小时</div><!--从putjobs中传递过来-->
        </div>
        <P>已经投递：<span>5</span></P>
      </div>
      <div class="putTime">
        <van-cell icon="/static/images/job/time.png" title="2019年1月一日" @click="workers" custom-class="time" is-link />
      </div>
      <div class="del">
        <van-button
          round type="info"
          @onclick="delJob"
          size="normal"
          color="linear-gradient(to right, #4bb0ff, #1296DB)"
          loading-class="a">
          删除
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import fuChuang from '../../components/fuChuang/fuChuang'
  import fuChuangZi from '../../components/fuChuangZi/fuChuangZi'
export default {
  data() {
    return {};
  },
  components:{
    fuChuang,
    fuChuangZi
  },
  onload(){
    wx.request({
      url:'http://mock.studyinghome.com/mock/5e606e87597ac8103c472ce2/heyjob/shopper/put/jobs',
      data:{

      },
      header:{'content-type':'application/json'},
      methods: 'GET',
      dataType:'json',
      responseType:'text',
      success:(result)=>{
        console.log(result.data)
    },
    })
  },
  methods: {
    delJobs() {
      wx.showModal({
        content: "您是否删除改条兼职，多余钱款将退回你的账户",
        showCancel: true,
        cancelText: "取消",
        cancelColor: "#1296DB",
        confirmText: "确定",
        confirmColor: "#1296DB",
        success: result => {
          if (result.confirm) {
            console.log("yes");
          }
        },
        fail: () => {
          console.log("no");
        },
        complete: () => {
          //后端扣除钱款
        }
      });
    },
    workers() {
      wx.navigateTo({
        url: "/pages/workers/main",

        fail: () => {
          console.log("weichengong");
        }
      });
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#jobs
  background-color #f3f3f3
  .jobslist
    margin-top 10rpx
    padding-top 10rpx
    border-top 3rpx solid #eee
    /*border-bottom 2rpx solid #eee*/
    margin-bottom 30rpx
    background-color #FFFFFF
    .jobsInfo
      padding-left 37rpx
      border-left 2rpx solid #eee
      letter-spacing 2rpx
      p
        span
          color rgba(17,34,153,0.6)
      .jobInfo
        display flex
        .workTime
          font-size 30rpx
          padding-top 8rpx
          padding-left 45rpx
          color #1299
          font-weight bold
        span
          padding-right 310rpx
          padding-bottom 10rpx
    .putTime
      padding-left 1rpx
      .time
        font-size 25rpx
        color rgba(17,34,153,0.6)
    .del
      /*height 80rpx*/
      margin-left 612rpx
      /*box-sizing border-box*/
      margin-bottom -8rpx
      /*.a*/
      /*  width 100rpx*/
</style>


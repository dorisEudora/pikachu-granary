<template>
  <div class="index">
    <div class="icon">
      <img src="/static/images/icon.png" alt="">
      <div class="text">
        <h1>hey!!!Job</h1>
      </div>
    </div>
    <div class="star">
      <van-icon name="/static/images/icon/star.png" size="10rpx"/>
      <span>为必填项</span>
    </div>
    <van-cell-group custom-class="job">
      <van-field
        required
        clearable
        label="职位名称"
        icon="arrow"
        placeholder="请输入职位名称" :value="jobName"
        @click-right-icon = "$toast('职位名称必须是具体工作名称')"
        input-class="message"
        size="large"
        label-class="name"
      />

      <van-field
        required
        clearable
        label="工作内容"
        icon="arrow"
        placeholder="请简介工作内容" :value="jobContent"
        @click-right-icon = "$toast('具体主要工作的内容')"
        input-class="message"
        size="large"
      />
      <van-field
        required
        clearable
        label="工作地点"
        icon="arrow"
        placeholder="请写下工作地点" :value="workPlace"
        @click-right-icon = "$toast('必须写下具体工作地点')"
        input-class="message"
        size="large"
      />
      <!--将workplace传到后和其他页面-->
      <van-field
        disabled
        required
        clearable
        label="工作时间"
        icon="arrow"
        placeholder="请写下工作时间" :value="workTime"
        @click-right-icon = "$toast('工作时间必须是以小时为单位')"
        input-class="message"
        size="large"
      />

      <van-field
        clearable
        label="薪资"
        placeholder="支付薪资(/元)"
        use-stepper-slot
        size="large"
      >
        <van-stepper slot="button" value="10" integer class="moneyChange" >发送验证码</van-stepper>
      </van-field>

      <van-field
        clearable
        label="人数"
        placeholder="需要人数"
        use-stepper-slot
        size="large"
      >
        <van-stepper slot="button" value="1" integer class="workerChange" >发送验证码</van-stepper>
      </van-field>
    </van-cell-group>
    <div class="put">
      <van-button class="btn" @click="putJob"  >点击发布</van-button><!--这里要把工作信息传到jobs和后端-->
    </div>

  </div>

</template>

<script>
//import axios form 'axios'
//const token = ''
export default {
  data () {
    return {

      jobContent:"",
      jobName:"",
      workPlace:"",
      workTime:"",
      //workerChange:""

    }
  },
  onLoad(){
      wx.request({
        url: 'http://mock.studyinghome.com/mock/5e606e87597ac8103c472ce2/heyjob/u/get/my/job/search',
        data: {
          jobName:''
        },
        header: {'content-type':'application/json'},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
          console.log(result.data)
        },

      });
    },
  methods: {
    jobArr() {
      var jobArray = new array();
       jobArray[1] = jobName;
       jobArray[2] = jobContent;
       jobArray[3] = workTime;
       jobArray[0] = workPlace;
    },
    putJob(){
      for(var i = 0;i < jobArr.jobArray.length;i++)
      {
        if(jobArr.jobArray[i] == ''||jobArr.jobArray[i] == null)
        {
          wx.showModal({
            content: '请把信息填写完整！',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#1296DB',
            confirmText: '确定',
            confirmColor: '#1296DB',
          });
          break;
        }
        else{
          wx.showModal({
            content: '发布将从您的账户中扣除薪资作为保证金，是否确认发布',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#1296DB',
            confirmText: '确定',
            confirmColor: '#1296DB',
            //成功后发送请求到后端
          });
        }
      }

    },

     jobChange (event) {
       this.jobContent = event.target.value
     },
     jobNameChange (event) {
       this.jobName = event.target.value
     },
     eworkPlaceChang (event) {
       this.workPlace = event.target.value
     },
     workTimeChange (event) {
       this.workTime = event.target.value
     },
     moneyChange(event){
       this.moneyChange = event.target.value
     },
     workerChange(event){
       this.workerChange = event.target.value
     },
     /*putjob:function(e,jobName,jobContent,workTime,workPlace) {
        if(this.jobName == ''){
          this.$toast("职位名称不能为空");
          return false;
        }
        if(this.jobContent == ''){
          this.$toast("工作内容不能为空");
          return false;
        }
        if(this.workTime == ''){
          this.$toast("工作时间不能为空");
          return false;
        }
        if(this.workPlace == ''){
          this.$toast("工作地点不能为空");
          return false;
        }
        else{
          wx.showModal({
            content: '发布将从您的账户中扣除薪资作为保证金，是否确认发布',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#1296DB',
            confirmText: '确定',
            confirmColor: '#1296DB',

          });
        }
      } */
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.index
  van-cell-group
    .job
      .name
        padding-top 12rpx
      .message
        height 77rpx
        padding-top -1rpx
  .icon
    display flex
    flex-direction row
    width 100%
    height 180rpx
    background-color: #1296DB
    img
      width 150rpx
      height 150rpx
      margin 10rpx 20rpx
      border-radius 150rpx
    h1
      width 300px
      height 200px
      position absolute
      left 73%
      margin-left -150px
      background-image -webkit-linear-gradient(left,white 10%,#66ffff 20%,#FFE628 30%,#00FF7F 40%);
      -webkit-text-fill-color: transparent;/* 将字体设置成透明色 */
      -webkit-background-clip: text;/* 裁剪背景图，使文字作为裁剪区域向外裁剪 */
      -webkit-background-size: 200% 100%;
      -webkit-animation: masked-animation 4s linear infinite;
      font-size: 35px;
      top 34rpx
      font-style italic
      letter-spacing 7rpx
  .star
    span
      display inline-block
      font-size 20rpx
  .put
    padding-left 240rpx
    .btn
      width 280rpx
      height 80rpx
      position absolute
      bottom 40rpx
      display flex
      justify-content center
      border 1rpx soild #1296DB






</style>

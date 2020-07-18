<template>
  <div id="resume">
    <van-cell-group>
      <van-cell title="姓名" value="workerName" />
      <van-cell title="性别" value="sex" />
      <van-cell title="工作经验" value="experience" />
      <van-cell title="身份" value="workerInfo" />
      <van-cell title="联系方式" value="telephoneNumber" type="password" />
      <van-cell title="已经工作时长" value="workedTime" type="password" />
      <van-cell title="期待薪资" value="hopeMoney" type="password" />
      <van-cell title="自我介绍" value="内容" label="introduction" :border="true" class="intro" :height="'350rpx'"/>
    </van-cell-group>
    <van-tabbar active="active" @onclick="call">
      <van-tabbar-item name="message" icon="/static/images/phone.png">
        电话联系
      </van-tabbar-item>
      <van-tabbar-item name="phone" icon="/static/images/message.png">
        短信联系
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import call from '../../components/button/button.vue'
export default {
  data() {
    return {

    };
  },
  onLoad(){
    wx.request({
      url:'http://mock.studyinghome.com/mock/5e606e87597ac8103c472ce2/heyjob/resume/all',
      data:{
        workerName:''
      },
      head:{'content-type':'application/json'},
      method:'get',
      dataType:'json',
      responseType:'text',
      success: (result)=>{
        console.log(result.data)
      },

    })
  },
  methods: {
    getResume(){

    },
    call(){
      wx.showModal(
        {
          title:'提示',
          content:'是否联系应聘者？',
          succeed (res) {
            if(res.confirm){
              console.log('联系应聘者')
            }else if(res.cancel){
              wx.navigateTo({
                url:'/pages/resume/index'
              })
            }
          }
        }
      )
    },

  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.resume
  van-cell-group
    van-cell
      .intro
        height 350rpx




</style>

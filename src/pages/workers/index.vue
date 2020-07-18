<template>
    <div id="workers">
      <fuChuang></fuChuang>
      <fuChuangZi></fuChuangZi>
        <div class="one">
            <van-panel title="陈政"  status="男" class="personInfo" desc="自我介绍" use-footer-slot  >
              <view style="padding-left: 15px">
                我叫陈政，来自成都信息工程大学，是一个大二即将大三的学生，擅长与人沟通交流，技术上擅长后端和前端，是一个全栈工程师。
              </view>
              <view slot="footer" style="padding-left: 230px;margin-bottom: -5px;">
                <van-button
                  color="linear-gradient(to right, #4bb0ff, #1296DB)"
                  type="info"
                  round
                  size="normal"
                  custom-class="pay"
                >
                  他已工作
                </van-button>
              </view>
            </van-panel>
                <div class="workerInfo">
                    <van-cell
                      icon="/static/images/work.png"
                      title="工作经验" @click="resume"
                      custom-class="experence"
                      icon-class="icon"
                      is-link>
                    </van-cell>
                </div>

        </div>
      <div class="one">
        <van-panel title="陈政"  status="男" class="personInfo" desc="自我介绍" use-footer-slot  >
          <view style="padding-left: 15px">
            我叫陈政，来自成都信息工程大学，是一个大二即将大三的学生，擅长与人沟通交流，技术上擅长后端和前端，是一个全栈工程师。
          </view>
          <view slot="footer" style="padding-left: 230px;margin-bottom: -5px;">
            <van-button
              color="linear-gradient(to right, #4bb0ff, #1296DB)"
              type="info"
              round
              size="normal"
              custom-class="pay"
            >
              他已工作
            </van-button>
          </view>
        </van-panel>
        <div class="workerInfo">
          <van-cell
            icon="/static/images/work.png"
            title="工作经验" @click="resume"
            custom-class="experence"
            is-link>
          </van-cell>
        </div>

      </div>
    </div>
</template>

<script>
  import fuChuang from '../../components/fuChuang/fuChuang'
  import fuChuangZi from '../../components/fuChuangZi/fuChuangZi'
export default {
    data(){
        return{

        }
    },
    onload(){
      wx.request({
        url:'http://mock.studyinghome.com/mock/5e606e87597ac8103c472ce2/heyjob/u/get/worker/information',
        data:{

        },
        methods: 'GET',
        header:{'content-type':'application/json'},
        dataType:'json',
        responseType:'text',
        success(result){
          console.log(result.data)
        }
      })
    },
    methods:{
       resume(){
           console.log("resume");
           wx.navigateTo({
               url: '/pages/resume/main',
               success: (result)=>{
                   console.log('yes')
               },
               fail: ()=>{
                   console.log('no')
               },

           });
       },
       payMoney(){
           wx.showModal({
               content: '点击以后，您上交的保证金将打入职员账户，是否确定？',
               showCancel: true,
               cancelText: '取消',
               cancelColor: '#1296DB',
               confirmText: '确定',
               confirmColor: '#1296DB',
               success: (result) => {
                   if(result.confirm){
                       //后端把钱转入买家账户
                   }
               },
               fail: ()=>{
                   console.log('付钱失败')
               },

           });
       }
    }
}
</script>

<style lang="stylus" rel="stylesheet/style">
#workers
  background-color #f3f3f3
  .one
    position relative
    margin-bottom 25rpx
    background-color #ffffff
    .workerInfo
      .experence
        height 110rpx
      icon
        margin-bottom 5rpx

      van-button
        .pay
          float right



</style>

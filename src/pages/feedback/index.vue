<template>
  <div class="help">
    <van-divider contentPosition="left" customStyle="color: #1296DB;border-color: #1989fa;font-size: 18px;">您的反馈内容</van-divider>
    <textarea name="" id="" cols="100%" rows="100rpx" placeholder="请填入您的反馈内容"></textarea>
    <van-divider contentPosition="left" customStyle="color: #1296DB;border-color: #1989fa;font-size: 18px;">联系方式</van-divider>
    <van-cell-group>
      <van-field
        :value="value"
        placeholder="请输入手机号码"
        :border="false"
        @change="onChange"
      />
      <van-divider contentPosition="left" customStyle="color: #1296DB;border-color: #1989fa;font-size: 18px;">凭证与截图</van-divider>
      <span v-for="(item,index) in fileList" :key="index" class="picture" @click="chooseImage(index)">
        <img  v-if="item.isImage"  :src="item.imgSrc" class="icon-2"/>
        <img  v-if="item.isCion"  :src="item.cionSrc" class="icon-1"/>
      </span>
<!--        <image-uploader></image-uploader>-->
      <van-divider />
      <van-button type="info" custom-class="btn">点击提交</van-button>
    </van-cell-group>
  </div>
</template>

<script>
import imageUploader from '../../components/imageUploader/imageUploader'

export default {
  data () {
    return {
        value: "",
      fileList: [{
        isCion: true,
        isImage: false,
        cionSrc: "/static/images/icon/update.png",
        imgSrc: ""
      },
        {
          isCion: true,
          isImage: false,
          cionSrc: "/static/images/icon/update.png",
          imgSrc: ""
        }
        ]
      }
    },
  methods: {
    chooseImage (index) {
      var that = this;
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function (res) {
          // console.log(res)
          wx.showToast({
            title: '正在上传',
            icon: 'loading',
            mask: true,
            duration: 1000
          })
          var tempFilePaths = res.tempFilePaths
          that.fileList[index].imgSrc = tempFilePaths
          that.fileList[index].isCion = false
          that.fileList[index].isImage = true
          console.log(tempFilePaths)
        }
      })
    }
  },
  components:{
    imageUploader,
  }

  }



</script>


<style lang="stylus" rel="stylesheet/stylus">
.help
  textarea
    border 1rpx solid rgb(193, 201, 204)
    width 100%
    height 200rpx
  .picture
    display inline-block
    height 300rpx
    width 300rpx
    border 1rpx solid rgb(199, 199, 199)
    margin 10rpx
    margin-right 20rpx
    margin-left 50rpx
    .icon-1
      display inline-block
      height 200rpx
      width 200rpx
      margin 50rpx 50rpx
    .icon-2
      display inline-block
      height 300rpx
      width 300rpx
      margin 0 0
      background-size cover
  van-button
    margin-left 37rpx
    .btn
      margin 10rpx 235rpx
</style>

<template>
<div id="identify">
  <fuChuang id="fC"></fuChuang>
  <fu-chuang-zi id="up"></fu-chuang-zi>
  <div class="save">
    <van-button square type="info" block bind:onclick="onClickRight" >
        保存
    </van-button>
  </div>
    <van-notice-bar
      left-icon="volume-o"
      text="公司或者店铺实地图片"
    />
    <van-divider contentPosition="center" >公司图标</van-divider>

    <imageUploader></imageUploader>
    <van-cell-group>
      <van-field
        :value="compName"
        required
        clearable
        label="公司名称"
        icon="question-o"
        placeholder="请输入公司名称"
        @click-icon="onClickIcon"
        size="large"
      />
      <van-field
        :value="compIntroduce"
        required
        clearable
        label="公司介绍"
        icon="question-o"
        placeholder="请简介公司介绍"
        @click-icon="onClickIcon"
        size="large"
      />
      <van-field
        :value="compPlace"
        required
        clearable
        label="公司地址"
        icon="question-o"
        placeholder="请输入公司地址"
        @click-icon="onClickIcon"
        size="large"
      />
    </van-cell-group>
    <van-divider contentPosition="center" >公司实地图片</van-divider>
      <imageUploader></imageUploader>
    <van-divider contentPosition="center" >公司营地执照</van-divider>
      <imageUploader></imageUploader>

</div>
</template>

<script>
  import imageUploader from '../../components/imageUploader/imageUploader'
  import fuChuang from '../../components/fuChuang/fuChuang'
  import fuChuangZi from '../../components/fuChuangZi/fuChuangZi'
export default {
  data () {
    return {
      logoList: [
      { url: 'https://img.yzcdn.cn/vant/leaf.jpg', name: 'logo1' ,isImage: true},
      // Uploader 根据文件后缀来判断是否为图片文件
      // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      {
        url: 'http://iph.href.lu/60x60?text=default',
        name: 'logo2',
        isImage: true
      }
      ],
      placeList: [{
        isCion: true,
        isImage: false,
        cionSrc: "/static/images/up/uploader1.png",
        imgSrc: ""
      },
        {
          isCion: true,
          isImage: false,
          cionSrc: "/static/images/up/uploader1.png",
          imgSrc: ""
        }],
      licenseList: [{
        isCion: true,
        isImage: false,
        cionSrc: "/static/images/up/uploader2.png",
        imgSrc: ""
      },
        {
          isCion: true,
          isImage: false,
          cionSrc: "/static/images/up/uploader2.png",
          imgSrc: ""
        }],

      compName:'',
      compIntroduce:'',
      compPlace:'',


    }
  },
  components:{
    imageUploader,
    fuChuang,
    fuChuangZi,
  },
  method: {
    onClickIcon () {
      wx.showToast({
        title: '填写相关的店铺或公司的信息',
        //icon: 'success',
        duration: 2000
      })
    },
    logoAfterRead (event) {
      // this.logoList[0].url = event.content;
      // this.formData = event.content;
      console.log(event.content);
      // this.$refs.src = file.content;
      // this.formData = file.content;
      const {logo} = event.detail;
      wx.uploadFile({
        url: '', // 接口地址
        filePath: logo.path,
        name: 'logo',
        formData: {user: 'test'},
        success (res) {
          const {logoList = []} = this.data;
          logoList.push({...logo, url: res.data});
          this.setData({logoList});
        }
      })
    },
    placeChooseImage (index) {
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
          var tempPlacePaths = res.tempPlacePaths
          that.placeList[index].imgSrc = tempPlacePaths
          that.placeList[index].isCion = false
          that.placeList[index].isImage = true
          console.log(tempPlacePaths);
        }
        //     wx.uploadFile({
        //       url: 'https://www.weiuid.com/index.php/api/upload/upload', //仅为示例，非真实的接口地址
        //       filePath: tempFilePaths[0],
        //       name: 'file',
        //       formData: {
        //         'mdl': mdl
        //       },
        //})
      })
    },
    licenseChooseImage (index) {
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
          var templicensePaths = res.templicensePaths
          that.licenseList[index].imgSrc = templicensePaths
          that.licenseList[index].isCion = false
          that.licenseList[index].isImage = true
          console.log(templicensePaths)
        }
      })
    },
  }
}
</script>

 <style lang="stylus" rel="stylesheet/stylus">
#identify
  .picture
    display inline-block
    height 225rpx
    width 350rpx
    border 1rpx solid rgb(199, 199, 199)
    margin 10rpx
    .up-1
      display inline-block
      height 156rpx
      width 235rpx
      margin 32rpx 50rpx
    .up-2
      display inline-block
      height 225rpx
      width 350rpx
      margin 0 0
      background-size cover
  .compLogo
    margin 20rpx
  van-uploader
    margin 18rpx
  .save
    margin 0rpx
    padding 0rpx
    box-sizing border-box
    background-color #1296DB
    van-button
      margin 14rpx
      display inline-block
      padding-left 625rpx
      font-size 45rpx
      letter-spacing 7rpx
      color #eee



 </style>

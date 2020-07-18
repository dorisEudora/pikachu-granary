<template>
  <div class="imageUploader">
    <div class="eva_row">
      <div class="eva_screen">
        <label class="eva_name">相关照片（必填）</label>
        <label class="eva_img-count">{{eva_img_count}}/4</label>
      </div>
      <!-- v-for是vue的语法，循环语句，循环显示当前上传的照片 -->
      <label v-for="(item, index) in eva_src" :key="index" class="eva_delete_parent">
        <img class="eva_img" :src="item" @click="eva_priview(item)">
        <img src="/static/images/deleteimage.png" alt="" class="eva_delete" @click="eva_deleteimg(index)">
      </label>
      <!-- v-if是判断语句，判断当前照片数量如果小于2张，就显示添加照片的按钮；反之就不显示了在这里添加点击事件，点击按钮调用uploadPicture方法上传照片 -->
      <label  v-if="eva_img_count < 4" @click="eva_uploadPicture">
        <img class="eva_add-img" :src="eva_addimage">
      </label>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        eva_src: [],
        eva_img_count: 0,
        eva_addimage:"/static/images/addimage.png",
      }

    },
    methods: {
      eva_uploadPicture () {
        //将this保存到that上面
        let that = this
        wx.chooseImage({
          count: 4,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success (res) {
            // tempFilePath可以作为img标签的src属性显示图片
            const tempFilePaths = res.tempFilePaths
            //用that.src来调用data函数定义的src变量
            that.eva_src.push(tempFilePaths)
            that.eva_img_count++
            // console.log('that.src',that.src)
          }
        })
      },
      eva_deleteimg(index){
        this.eva_src.splice(index,1);
        // console.log(index)
        this.eva_img_count--;
      },
      eva_priview(item){
        var img=item
        var that= this;
        console.log(img)
        console.log(that.eva_src[0])
        wx.previewImage({
          current: img, // 当前显示图片的http链接
          urls: img,
          success: (res)=>{
            console.log(res)
          },
          fail: (res)=>{
            console.log('预览失败',res)
          }
        })
      }
    }


  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .imageUploader
  .eva_row
    border-bottom 1px #E8E8E8 solid
    padding 5px 7px
    margin-top -20rpx
    .eva_screen
      margin-bottom 32rpx
    .eva_name
      width 80%
      height 40px
      line-height 40px
      
    .eva_input
      width 100%
      height 85px
      font-size 14px
      padding-top 5px
    .eva_word-count
      float right
      color #808080
    .eva_img-count
      float right
      line-height 40px
      color #808080
    .eva_add-img
      width 200rpx
      height 200rpx
    .eva_delete_parent
      display inline-block
      position relative
    .eva_delete
      width 41rpx
      height 41rpx
      position absolute
      top -18rpx
      right -5rpx
    .eva_img
      width 66px
      height 66px
      margin-bottom 7px
      margin-right 41rpx

</style>

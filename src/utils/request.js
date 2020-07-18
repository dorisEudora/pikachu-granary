
import Fly from 'flyio/dist/npm/wx'
const fly = new Fly()
const host = ' http://mock.studyinghome.com/mock/5e606e87597ac8103c472ce2'
// 添加请求拦截器
fly.interceptors.request.use((request) => {
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  // console.log(request)
  // request.headers["X-Tag"] = "flyio";
  // request.headers['content-type']= 'application/json';
  request.headers = {
    'X-Tag': 'flyio',
    'content-type': 'application/json'
  }

  let authParams = {
    // 公共参数
    'categoryType': 'SaleGoodsType@sim',
    'streamNo': 'wxapp153570682909641893',
    'reqSource': 'MALL_H5',
    'appid': 'string',
    'timestamp': new Date().getTime(),
    'sign': 'string'
  }

  request.body && Object.keys(request.body).forEach((val) => {
    if (request.body[val] === '') {
      delete request.body[val]
    };
  })
  request.body = {
    ...request.body,
    ...authParams
  }
  return request
})

// 添加响应拦截器
fly.interceptors.response.use(
  (response) => {
    wx.hideLoading()
    return response.data // 请求成功之后将返回值返回
  },
  (err) => {
    //发生网络错误后会走到这里
    //return Promise.resolve("ssss")
    wx.hideLoading();
    wx.showToast({
      title:'网络不流畅，请稍后再试！',
      icon:'none',
    });
  }
)

fly.config.baseURL = host

export default fly

import axios from '../../../node_modules/axios/dist/axios';

axios.defaults.adapter = function(config) {
  let baseURL = 'http://rap2api.taobao.org/app/mock';
  // console.log('baseURL',baseURL)
  // wx.showLoading({ title: '拼命加载中...' })
  return new Promise((resolve, reject) => {
    // console.log(config);
    wx.request({
      ...config,
      url: baseURL + config.url,
      data: config.params,
      success: res => {
        // console.log(res)
        if (res.statusCode < 200 || res.statusCode > 300) {
          return reject(res.data || {});
        }
        return resolve(res.data || {});
      },
      complete: res => {
        // wx.hideLoading()
      }
    });
  })
}
export default axios;

// pages/basket/sao/sao.js
const app = getApp()
const utilMd4 = require('../../../utils/MD5.js');
const util = require('../../../utils/util.js');  
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  return: function (e) {
    wx.reLaunch({
      url: "../../basket/return/return"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var _this = this
    wx.getStorage({
      key: 'modelList',
      success: function (res) {
        console.log(res.data.ID)
        _this.setData({
          userid: res.data.ID
        })
      },
    })
    let sysInfo = app.globalData.sysInfo;
    let time = util.formatTime(new Date());
    let b64 = utilMd4.hexMD4(time + app.globalData.key + _this.data.userid).toLocaleUpperCase();
    let img = 'http://49.234.123.71/api/Basket_/CreateQrImage?Id=' + _this.data.userid+'&securityStr=' + b64
    
    // 获取二维码
    app.Promise({ url: 'api/Basket_/CreateQrImage?Id=' + _this.data.userid+'&securityStr=' + b64, method: "GET" }).then((res) => {
      _this.setData({
        img: img,
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
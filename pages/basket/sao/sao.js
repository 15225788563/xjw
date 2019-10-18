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
    // console.log(options.ID[1]);
    // let that=this;
    // that.setData({
    //   ID:options.ID[1]
    // })
    var _this = this
    let sysInfo = app.globalData.sysInfo;
    let time = util.formatTime(new Date());
    let b64 = utilMd4.hexMD4(time + app.globalData.key + 61).toLocaleUpperCase();
    // console.log(b64)
    let img = app.globalData.url + 'api/Basket_/CreateQrImage?Id=61&securityStr=' + b64
    // 最新需求
    wx.request({
      url: app.globalData.url + 'api/Basket_/CreateQrImage?Id=61&securityStr=' + b64,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "get",
      success(res) {
        // console.log(res)
        _this.setData({
          sao:res.data,
          rebasket: res.data.modelList,
          img:img,
        })
      },
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
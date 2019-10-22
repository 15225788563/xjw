// pages/basket/receivables/receivables.js
const app = getApp()
const utilMd4 = require('../../../utils/MD5.js');
const util = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  Return: function (e) {
    wx.reLaunch({
      url: "../../basket/order/order"
    })
  },

  basketquery: function (e) {
    wx.reLaunch({
      url: "../../basket/basketquery/basketquery"
    })
  },
  home: function (e) {
    wx.reLaunch({
      url: "../../home/home"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    console.log(options.basketID)
    _this.setData({
      basketID: options.basketID,
      depostiAble: options.depostiAble,
      orderDate: options.orderDate,
      backOrderID: options.backOrderID
    })
    
    wx.getStorage({
      key: 'modelList',
      success: function (res) {
        _this.setData({
          userid: res.data.ID,
          username: res.data.UserName
        })
        let sysInfo = app.globalData.sysInfo;
        let time = util.formatTime(new Date());
        let b63 = utilMd4.hexMD4(time + app.globalData.key + _this.data.userid).toLocaleUpperCase();
        // console.log(b64)
        // 最新需求
        app.Promise({ url: 'api/Basket_/ComfireReceive?backOrderId=' + _this.data.backOrderID + '&securityStr=' + b63, method: "POST" }).then((res)=>{
         
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
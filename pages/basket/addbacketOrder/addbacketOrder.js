// pages/basket/addbacketOrder/addbacketOrder.js
const app = getApp()
const util = require('../../../utils/util.js');
const utilMd4 = require('../../../utils/MD5.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  centerPay:function(e){
    var that = this
    
    let orderid = that.data.orderid
    let sysInfo = app.globalData.sysInfo;
    let time = util.formatTime(new Date());
    let b64 = utilMd4.hexMD4(time + app.globalData.key + orderid).toLocaleUpperCase();
    
    app.Promise({ url: 'api/Basket_/ConfirmPay?orderId=' + orderid + '&securityStr=' + b64, method: "POST" }).then((res) => {
      console.log(res)
      if(res.errInfo=="0"){
        wx.redirectTo({
          url: "../../basket/centerPay/centerPay?orderid=" + this.data.orderid + '&payLent=' + this.data.payLent + '&paydeposit=' + this.data.paydeposit,
        }) 
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let payLent = options.payLent
    let paydeposit = options.paydeposit
    let sum = options.sum
    let orderid = options.orderid
    this.setData({
      payLent: payLent,
      paydeposit: paydeposit,
      sum: sum,
      orderid: orderid
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
// pages/basket/basketmodify/basketmodify.js
const app = getApp()
const util = require('../../../utils/util.js');
const utilMd4 = require('../../../utils/MD5.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:0,
    number:1,
    Days:1,
    num:0,
  },

  /**
   * 自定义函数--切换选中
   */
  changeOil:function(e){
    var key = e.currentTarget.dataset.num
    // console.log(key)
    this.setData({
      num: e.currentTarget.dataset.num,
      deposit: this.data.list[key].RentPrice,
      rent: this.data.list[key].DepositPrice,
      bastet:this.data.list[key]
    })
  },

  /**
   * 自定义函数--加号 减号
   */
  addDays: function (e) {
    this.setData({
      Days: this.data.Days +1
    });
  },

  delDays:function(e){
    var that = this
    if (that.data.Days > 1) {
      that.setData({
        Days: that.data.Days - 1
      });
    }
  },

  addnumber: function (e) {
    this.setData({
      number: this.data.number + 1
    });
  },

  delDays: function (e) {
    var that = this
    if (that.data.Days > 1) {
      that.setData({
        Days: that.data.Days - 1
      });
    }
  },

  delnumber:function(e){
    var that = this
    if (that.data.number > 1) {
      that.setData({
        number: that.data.number - 1
      });
    }
  },

  Return: function (e) {
    wx.reLaunch({
      url: "../../basket/basketquery/basketquery"
    })
  },

  number:function(e){
    var val = e.detail.value;
    this.setData({
      number:val
    })
  },
  Days: function (e) {
    var val = e.detail.value;
    this.setData({
      Days:val
    })
  },
  centerOrder:function(e){
    wx.reLaunch({
      url: "../../basket/centerOrder/centerOrder"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.orderid)
    this.setData({
      orderid: options.orderid
    })
    let that = this
    let sysInfo = app.globalData.sysInfo;
    let time = util.formatTime(new Date());
    let b64 = utilMd4.hexMD4(time + app.globalData.key + 0).toLocaleUpperCase();
      wx.request({
        url: app.globalData.url + 'api/Basket_/GetBasketTypeList?start=' + 0 + '&count=' + '' + '&securityStr=' + b64,
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          // console.log(res.data)
          that.setData({
            list: res.data.modelList,
            deposit: res.data.modelList[0].RentPrice,
            rent: res.data.modelList[0].DepositPrice,
            bastet: res.data.modelList[0]
          })
        }
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
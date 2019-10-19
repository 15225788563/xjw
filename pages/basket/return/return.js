// basket/return/return.js
const app = getApp()
const utilMd4 = require('../../../utils/MD5.js');
const util = require('../../../utils/util.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    basket: [],
    rebasket: [],
    ID: []
  },
  order: function (e) {
    wx.reLaunch({
      url: "../../basket/order/order?basketID=" + this.data.basketID + "&backOrderID=" + this.data.backOrderID
    })
  },
  sao: function (e) {
    wx.reLaunch({
      url: "../../basket/sao/sao"
    })
  },
  basketcomplete: function (e) {
    wx.getStorage({
      key: 'modelList',
      success: function (res) {

      },
    })
    wx.reLaunch({
      url: "../../basket/order/order?basketID=" + this.data.basketID + "&backOrderID=" + this.data.backOrderID + "&status=" + this.data.status
    })
  },
  baskethome: function (e) {
    wx.reLaunch({
      url: "../../basket/baskethome/baskethome"
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
        // console.log(res.data)
        _this.setData({
          userid: res.data.ID,
          username: res.data.UserName
        })
        console.log(_this.data.userid)
        // let orderID = "RK-201910122113011488";
        let sysInfo = app.globalData.sysInfo;
        let time = util.formatTime(new Date());
        let b63 = utilMd4.hexMD4(time + app.globalData.key + _this.data.userid).toLocaleUpperCase();
        app.Promise({ url: 'api/Basket_/GetBackList?userId=' + _this.data.userid + '&securityStr=' + b63, method: "GET" }).then((res) => {
          console.log(res)
          if(res.errInfo=="0"){
            _this.setData({
              rebasket: res.modelList,
              basket: res.modelList,
              status: res.modelList[0].status,
              backOrderID: res.modelList[0].backOrderID,
              basketID: res.modelList[0].basketID
            })
          }
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
  },
})
// pages/basket/basketcomplete/basketcomplete.js
const app = getApp()
const util = require('../../../utils/util.js');
const utilMd4 = require('../../../utils/MD5.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  Return:function(e){
    wx.reLaunch({
      url: "../../basket/basketquery/basketquery"
    })
  },

  whole:function(e){
    console.log("点击全部")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    let orderid = options.orderid;
    let sysInfo = app.globalData.sysInfo;
    let time = util.formatTime(new Date());
    let b64 = utilMd4.hexMD4(time + app.globalData.key+orderid).toLocaleUpperCase();
    wx.request({
      url: app.globalData.url + 'api/Basket_/GetReturnDetails?orderId='+orderid+'&securityStr='+b64,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(res.data.modelList)
        for(var i in res.data.modelList){
          res.data.modelList[i].basketIDs = res.data.modelList[i].basketIDs.split(",");
        }
        let modelList = res.data.modelList;
        console.log(modelList)
        that.setData({
          list: modelList
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
// pages/basket/basketcomplete/basketcomplete.js
const app = getApp()
const utilMd4 = require('../../../utils/MD5.js');
const util = require('../../../utils/util.js');  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  Return:function(e){
    wx.reLaunch({
      url: "../../basket/return/return"
    })
  },


  //返回上一级关闭当前页面
 

  whole:function(e){
    var _this = this
    wx.getStorage({
      key: 'modelList',
      success: function(res) {
        _this.setData({
          userid: res.data.ID,
          username: res.data.UserName
        })
        let sysInfo = app.globalData.sysInfo;
        let time = util.formatTime(new Date());
        let b64 = utilMd4.hexMD4(time + app.globalData.key + _this.data.userid).toLocaleUpperCase();
        // console.log(b64)
        // 最新需求
        wx.request({
          url: app.globalData.url + 'api/Basket_/GetBackList?userId=' + _this.data.userid+'&securityStr=' + b64,
          header: {
            'content-type': 'application/json' // 默认值
          },
          method: "get",
          success(res) {
            for (var i in res.data.modelList) {
              res.data.modelList[i].basketID = res.data.modelList[i].basketID.split(",");
            }
            console.log(res.data.modelList)
            _this.setData({
              list: res.data.modelList
            })
          },
        })
        console.log("点击全部")
      },
    })
 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    wx.getStorage({
      key: 'modelList',
      success: function(res) {
        _this.setData({
          userid: res.data.ID,
          username: res.data.UserName
        })
        let sysInfo = app.globalData.sysInfo;
        let time = util.formatTime(new Date());
        let b64 = utilMd4.hexMD4(time + app.globalData.key + _this.data.userid).toLocaleUpperCase();
        // console.log(b64)
        // 最新需求
        wx.request({
          url: app.globalData.url + 'api/Basket_/GetBackList?userId=' + _this.data.userid + '&securityStr=' + b64,
          header: {
            'content-type': 'application/json' // 默认值
          },
          method: "get",
          success(res) {
            for (var i in res.data.modelList) {
              res.data.modelList[i].basketID = res.data.modelList[i].basketID.split(",");
            }
            console.log(res.data.modelList)
            _this.setData({
              list: res.data.modelList
            })
          },
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
    var _this = this
    wx.getStorage({
      key: 'modelList',
      success: function(res) {
        _this.setData({
          userid: res.data.ID,
          username: res.data.UserName
        })
        let sysInfo = app.globalData.sysInfo;
        let time = util.formatTime(new Date());
        let b64 = utilMd4.hexMD4(time + app.globalData.key + _this.data.userid).toLocaleUpperCase();
        // console.log(b64)
        // 最新需求
        wx.request({
          url: app.globalData.url + 'api/Basket_/GetBackList?userId=' + _this.data.userid + '&securityStr=' + b64,
          header: {
            'content-type': 'application/json' // 默认值
          },
          method: "get",
          success(res) {
            for (var i in res.data.modelList) {
              res.data.modelList[i].basketID = res.data.modelList[i].basketID.split(",");
            }
            console.log(res.data.modelList)
            _this.setData({
              list: res.data.modelList
            })
          },
        })
      },
    })
   
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
// pages/Land/Land.js
const app = getApp()
const utilMd4 = require('../../utils/MD5.js');
const util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
     * 自定义函数 获取手机号
     */
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  /**
   * 自定义函数 获取密码
   */
  passWord: function (e) {
    this.setData({
      passWord: e.detail.value
    })
  },

  hemo(){
    wx.switchTab({
      url: '../home/home',
    })
  },

  register(){
    wx.navigateTo({
      url: '../register/register',
    })
  },

  btn(){
    let that = this;
    let name = that.data.id
    let pass = that.data.passWord
    let sysInfo = app.globalData.sysInfo;
    let time = util.formatTime(new Date());
    let b64 = utilMd4.hexMD4(time + app.globalData.key + name + pass).toLocaleUpperCase();
    console.log(b64)
    wx.request({
      url: 'http://192.168.0.139:801/api/Home_Page/UserLogin?userName=' + name + '&passWord=' + pass+'&loginIp='+""+'&securityStr=' + b64,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "GET",
      success(res) {
        wx.setStorage({
          key: 'modelList',
          data: res.data.modelList[0],
        })
        setTimeout(function () {
          wx.reLaunch({
            url: '../home/home'
          })
        }, 500)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.setData({
      id: options.id
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
// pages/basket/basketquery/basketquery.js
const app = getApp()
const util = require('../../../utils/util.js');
const utilMd4 = require('../../../utils/MD5.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 4,
  },

  /**
   * 自定义函数--返回
   */
  Return: function (e){
    wx.reLaunch({
      url: "../../basket/baskethome/baskethome"
    })
  },

  details:function(e){
    wx.reLaunch({
      url: "../../basket/basketcomplete/basketcomplete"
    })
  },

  modify:function(e){
    wx.reLaunch({
      url: "../../basket/basketmodify/basketmodify"
    })
  },

  /**
   * 自定义函数--导航栏切换样式
   */
  changeOil: function (e) {
    var that = this
    // console.log(e.target.dataset.num);
    this.setData({
      num: e.target.dataset.num
    })
    switch(e.target.dataset.num){
      case '4':
        that.query("")
        break;
      case '1':
        that.query(0)
        break; 
      case '2':
        that.query(2)
        break;
      case '3':
        that.query(3)
        break;
    }
  },

  query:function(e){
    let key = e;
    let count = 10;
    // console.log(key)
    let that = this
    let sysInfo = app.globalData.sysInfo;
    let time = util.formatTime(new Date());
    wx.getStorage({
      key: 'modelList',
      success: function(res) {
        // console.log(res.data)
        let userid = res.data.ID
        let name = res.data.UserName
        let b64 = utilMd4.hexMD4(time + app.globalData.key + userid + name + 0 + count + key).toLocaleUpperCase();
        
        wx.request({
          url: app.globalData.url + 'api/Basket_/GetBasketToUserList?userId=' + userid + '&userName=' + name + '&start=' + 0 + '&count=' + count +'&type='+key+'&securityStr='+b64,
          header: {
            'content-type': 'application/json'
          },
          success(res) {
            // console.log(res.data.modelList)
            that.setData({
              Orderlist: res.data.modelList
            })
          }
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    let sysInfo = app.globalData.sysInfo;
    let time = util.formatTime(new Date());
    let b64 = utilMd4.hexMD4(time+app.globalData.key+0+10).toLocaleUpperCase();
    wx.request({
      url: app.globalData.url + 'api/Basket_/GetBasketOrderStatus?start=0&count=10&securityStr=' + b64,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        // console.log(res.data.modelList)
      }
    })

    that.query("")
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
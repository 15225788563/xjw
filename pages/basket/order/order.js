// basket/order/order.js
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
  receivables: function (e) {
    wx.reLaunch({
      url: "../../basket/receivables/receivables?deposit=" + this.data.deposit + "&backDate=" + this.data.backDate +  "&depostiAble=" + this.data.depostiAble
    })
  },
  sao: function(e) {
    wx.reLaunch({
      url: "../../basket/sao/sao"
    })
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this
    _this.setData({
      backOrderID: options.backOrderID,
      basketID: options.basketID
    })
    wx.getStorage({
      key: 'modelList',
      success: function(res) {
        _this.setData({
          userid: res.data.ID,
          username: res.data.UserName
        })
        let sysInfo = app.globalData.sysInfo;
        let time = util.formatTime(new Date());
        let b63 = utilMd4.hexMD4(time + app.globalData.key + _this.data.backOrderID + _this.data.userid + _this.data.basketID).toLocaleUpperCase();
        // console.log(b64)
        // 归还列表
        wx.request({
          url: app.globalData.url + 'api/Basket_/GetBackDetail?backOrderId=' + _this.data.backOrderID + '&userId=' + _this.data.userid + '&basketId=' + _this.data.basketID+'&securityStr=' + b63,
          header: {
            'content-type': 'application/json' // 默认值
          },
          method: "GET",
          success(res) {
            console.log(res.data.modelList)
            _this.setData({
              deposit: res.data.modelList[0].deposit,
              backUserName: res.data.modelList[0].backUserName,
              backDate: res.data.modelList[0].backDate,
              backCounts: res.data.modelList[0].backCounts,
              diffAmount: res.data.modelList[0].diffAmount,
              depostiAble: res.data.modelList[0].depostiAble,
              // list: res.data.modelList,
            })
            let list=res.data.modelList
            for (var i in list){
              list[i].basketID = list[i].basketID.split(",")
            }
            _this.setData({
              list:list
            })
            console.log(_this.data.list)
          },
        })
      },
    })
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
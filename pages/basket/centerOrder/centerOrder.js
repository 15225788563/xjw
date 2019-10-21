const app = getApp()
const util = require('../../../utils/util.js');
const utilMd4 = require('../../../utils/MD5.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: null
  },

  Return: function (e) {
    wx.reLaunch({
      url: "../../basket/basketmodify/basketmodify"
    })
  },

  payOrder: function (e) {
    wx.reLaunch({
      url: "../../basket/addbacketOrder/addbacketOrder?payLent=" + this.data.payLent + '&paydeposit=' + this.data.paydeposit + '&sum=' + this.data.sum + '&OrderID=' + this.data.OrderID + '&OrderDate=' + this.data.OrderDate
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let that = this;
    let Detail = options.Detail
    let ID = options.ID
    let deposit = options.deposit
    let rent = options.rent
    let number = options.number
    let Days = options.Days
    let concent = options.concent
    let payLent = options.rent * options.number * options.Days
    let paydeposit = options.deposit * options.number
    let sum = payLent + paydeposit
   

    this.setData({
      Detail: Detail,
      ID: ID,
      deposit: deposit,
      rent: rent,
      number: number,
      Days: Days,
      concent: concent,
      payLent: payLent,
      paydeposit: paydeposit,
      sum: sum,




    })
    wx.setStorage({
      key: 'orderID',
      data: this.data.OrderID,
    })
    wx.getStorage({
      key: 'modelList',
      success: function (res) {
        console.log(res.data.ID)
        that.setData({
          userid: res.data.ID
        })
        let sysInfo = app.globalData.sysInfo;
        let time = util.formatTime(new Date());
        let b64 = utilMd4.hexMD4(time + app.globalData.key + that.data.ID + that.data.userid + that.data.number + that.data.Days + that.data.concent).toLocaleUpperCase();


        app.Promise({ url: 'api/Basket_/BasketRent?typeId=' + that.data.ID + '&userId=' + that.data.userid + '&count=' + that.data.number + '&days=' + that.data.Days + '&remark=' + that.data.concent + '&securityStr=' + b64, method: 'POST' }).then((res) => {
          console.log(res)
          let OrderID = res.modelList[0].OrderID
          let OrderDate = res.modelList[0].OrderDate
          that.setData({
            OrderID: OrderID,
            OrderDate: OrderDate
          })

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
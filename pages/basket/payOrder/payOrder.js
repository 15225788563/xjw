// pages/basket/payOrder/payOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 0,
  },

  Return: function (e) {
    wx.reLaunch({
      url: "../../basket/centerOrder/centerOrder"
    })
  },

  centerPay: function (e) {
    wx.redirectTo({
      url: "../../basket/centerPay/centerPay",
    }) 
  },

  radioCheckedChange: function (e) {
    this.setData({
      value: e.detail.value
    })
    console.log(this.data.value)

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let payLent = options.payLent
    let paydeposit = options.paydeposit
    let sum = options.sum
    let rent=options.rent
    let deposit = options.deposit
    let SumCount1 = options.SumCount1
    let RentDays1 = options.RentDays1
    let orderid = options.orderid
    this.setData({
      payLent: payLent,
      paydeposit: paydeposit,
      sum: sum,
      rent: rent,
      deposit: deposit,
      SumCount1: SumCount1,
      RentDays1: RentDays1,
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
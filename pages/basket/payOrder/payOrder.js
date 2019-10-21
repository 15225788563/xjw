// pages/basket/payOrder/payOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 0,
  },

  Return: function (e) {
    let pages = getCurrentPages();      //获取所有页面
    let currentPage = null;   //当前页面
    let prevPage = null; //上一个页面
    if (pages.length >= 2) {
      currentPage = pages[pages.length - 1]; //获取当前页面，将其赋值
      prevPage = pages[pages.length - 2]; //获取上一个页面，将其赋值
    }
    wx: wx.navigateBack({     //返回上一个页面
      delta: 1,
    })
  },

  centerPay: function (e) {
    wx.redirectTo({
      url: "../../basket/centerPay/centerPay?orderid=" + this.data.orderid + '&PayRent=' + this.data.PayRent + '&PayDeposit=' + this.data.PayDeposit,
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
     
    let orderid = options.orderid
    let RentPrice = options.RentPrice
    let SumCount = options.SumCount
     
    let PayRent = options.PayRent
    let PayDeposit = options.PayDeposit
    this.setData({
      orderid: orderid,
      RentPrice: RentPrice,
      SumCount: SumCount,
      PayRent: PayRent,
      PayDeposit: PayDeposit,
      

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
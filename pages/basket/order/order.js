// basket/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reals: [
      {
       real:"￥241", name: "何小月", num: 18, time: "2019-10-14 14:20", money: "￥241"
      },
    ],
    lists: [
      {
        returned: "何小月",
        retime: "2019-10-14",
        payer: "菜农农",
        num: 18,
        money: "￥300"
      },
      {
        returned: "何小月",
        retime: "2019-10-14",
        payer: "菜农农",
        num: 18,
        money: "￥300"
      },
      {
        returned: "何小月",
        retime: "2019-10-14",
        payer: "菜农农",
        num: 18,
        money: "￥300"
      }
    ],
    nums: [
      { number: "20191018", number1: "20191018", number2: "20191018",},
      { number: "20191018", number1: "20191018", number2: "20191018", },
      { number: "20191018", number1: "20191018", number2: "20191018", }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
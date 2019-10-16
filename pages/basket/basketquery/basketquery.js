// pages/basket/basketquery/basketquery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 4,
    Orderlist:[
      { 
        orderid:4586125874,
        orderstate: "等待商家付款",
        orderStatuscode:1,
        ordername:"50cm筐子",
        orderdeposit:30,
        orderrent:1,
        ordernumber:100
      },
      {
        orderid: 4586125874,
        orderstate: "等待商家取筐",
        orderStatuscode: 2,
        ordername: "25cm筐子",
        orderdeposit: 30,
        orderrent: 0.5,
        ordernumber: 200
      },
      {
        orderid: 4586125874,
        orderstate: "已完成",
        orderStatuscode: 3,
        ordername: "100cm筐子",
        orderdeposit: 30,
        orderrent: 2,
        ordernumber: 50
      }
    ]
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
    console.log(e.target.dataset.num);
    this.setData({
      num: e.target.dataset.num
    })
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
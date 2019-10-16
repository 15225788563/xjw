// pages/basket/basketmodify/basketmodify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:0,
    number:1,
    Days:1,
    num:1,
    list: [
      {
        id:1,
        ordername: "25cm筐子",
        orderdeposit: 30,
        orderrent: 0.5,
      },
      {
        id:2,
        ordername: "50cm筐子",
        orderdeposit: 30,
        orderrent: 1,
      },
      {
        id:3,
        ordername: "100cm筐子",
        orderdeposit: 30,
        orderrent: 2,
      }
    ],
  },

  /**
   * 自定义函数--切换选中
   */
  changeOil:function(e){
    console.log(e.currentTarget.dataset.num)
    var key = e.currentTarget.dataset.num-1
    this.setData({
      num: e.currentTarget.dataset.num,
      deposit:this.data.list[key].orderdeposit,
      rent: this.data.list[key].orderrent,
    })
  },

  /**
   * 自定义函数--加号 减号
   */
  addDays: function (e) {
    this.setData({
      Days: this.data.Days +1
    });
  },

  delDays:function(e){
    var that = this
    if (that.data.Days > 1) {
      that.setData({
        Days: that.data.Days - 1
      });
    }
  },

  addnumber: function (e) {
    this.setData({
      number: this.data.number + 1
    });
  },

  delDays: function (e) {
    var that = this
    if (that.data.Days > 1) {
      that.setData({
        Days: that.data.Days - 1
      });
    }
  },

  delnumber:function(e){
    var that = this
    if (that.data.number > 1) {
      that.setData({
        number: that.data.number - 1
      });
    }
  },

  Return: function (e) {
    wx.reLaunch({
      url: "../../basket/basketquery/basketquery"
    })
  },

  number:function(e){
    var val = e.detail.value;
    this.setData({
      number:val
    })
  },
  Days: function (e) {
    var val = e.detail.value;
    this.setData({
      Days:val
    })
  },
  centerOrder:function(e){
    wx.reLaunch({
      url: "../../basket/centerOrder/centerOrder"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      deposit: this.data.list[0].orderdeposit,
      rent: this.data.list[0].orderrent,
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
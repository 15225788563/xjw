// pages/basket/basketcomplete/basketcomplete.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        name:"何小月",
        Reserve:"2019.08.14",
        number: [
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
        ],
        payment:"2019.10.15",
        basketnumber:200,
      },
      {
        name: "何小月",
        Reserve: "2019.08.14",
        number: [
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
        ],
        payment: "2019.10.15",
        basketnumber: 300,
      },
      {
        name: "何小月",
        Reserve: "2019.08.14",
        number: [
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
        ],
        payment: "2019.10.15",
        basketnumber: 400,
      },
      {
        name: "何小月",
        Reserve: "2019.08.14",
        number: [
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
          { number: "2019007" },
        ],
        payment: "2019.10.15",
        basketnumber: 500,
      },
    ]
  },

  Return:function(e){
    wx.reLaunch({
      url: "../../basket/basketquery/basketquery"
    })
  },

  whole:function(e){
    console.log("点击全部")
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
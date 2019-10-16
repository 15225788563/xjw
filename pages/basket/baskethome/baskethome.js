// pages/basket/baskethome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bnrUrl: [
      {
        "url": "/imgs/banner01.jpg",
      },
      {
        "url": "/imgs/banner02.jpg",
      },
      {
        "url": "/imgs/banner03.jpg",
      }
    ],
    navs: [
      {
        "id": "1",
        "url": "/imgs/1.png",
        "name": "筐子租赁"
      },
      {
        "id": "2",
        "url": "/imgs/1.png",
        "name": "筐子归还"
      },
      {
        "id": "3",
        "url": "/imgs/1.png",
        "name": "筐子查询"
      },
      {
        "id": "4",
        "url": "/imgs/1.png",
        "name": "筐子共享"
      },
    ],
    Orderlist: [
      {
        "Ordername": "50cm100个筐子",
        "Ordertiem": "2019-6-11 10:00",
        "Ordernumber": "15678566944645984",
        "Orderrent": "100",
        "Orderdeposit": "30",
        "Orderstate": "已完成",
      },
      {
        "Ordername": "50cm100个筐子",
        "Ordertiem": "2019-6-11 10:00",
        "Ordernumber": "15678566944645984",
        "Orderrent": "100",
        "Orderdeposit": "30",
        "Orderstate": "待付款",
      },
      {
        "Ordername": "50cm100个筐子",
        "Ordertiem": "2019-6-11 10:00",
        "Ordernumber": "15678566944645984",
        "Orderrent": "100",
        "Orderdeposit": "30",
        "Orderstate": "待领筐",
      },
    ]
  },

  btn:function(e){
    let id = e.currentTarget.dataset.navid;
    switch(id){
      case '1':
        console.log(id)
        break;
      case '2':
        console.log(id)
        break;
      case '3':
        wx.reLaunch({
          url: "../../basket/basketquery/basketquery"
        })
        break;
      case '4':
        console.log(id)
    }
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
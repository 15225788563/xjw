// pages/basket/orderContent/orderContent.js
const app = getApp()
const util = require('../../../utils/util.js');
const utilMd4 = require('../../../utils/MD5.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userid:'',
    userList:[],
    Orderlist: [],
    baskettype:[],
    list:{},
    Url:'',
  },

  Return(){
    wx.reLaunch({
      url: '../../basket/basketquery/basketquery',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let orderid = options.order
    console.log(orderid)
    let sysInfo = app.globalData.sysInfo;
    let time = util.formatTime(new Date());
    wx.getStorage({
      key: 'baskettype',
      success: function(res) {
        console.log(res.data)
        that.setData({
          baskettype:res.data
        })
      },
    })
    
    let b65 = utilMd4.hexMD4(time + app.globalData.key + orderid).toLocaleUpperCase();
    let Url = 'http://49.234.123.71/api/Basket_/CreateQrImage?Id=' + orderid + '&securityStr=' + b65;
    //获取二维码
    app.Promise({ url:'api/Basket_/CreateQrImage?Id=' + orderid + '&securityStr=' + b65, method: "GET" }).then((res) => {
      console.log(res)
        that.setData({
          Url: Url
        })
    })

    //获取订单
    wx.getStorage({
      key: 'modelList',
      success: function(res) {
        console.log(res)
        that.setData({
          userList:res.data,
          userid :res.data.ID
        })
        let b64 = utilMd4.hexMD4(time + app.globalData.key + orderid + that.data.userid+2).toLocaleUpperCase();
        app.Promise({ url: 'api/Basket_/GetBasketToUserOrder?orderId=' + orderid + '&userId=' + that.data.userid + '&type=2&securityStr=' + b64, method: "GET" }).then((res) => {
          console.log(res)
          if(res.errInfo=="0"){
            that.setData({
              Orderlist: res.modelList
            })
            that.puth()
          }
        })
      },
    })
  },

  puth() {
    let that = this
    let order = that.data.Orderlist;
    let basket = that.data.baskettype;
    for (let i in order) {
      for (let j in basket) {
        if (order[i].BasketType == basket[j].ID) {
          order[i].Capacity = basket[j].Capacity
          order[i].RentPrice = basket[j].RentPrice
          order[i].Detail = basket[j].Detail
          order[i].DepositPrice = basket[j].DepositPrice
        }
      }
    }
    console.log(order)
    that.setData({
      Orderlist: order,
      list:that.data.Orderlist[0]
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
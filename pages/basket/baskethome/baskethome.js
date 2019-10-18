// pages/basket/baskethome.js
const app = getApp()
const util = require('../../../utils/util.js');
const utilMd4 = require('../../../utils/MD5.js');
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
    Orderlist: [],
    baskettype:[]
  },

  btn:function(e){
    let id = e.currentTarget.dataset.navid;
    switch(id){
      case '1':
        wx.reLaunch({
          url: "../../basket/basketmodify/basketmodify"
        })
        break;
      case '2':
        wx.reLaunch({
          url: "../../basket/return/return"
        })
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

  orderdetails(e){
    let OrderStatus = e.currentTarget.dataset.orderstatus;
    console.log(OrderStatus)
    let orderid = e.currentTarget.dataset.orderid
    console.log(orderid);
    if (OrderStatus==0){
      wx.reLaunch({
        url: '../../basket/orderIndex/orderIndex?order=' + orderid,
      })
    } else if (OrderStatus==2){
      wx.reLaunch({
        url: '../../basket/orderContent/orderContent?order=' + orderid,
      })
    } else if (OrderStatus == 3){
      wx.reLaunch({
        url: "../../basket/basketcomplete/basketcomplete?orderid=" + orderid
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    let sysInfo = app.globalData.sysInfo;
    let time = util.formatTime(new Date());
    let b65 = utilMd4.hexMD4(time + app.globalData.key).toLocaleUpperCase();
    // 框子类型
    wx.request({
      url: app.globalData.url + 'api/Basket_/GetBasketTypeList?securityStr=' + b65,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        that.setData({
          baskettype: res.data.modelList
        })
        console.log(that.data.baskettype)
        wx.setStorage({
          key: 'baskettype',
          data: res.data.modelList,
        })
      }
    })
    wx.getStorage({
      key: 'modelList',
      success: function(res) {
        console.log(res.data.ID)
        let userid=res.data.ID;
        let username= res.data.UserName
        let b66 = utilMd4.hexMD4(time + app.globalData.key + userid + username + 0 + 3).toLocaleUpperCase();
        wx.request({
          url: app.globalData.url + 'api/Basket_/GetBasketToUserList?userId=' + userid + '&userName=' + username + '&start=0&count=3&type=&securityStr=' + b66,
          header: {
            'content-type': 'application/json'
          },
          success(res) {
            
            that.setData({
              Orderlist: res.data.modelList
            })
            console.log(that.data.Orderlist)
            that.puth()
          },
        })
      },
    })
    
  },

  puth() {
    let that = this;
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
        if (order[i].OrderStatus == 0) {
          order[i].BasketTypename = "待付款"
        } else if (order[i].OrderStatus == 2) {
          order[i].BasketTypename = "待还筐"
        } else if (order[i].OrderStatus == 3) {
          order[i].BasketTypename = "已完成"
        }
      }
    }
    that.setData({
      Orderlist: order
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
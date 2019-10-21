// pages/basket/basketquery/basketquery.js
const app = getApp()
const util = require('../../../utils/util.js');
const utilMd4 = require('../../../utils/MD5.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 4,
    start:0,
    count:10,
    Orderlist:[],
    baskettype:[],
    footer:false
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
    // console.log(e.currentTarget.dataset.orderid)
    let orderid = e.currentTarget.dataset.orderid
    wx.reLaunch({
      url: "../../basket/basketcomplete/basketcomplete?orderid="+orderid
    })
  },

  payOrder(e){
    console.log(e)
    let orderid = e.currentTarget.dataset.order.OrderId
    let RentPrice = e.currentTarget.dataset.order.RentPrice
    let SumCount = e.currentTarget.dataset.order.SumCount
    let PayRent = e.currentTarget.dataset.order.PayRent
    let PayDeposit = e.currentTarget.dataset.order.PayDeposit
    let OrderDate = e.currentTarget.dataset.order.OrderDate
    wx.navigateTo({
      url: "../../basket/payOrder/payOrder?orderid=" + orderid + '&RentPrice=' + RentPrice + '&SumCount=' + SumCount + '&PayRent=' + PayRent + '&PayDeposit=' + PayDeposit + '&OrderDate=' + OrderDate
    })  
  },

  modify:function(e){
    let orderid = e.currentTarget.dataset.orderid
    wx.navigateTo({
      url: "../../basket/basketmodify/basketmodify?orderid="+orderid
    })  
  },

  /**
   * 自定义函数--导航栏切换样式
   */
  changeOil: function (e) {
    var that = this
    // console.log(e.target.dataset.num);
    this.setData({
      num: e.target.dataset.num
    })
    switch(e.target.dataset.num){
      case '4':
        that.setData({
          footer: true,
          start: 0,
        })
        wx.getStorage({
          key: 'modelList',
          success: function (res) {
            let start = that.data.start;
            let count = that.data.count;
            let userid = res.data.ID
            let name = res.data.UserName
            let sysInfo = app.globalData.sysInfo;
            let time = util.formatTime(new Date());
            let b64 = utilMd4.hexMD4(time + app.globalData.key + userid + name + start + that.data.count + '').toLocaleUpperCase();
            app.Promise({ url: 'api/Basket_/GetBasketToUserList?userId=' + userid + '&userName=' + name + '&start=' + start + '&count=' + that.data.count + '&type=&securityStr=' + b64, method: "GET" }).then((res) => {
              // console.log(res)
              if(res.errInfo=="0"){
                if (res.modelList) {
                  var arr1 = that.data.Orderlist;
                  var arr2 = res.modelList;
                  arr1 = arr1.concat(arr2);
                  that.setData({
                    Orderlist: arr1
                  })
                } else {
                  console.log("我是有底线的")
                  that.setData({
                    footer: true,
                  })
                }
                that.puth()
              }
            })
          },
        })
        break;
      case '1':
        that.setData({
          Orderlist: [],
          start: 0,
          count: 10
        })
        wx.getStorage({
          key: 'modelList',
          success: function (res) {
            let start = that.data.start;
            let userid = res.data.ID
            let name = res.data.UserName
            let sysInfo = app.globalData.sysInfo;
            let time = util.formatTime(new Date());
            let b64 = utilMd4.hexMD4(time + app.globalData.key + userid + name + start + that.data.count + 0).toLocaleUpperCase();
            app.Promise({ url: 'api/Basket_/GetBasketToUserList?userId=' + userid + '&userName=' + name + '&start=' + start + '&count=' + that.data.count + '&type=0&securityStr=' + b64, method: "GET" }).then((res) => {
              // console.log(res)
              if (res.errInfo == "0") {
                if (res.modelList) {
                  var arr1 = that.data.Orderlist;
                  var arr2 = res.modelList;
                  arr1 = arr1.concat(arr2);
                  that.setData({
                    Orderlist: arr1
                  })
                } else {
                  console.log("我是有底线的")
                  that.setData({
                    footer: true,
                  })
                }
                that.puth()
              }
            })
          },
        })
        break; 
      case '2':
        that.setData({
          Orderlist: [],
          start: 0,
          count: 10
        })
        wx.getStorage({
          key: 'modelList',
          success: function (res) {
            let start = that.data.start;
            let userid = res.data.ID
            let name = res.data.UserName
            let sysInfo = app.globalData.sysInfo;
            let time = util.formatTime(new Date());
            let b64 = utilMd4.hexMD4(time + app.globalData.key + userid + name + start + that.data.count + 2).toLocaleUpperCase();
            app.Promise({ url: 'api/Basket_/GetBasketToUserList?userId=' + userid + '&userName=' + name + '&start=' + start + '&count=' + that.data.count + '&type=2&securityStr=' + b64, method: "GET" }).then((res) => {
              // console.log(res)
              if (res.errInfo == "0") {
                if (res.modelList) {
                  var arr1 = that.data.Orderlist;
                  var arr2 = res.modelList;
                  arr1 = arr1.concat(arr2);
                  that.setData({
                    Orderlist: arr1
                  })
                } else {
                  console.log("我是有底线的")
                  that.setData({
                    footer: true,
                  })
                }
                that.puth()
              }
            })
          },
        })
        break;
      case '3':
        that.setData({
          Orderlist: [],
          start: 0,
          count:10
        })
        wx.getStorage({
          key: 'modelList',
          success: function (res) {
            let start = that.data.start;
            let userid = res.data.ID
            let name = res.data.UserName
            let sysInfo = app.globalData.sysInfo;
            let time = util.formatTime(new Date());
            let b64 = utilMd4.hexMD4(time + app.globalData.key + userid + name + start + that.data.count + 3).toLocaleUpperCase();
            app.Promise({ url: 'api/Basket_/GetBasketToUserList?userId=' + userid + '&userName=' + name + '&start=' + start + '&count=' + that.data.count + '&type=3&securityStr=' + b64, method: "GET" }).then((res) => {
              // console.log(res)
              if (res.errInfo == "0") {
                if (res.modelList) {
                  var arr1 = that.data.Orderlist;
                  var arr2 = res.modelList;
                  arr1 = arr1.concat(arr2);
                  that.setData({
                    Orderlist: arr1
                  })
                } else {
                  console.log("我是有底线的")
                  that.setData({
                    footer: true,
                  })
                }
                that.puth()
              }
            })
          },
        })
        break;
    }
  },

  //待取筐详情
  Takebasket(e){
    let orderid = e.currentTarget.dataset.orderid
    wx.navigateTo({
      url: '../../basket/orderContent/orderContent?order='+orderid,
    })
  },

  //待付款详情
  orderdetails(e){
    console.log(e)
    let orderid = e.currentTarget.dataset.orderid
    wx.reLaunch({
      url: '../../basket/orderIndex/orderIndex?order='+orderid,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 订单状态
    let that = this
    let sysInfo = app.globalData.sysInfo;
    let time = util.formatTime(new Date());
    let b64 = utilMd4.hexMD4(time+app.globalData.key+0+10).toLocaleUpperCase();
    app.Promise({ url: 'api/Basket_/GetBasketOrderStatus?start=0&count=10&securityStr=' + b64, method: "GET" }).then((res) => {
      
    })

    wx.getStorage({
      key: 'baskettype',
      success: function (res) {
        // console.log(res.data)
        that.setData({
          baskettype: res.data
        })
      },
    })
    

    wx.getStorage({
      key: 'modelList',
      success: function (res) {
        let start = that.data.start;
        let userid = res.data.ID
        let name = res.data.UserName
        let sysInfo = app.globalData.sysInfo;
        let time = util.formatTime(new Date());
        let b66 = utilMd4.hexMD4(time + app.globalData.key + userid + name + start + that.data.count + '').toLocaleUpperCase();
        app.Promise({ url: 'api/Basket_/GetBasketToUserList?userId=' + userid + '&userName=' + name + '&start=' + start + '&count=' + that.data.count + '&type=&securityStr=' + b66, method: "GET" }).then((res) => {
          if(res.errInfo=="0"){
            if (res.modelList) {
              var arr1 = that.data.Orderlist;
              var arr2 = res.modelList;
              arr1 = arr1.concat(arr2);
              that.setData({
                Orderlist: arr1
              })
            } else {
              console.log("我是有底线的")
              that.setData({
                footer: true,
              })
            }
            that.puth()
          }
        })
      },
    })
  },

  puth(){
    let that = this
    let order = that.data.Orderlist;
    let basket = that.data.baskettype;
    for (let i in order){
      for (let j in basket){
        if (order[i].BasketType == basket[j].ID){
          order[i].Capacity = basket[j].Capacity
          order[i].RentPrice = basket[j].RentPrice
          order[i].Detail = basket[j].Detail
          order[i].DepositPrice = basket[j].DepositPrice
        }
      }
    }
    // console.log(order)
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
    let that = this;
    that.setData({
      start: that.data.start + that.data.count 
    })

    wx.getStorage({
      key: 'modelList',
      success: function (res) {
        let start = that.data.start;
        let userid = res.data.ID
        let name = res.data.UserName
        let sysInfo = app.globalData.sysInfo;
        let time = util.formatTime(new Date());
        let b66 = utilMd4.hexMD4(time + app.globalData.key + userid + name + start + that.data.count + '').toLocaleUpperCase();
        app.Promise({ url: 'api/Basket_/GetBasketToUserList?userId=' + userid + '&userName=' + name + '&start=' + start + '&count=' + that.data.count + '&type=&securityStr=' + b66, method: "GET" }).then((res) => {
          console.log(res)
          if(res.errInfo=="0"){
              var arr1 = that.data.Orderlist;
              var arr2 = res.modelList;
              arr1 = arr1.concat(arr2);
              that.setData({
                Orderlist: arr1
              })
            that.puth()
          }else if(res.errInfo=="-1"){
            console.log("我是有底线的")
            that.setData({
              footer: true,
            })
          }
        })
      },
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
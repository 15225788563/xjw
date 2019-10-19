// pages/home/home.js
const app = getApp()
const utilMd4 = require('../../utils/MD5.js');  
const util = require('../../utils/util.js');  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hemo:"订单记录",
    search: "/imgs/13.png",
    img:"/imgs/3.png",
    lands:"",
    nav:[
        {
          "id":"1",
          "url":"/imgs/1.png",
          "name":"筐子管理"
        },
        {
          "id": "2",
          "url": "/imgs/1.png",
          "name": "库存管理"
        },
        {
          "id": "3",
          "url": "/imgs/1.png",
          "name": "应收应付"
        },
        {
          "id": "4",
          "url": "/imgs/1.png",
          "name": "货物采购"
        },
        {
          "id": "5",
          "url": "/imgs/1.png",
          "name": "货物销售"
        },
        {
          "id": "6",
          "url": "/imgs/1.png",
          "name": "客户管理"
        },
        {
          "id": "7",
          "url": "/imgs/1.png",
          "name": "发起需求"
        },
    ],
    contact:[],
  },

  /*
   * 自定义函数：导航栏点击跳转页面
   */
  navbtn(e){
    let id = e.currentTarget.dataset.navid;
    switch(id){
      case '1':
        console.log('筐子管理')
        wx.reLaunch({
          url: "../basket/baskethome/baskethome"
        })
        break;
      case '2':
        console.log(id)
        break;
      case '3':
        console.log(id)
        break;
      case '4':
        console.log(id)
        break;
      case '5':
        console.log(id)
        break;
      case '6':
        console.log(id)
        break;
      case '7':
        console.log(id)
    }
    
  },
  Lands(){
    wx.navigateTo({
      url: '../Land/Land',
    })
  },
  /*
   * 自定义函数：需求滚动到顶部
   */
  upper(){
      
  },

  /*
   * 自定义函数：需求滚动到底部
   */
  lower(){

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    wx.getStorage({
      key: 'modelList',
      success: function(res) {
        console.log(res.data.ID)
        _this.setData({
          userID: res.data.ID
        })
        
        let sysInfo = app.globalData.sysInfo;
        let time = util.formatTime(new Date());
        let b64 = utilMd4.hexMD4(time + app.globalData.key + _this.data.userID).toLocaleUpperCase();
        // console.log(b64)
        // 最新需求
        app.Promise({ url: 'api/Home_Page/GetDemanddetails?detailId=' + _this.data.userID + '&securityStr=' + b64, method: "GET" }).then((res) => {
          // console.log(res)
          if(res.errInfo=="0"){
            _this.setData({
              demandlist: res.modelList
            })
          }
        })
        // 订单记录
        app.Promise({ url: 'api/Home_Page/GetOrderDetailById?Id=' + _this.data.userID + '&securityStr=' + b64, method: "GET" }).then((res) => {
          // console.log(res)
          if (res.errInfo == "0") {
            _this.setData({
              order: res.modelList
            })
          }
        })

        //销售额
        app.Promise({ url:'api/Home_Page/GetTodayPay?Id='+ _this.data.userID+'&securityStr='+b64, method: "GET" }).then((res) => {
          // console.log(res)
          if (res.errInfo == "0") {
            _this.setData({
              ShouldGet: res.modelList[0].ShouldGet,
              TodayBuy: res.modelList[0].TodayBuy,
              TodaySell: res.modelList[0].TodaySell
            })
          }
        })
        //常用联系人
        app.Promise({ url: 'api/Home_Page/GetGetTopContacts?userId=' + _this.data.userID + '&securityStr=' + b64, method: "GET" }).then((res) => {
          // console.log(res)
          if (res.errInfo == "0") {
            _this.setData({
              contact: res.modelList
            })
          }
        })
      },
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
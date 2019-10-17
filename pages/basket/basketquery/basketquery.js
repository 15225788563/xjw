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
    Orderlist:[]
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
    // console.log(e.currentTarget.dataset.orderid)
    let orderid = e.currentTarget.dataset.orderid
    setTimeout(function () {
      wx.reLaunch({
        url: "../../basket/basketmodify/basketmodify?orderid="+orderid
      })  
    }, 500)
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
        that.query("")
        break;
      case '1':
        that.setData({
          Orderlist: []
        })
        that.query(0)
        break; 
      case '2':
        that.setData({
          Orderlist: []
        })
        that.query(2)
        break;
      case '3':
        that.setData({
          Orderlist: []
        })
        that.query(3)
        break;
    }
  },

  query:function(e){
    let key = e;
    let start = this.data.start;
    if (key==2||key==3){
      var count = 40
    }else{
      var count = 10;
    }
    let that = this
    let sysInfo = app.globalData.sysInfo;
    let time = util.formatTime(new Date());
    wx.getStorage({
      key: 'modelList',
      success: function(res) {
        // console.log(res.data)
        let userid = res.data.ID
        let name = res.data.UserName
        let b64 = utilMd4.hexMD4(time + app.globalData.key + userid + name + start + count + key).toLocaleUpperCase();
        
        wx.request({
          url: app.globalData.url + 'api/Basket_/GetBasketToUserList?userId=' + userid + '&userName=' + name + '&start=' + start + '&count=' + count +'&type='+key+'&securityStr='+b64,
          header: {
            'content-type': 'application/json'
          },
          success(res) {
              console.log(res.data.modelList)
              var arr1 = that.data.Orderlist;
              var arr2 = res.data.modelList;
              arr1 = arr1.concat(arr2);
              that.setData({
                Orderlist: arr1
              })
          }, 
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    let sysInfo = app.globalData.sysInfo;
    let time = util.formatTime(new Date());
    let b64 = utilMd4.hexMD4(time+app.globalData.key+0+10).toLocaleUpperCase();
    let b65 = utilMd4.hexMD4(time + app.globalData.key + 0 + 10).toLocaleUpperCase();
    wx.request({
      url: app.globalData.url + 'api/Basket_/GetBasketOrderStatus?start=0&count=10&securityStr=' + b64,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        // console.log(res.data.modelList)
      }
    })
    wx.request({
      url: app.globalData.url + 'api/Basket_/GetBasketTypeList?start=0&count=10&securityStr=' + b65,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data.modelList)
        basket: res.data.modelList
      }
    })

    that.query("")
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
      count: 10,
      start: that.data.start + that.data.count
    })

    that.query("")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
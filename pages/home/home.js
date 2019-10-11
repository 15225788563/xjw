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
    id:123,
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
    contact:[
      {
        "url": "/imgs/6.png",
        "name": "李光洙-盐城"
      },
      {
        "url": "/imgs/6.png",
        "name": "张晶晶-盐城"
      },
      {
        "url": "/imgs/6.png",
        "name": "王思-盐城"
      },
      {
        "url": "/imgs/6.png",
        "name": "王思-盐城"
      },
      {
        "url": "/imgs/6.png",
        "name": "王思-盐城"
      }
    ],
    demandlist:[
      {
        "url":"/imgs/14.png",
        "name":"王思思发布了一条需求",
        "tiem":"2018/10:00-12:00",
        "content":"需要五吨胡萝卜"
      },
      {
        "url": "/imgs/14.png",
        "name": "王思思发布了一条需求",
        "tiem": "2018/10:00-12:00",
        "content": "需要五吨胡萝卜"
      },
      {
        "url": "/imgs/14.png",
        "name": "王思思发布了一条需求",
        "tiem": "2018/10:00-12:00",
        "content": "需要五吨胡萝卜"
      },
      {
        "url": "/imgs/14.png",
        "name": "王思思发布了一条需求",
        "tiem": "2018/10:00-12:00",
        "content": "需要五吨胡萝卜"
      },
      {
        "url": "/imgs/14.png",
        "name": "王思思发布了一条需求",
        "tiem": "2018/10:00-12:00",
        "content": "需要五吨胡萝卜"
      },
      {
        "url": "/imgs/14.png",
        "name": "王思思发布了一条需求",
        "tiem": "2018/10:00-12:00",
        "content": "需要五吨胡萝卜"
      },
      {
        "url": "/imgs/14.png",
        "name": "王思思发布了一条需求",
        "tiem": "2018/10:00-12:00",
        "content": "需要五吨胡萝卜"
      },
      {
        "url": "/imgs/14.png",
        "name": "王思思发布了一条需求",
        "tiem": "2018/10:00-12:00",
        "content": "需要五吨胡萝卜"
      },
      {
        "url": "/imgs/14.png",
        "name": "王思思发布了一条需求",
        "tiem": "2018/10:00-12:00",
        "content": "需要五吨胡萝卜"
      },
      {
        "url": "/imgs/14.png",
        "name": "王思思发布了一条需求",
        "tiem": "2018/10:00-12:00",
        "content": "需要五吨胡萝卜"
      }
    ],
    order:[
      {
        "ordernumber":"466154221111",
        "ordername":"飘香大蒜苏北产地一吨起送",
        "rmb":"126",
        "number":"6",
        "Total":"2563.79",
      },
      {
        "ordernumber": "466154221111",
        "ordername": "飘香大蒜苏北产地一吨起送",
        "rmb": "126",
        "number": "6",
        "Total": "2563.79",
      },
      {
        "ordernumber": "466154221111",
        "ordername": "飘香大蒜苏北产地一吨起送",
        "rmb": "126",
        "number": "6",
        "Total": "2563.79",
      },
    ],
    key:null
  },

  /*
   * 导航栏点击跳转页面
   */
  navbtn(e){

    // 取值全局变量
    let id = e.currentTarget.dataset.navid;
    console.log();
    
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let sysInfo = app.globalData.sysInfo;
    this.setData({
      key:app.globalData.key
    })
    var time = util.formatTime(new Date());
    console.log(time)
    let b64 = utilMd4.hexMD4(time + that.data.key).toLocaleUpperCase();
    wx.request({
      url: 'http://192.168.0.139:801/api/Basket/GetBasketTypeList?securityStr=' + b64,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
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
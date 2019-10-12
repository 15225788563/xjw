// pages/home/home.js
const app = getApp()
const utilMd4 = require('../../utils/MD5.js');  
const util = require('../../utils/util.js');
const Mcaptcha = require('../../utils/mcaptcha.js');  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hemo:"订单记录",
    search: "/imgs/13.png",
    img:"/imgs/3.png",
    userName:13183181292,
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
  },

  /*
   * 自定义函数：导航栏点击跳转页面
   */
  navbtn(e){
    let id = e.currentTarget.dataset.navid;
    console.log(id);
  },
 btn(){
   wx.navigateTo({
     url: '../Land/Land'
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
    let that = this;
    wx.getStorage({
      key: 'modelList',
      success: function (res) {
        console.log(res.data.ID)
        that.setData({
          userID:res.data.ID
        })
        let sysInfo = app.globalData.sysInfo;
        var time = util.formatTime(new Date());
        let b64 = utilMd4.hexMD4(time + app.globalData.key + res.data.ID).toLocaleUpperCase();
        console.log(b64)
        wx.request({
          url: 'http://192.168.0.139:801/api/Home_Page/GetGetTopContacts?userId=' + res.data.ID + '&securityStr=' + b64,
          header: {
            'content-type': 'application/json' // 默认值
          },
          method: "GET",
          success: function (res) {
            //请求成功后的回调
            that.setData({
              contact: res.data.modelList
            })
            console.log(that.data.contact)
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
// pages/My/My.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userimg:"",
    wallet:[
      {
        "walletname":"总资产(元)",
        "walleturl":"/imgs/9.png",
        "walletkey":"45298.5"
      },
      {
        "walletname": "昨日收益(元)",
        "walleturl": "",
        "walletkey": "45298.5"
      },
      {
        "walletname": "可用余额(元)",
        "walleturl": "",
        "walletkey": "45298.5"
      },
      {
        "walletname": "卡劵包",
        "walleturl": "",
        "walletkey": "45298.5"
      }
    ],
    function:[
      {
        'id':"1",
        "url":"/imgs/11.png",
        "name":"我的积分",
        "img":"/imgs/12.png",
      },
      {
        'id': "2",
        "url": "/imgs/11.png",
        "name": "密码修改",
        "img": "/imgs/12.png",
      },
      {
        'id': "3",
        "url": "/imgs/11.png",
        "name": "子账户管理",
        "img": "/imgs/12.png",
      },
      {
        'id': "4",
        "url": "/imgs/11.png",
        "name": "档口管理",
        "img": "/imgs/12.png",
      },
      {
        'id': "5",
        "url": "/imgs/11.png",
        "name": "会员信息",
        "img": "/imgs/12.png",
      },
      {
        'id': "6",
        "url": "/imgs/11.png",
        "name": "操作日记",
        "img": "/imgs/12.png",
      },
      {
        'id': "7",
        "url": "/imgs/11.png",
        "name": "微信推送(绑定微信)",
        "img": "/imgs/12.png",
      },
      {
        'id': "8",
        "url": "/imgs/11.png",
        "name": "智能提醒(选择提醒选项)",
        "img": "/imgs/12.png",
      }
    ],
  },

  navbtn(e){
    let id = e.currentTarget.dataset.navid;
    switch (id) {
      case '1':
        console.log(id)
        break;
      case '2':
        console.log("修改密码")
        wx.reLaunch({
          url:"../Reset/Reset"
        })
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
        break;
      case '8':
        console.log(id)
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'userimg',
      success: function(res) {
        console.log(res.data)
        that.setData({
          userimg:res.data
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
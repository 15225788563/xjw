//index.js
//获取应用实例
const app = getApp()
const utilMd4 = require('../../utils/MD5.js');
const util = require('../../utils/util.js');

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    hnd:true,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function () {
    var that = this;
    let sysInfo = app.globalData.sysInfo;

    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              //从数据库获取用户信息
              that.queryUsreInfo();
            }
          });
        }
      }
    })
  },

  bindGetUserInfo: function (e) {
    let that = this;
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      // console.log(e.detail.userInfo)
      wx.sett
      //授权成功后，传输openid判断
      let time = util.formatTime(new Date());
      let b64 = utilMd4.hexMD4(time + app.globalData.key + app.globalData.openid).toLocaleUpperCase();
      console.log(b64)
      app.Promise({ url:"api/Home_Page/GetUserInfoByWxCode?wxCode="+app.globalData.openid + "&securityStr="+that.data.b64, method:"GET"}).then((res)=>{
        console.log(res)
        if (res.errInfo == '0') {
          console.log("已注册 调到登录页")
          wx.setStorage({
            key: 'modelList',
            data: res.modelList[0],
          })
          wx.reLaunch({
            url: '../home/home'
          })
        } else if (res.errInfo == '-1') {
          console.log(res)
          console.log("还未注册 调到注册页")
          wx.reLaunch({
            url: '../register/register'
          })
        }
      })

    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  },

  getUserInfo: function(e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    // console.log(userInfo)
  },


  queryUsreInfo: function () { 
    let that = this;
    let sysInfo = app.globalData.sysInfo;
    let time = util.formatTime(new Date());
    let b64 = utilMd4.hexMD4(time + app.globalData.key + app.globalData.openid).toLocaleUpperCase();
    console.log(b64)
    app.Promise({ url: "api/Home_Page/GetUserInfoByWxCode?wxCode=" + app.globalData.openid + "&securityStr=" + b64, method: "GET" }).then((res) => {
      getApp().globalData.userInfo = res.data;
      console.log(res)
      if (res.errInfo == '0') {
        console.log("已注册 调到登录页")
        wx.setStorage({
          key: 'modelList',
          data: res.modelList[0],
        })
        wx.reLaunch({
          url: '../home/home'
        })
      } else if (res.errInfo == '-1') {
        console.log(res)
        console.log("还未注册 调到注册页")
        wx.reLaunch({
          url: '../register/register'
        })
      }
    })
  },
})

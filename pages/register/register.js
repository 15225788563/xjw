// pages/register/register.js
const app = getApp()
const utilMd4 = require('../../utils/MD5.js');
const util = require('../../utils/util.js');  
const Mcaptcha = require('../../utils/mcaptcha.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  

  /**
   * 自定义函数 获取手机号
   */
  userNameInput: function (e) {
    let that = this
      that.setData({
        userName: e.detail.value
      })
  },
  /**
   * 自定义函数 获取密码
   */
  passWord: function (e) {
    this.setData({
      passWord: e.detail.value
    })
  },
  pass: function (e) {
    this.setData({
      pass: e.detail.value
    })
  },
  veri: function (e) {
    this.setData({
      veri: e.detail.value
    })
  },

  /**
   * 自定义函数 点击传输
   */
  register(){
    let that = this;
    let name = that.data.userName
    let pass = that.data.passWord
    let pas = that.data.pass
    let veri = that.data.veri
    let num = that.data.num
    if (!(/^1[3456789]\d{9}$/).test(name)){
      console.log("手机号码格式不对")
    }else if(pass !== pas){
      console.log("两次密码不同 请核对")
    } else if (veri.toLocaleUpperCase() != num.toLocaleUpperCase()){ 
      console.log("验证码错误")
    }else{
      let sysInfo = app.globalData.sysInfo;
      let time = util.formatTime(new Date());
      let b64 = utilMd4.hexMD4(time + app.globalData.key + name + pass).toLocaleUpperCase();
      console.log(b64)
      wx.request({
        url: 'http://192.168.0.139:801/api/Home_Page/AddUser?userName=' + name + '&passWord=' + pass + '&securityStr=' + b64,
        header: {
          'content-type': 'application/json' // 默认值
        },
        method: "POST",
        success(res) {
          console.log(res.data)
        }
      })
    }
  },

  hemo() {
    wx.switchTab({
      url: '../home/home',
    })
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
    var that = this;
    var num = that.getRanNum();
    // console.log(num)
    this.setData({
      num: num
    })
    new Mcaptcha({
      el: 'canvas',
      width: 80,//对图形的宽高进行控制
      height: 30,
      code: num
    });
  },

  getRanNum: function () {
    var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var pwd = '';
    for (var i = 0; i < 4; i++) {
      if (Math.random() < 48) {
        pwd += chars.charAt(Math.random() * 48 - 1);
      }
    }
    return pwd;
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
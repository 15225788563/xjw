// pages/register/register.js
const app = getApp()
const util = require('../../utils/util.js');  
const utilMd4 = require('../../utils/MD5.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',//手机号
    code: '',//验证码
    iscode: null,//用于存放验证码接口里获取到的code
    codename: '获取验证码',
    passWord:'',
    pass:''
  },

  

  /**
   * 自定义函数 获取手机号
   */
  getPhoneValue: function (e) {
    this.setData({
      phone: e.detail.value
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
  getCodeValue: function (e) {
    this.setData({
      code: e.detail.value
    })
  },

  //获取验证码
  getVerificationCode() {
    let that = this;
    let myreg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
    if (this.data.phone == "") {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
        duration: 1000
      })
      disabled: false
      return false;
    } else if (!myreg.test(this.data.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 1000
      })
      disabled: false
      return false;
    } else {
      // let sysInfo = app.globalData.sysInfo;
      let time = util.formatTime(new Date());
      let phone = that.data.phone

      let b64 = utilMd4.hexMD4(time + app.globalData.key + phone).toLocaleUpperCase();
      wx.request({
        'url': 'http://49.234.123.71/api/Home_Page/SendVerCodeSms?phoneNumber=' + phone + '&SecurityStr=' + b64,
        success(res) {
          console.log(res)
          // that.setData({
          //   iscode: res.data.data
          // })
          var num = 61;
          var timer = setInterval(function () {
            num--;
            if (num <= 0) {
              clearInterval(timer);
              that.setData({
                codename: '重新发送',
                disabled: false
              })
            } else {
              that.setData({
                codename: num + "s"
              })
            }
          }, 1000)
        }
      })
    }
    that.setData({
      disabled: true
    })
  },
  //提交表单信息
  register: function () {
    let that = this;
    let sysInfo = app.globalData.sysInfo;
    let time = util.formatTime(new Date());
    let verCode = that.data.code
    let myreg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
    if (this.data.phone == "") {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
        duration: 1000
      })
      return false;
    } else if (!myreg.test(this.data.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 1000
      })
      return false;
    }
    if (this.data.code == "") {
      wx.showToast({
        title: '验证码不能为空',
        icon: 'none',
        duration: 1000
      })
      return false;
    } else if(this.data.passWord != this.data.pass){
      wx.showToast({
        title: '重复密码错误',
        icon: 'none',
        duration: 1000
      })
    } else{
      let b64 = utilMd4.hexMD4(time + app.globalData.key + that.data.phone + that.data.passWord + app.globalData.openid + verCode).toLocaleUpperCase();

      app.Promise({url:'api/Home_Page/AddUserByWx?userName=' + that.data.phone + '&passWord=' + that.data.passWord + '&wxCode=' + app.globalData.openid + '&verCode=' + verCode + '&securityStr=' + b64, method:"POST",}).then((res) =>{
          console.log(res)
          if (res.errInfo=="-5"){
            wx.showToast({
              title: '验证码错误',
              icon: 'none',
              duration: 1000
            })
          } else if (res.errInfo == "0"){
            console.log(res)
            
          }
        })
    }
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
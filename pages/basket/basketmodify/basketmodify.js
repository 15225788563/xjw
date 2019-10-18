// pages/basket/basketmodify/basketmodify.js
const app = getApp()
const util = require('../../../utils/util.js');
const utilMd4 = require('../../../utils/MD5.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: 0,
    number: 1,
    Days: 1,
    num: 0,
  },

  /**
   * 自定义函数--切换选中
   */
  changeOil: function (e) {
    var key = e.currentTarget.dataset.num
    // console.log(key)
    this.setData({
      num: e.currentTarget.dataset.num,
      deposit: this.data.list[key].RentPrice,
      rent: this.data.list[key].DepositPrice,
      bastet: this.data.list[key],
      ID: this.data.list[key].ID,
      detail: this.data.list[key].Detail,
    
    })
  },

  /**
   * 自定义函数--加号 减号
   */
  addDays: function (e) {
    this.setData({
      Days: this.data.Days + 1
    });
  },

  delDays: function (e) {
    var that = this
    if (that.data.Days > 1) {
      that.setData({
        Days: that.data.Days - 1
      });
    }
  },

  addnumber: function (e) {
    this.setData({
      number: this.data.number + 1
    });
  },

  delDays: function (e) {
    var that = this
    if (that.data.Days > 1) {
      that.setData({
        Days: that.data.Days - 1
      });
    }
  },

  delnumber: function (e) {
    var that = this
    if (that.data.number > 1) {
      that.setData({
        number: that.data.number - 1
      });
    }
  },

  Return: function (e) {
    wx.reLaunch({
      url: "../../basket/basketquery/basketquery"
    })
  },

  number: function (e) {
    var val = e.detail.value;
    this.setData({
      number: val
    })
  },
  Days: function (e) {
    var val = e.detail.value;
    this.setData({
      Days: val
    })
  },
  centerOrder: function (e) {
    wx.reLaunch({
      url: "../../basket/centerOrder/centerOrder?Detail=" + this.data.detail + '&deposit=' + this.data.deposit + '&rent=' + this.data.rent + '&bastet=' + this.data.bastet + '&ID=' + this.data.ID + '&concent=' + this.data.concent + '&number=' + this.data.number + '&Days=' + this.data.Days +'&orderid='+this.data.orderid
    })
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
    this.setData({
      concent: e.detail.value,
    })
  },

  //提交修改
  changeOrder:function(){
    if (this.data.orderid != null) {
    
    
    this.setData({
      SumCount1:this.data.number,
      RentDays1:this.data.Days,
      rent:this.data.rent,
      deposit: this.data.deposit
      
      
    })
      wx.reLaunch({
        url: "../../basket/payOrder/payOrder?SumCount1=" + this.data.SumCount1 + '&RentDays1=' + this.data.RentDays1 + '&rent=' + this.data.rent + '&deposit=' + this.data.deposit + '&orderid=' + this.data.orderid
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
    let b64 = utilMd4.hexMD4(time + app.globalData.key).toLocaleUpperCase();
    
    this.setData({
      orderid: options.orderid
    })
    
    console.log(this.data.orderid)
     wx.getStorage({
       key: 'modelList',
       success: function(res) {
         console.log(res.data.ID)
         that.setData({
           userid: res.data.ID
         })
         wx.request({
           url: app.globalData.url + 'api/Basket_/GetBasketTypeList?securityStr=' + b64,
           header: {
             'content-type': 'application/json'
           },
           success(res) {
             console.log(res.data)
             that.setData({
               list: res.data.modelList,
               deposit: res.data.modelList[0].RentPrice,
               rent: res.data.modelList[0].DepositPrice,
               bastet: res.data.modelList[0],
               ID: res.data.modelList[0].ID,
               detail: res.data.modelList[0].Detail,
             })
           }
         })

         if (that.data.orderid != null) {

           wx.request({

             url: app.globalData.url + 'api/Basket_/GetBasketTypeList?securityStr=' + b64,
             header: {
               'content-type': 'application/json'
             },
             success(res) {
               console.log(res.data)
               that.setData({
                 list: res.data.modelList,
                 deposit: res.data.modelList[0].RentPrice,
                 rent: res.data.modelList[0].DepositPrice,
                 bastet: res.data.modelList[0],
                 ID: res.data.modelList[0].ID,
                 detail: res.data.modelList[0].Detail,

               })
             }
           })

           let b66 = utilMd4.hexMD4(time + app.globalData.key + that.data.orderid + that.data.userid).toLocaleUpperCase();
           let that = this

           wx.request({

             // url: app.globalData.url + 'api/Basket_/GetBasketToUserOrder?orderId=' + this.data.orderid + '&userId=61&securityStr=' + b66,
             url: app.globalData.url + 'api/Basket_/GetBasketToUserOrder?orderId=' + that.data.orderid + '&userId=' + that.data.userid+'&securityStr=' + b66,


             header: {
               'content-type': 'application/json'
             },
             success(res) {
               console.log(res.data.modelList[0])
               that.setData({
                 SumCount: res.data.modelList[0].SumCount,
                 RentDays: res.data.modelList[0].RentDays,
                 OrderDate: res.data.modelList[0].OrderDate
               })
               that.setData({
                 number: that.data.SumCount,
                 Days: that.data.RentDays
               })

             }


           })
         }
          
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
// pages/Inventory/damage/damage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    damagelist:[
      { 
        damageId: "44581454544", 
        damageName: "五花肉",
        damageSum: "120kg",
        damageUser:"何小月(系统默认生成)",
        damageDate:"2019-10-14(系统默认生成)"
      },
      {
        damageId: "44581454544",
        damageName: "五花肉",
        damageSum: "120kg",
        damageUser: "何小月(系统默认生成)",
        damageDate: "2019-10-14(系统默认生成)"
      },
      {
        damageId: "44581454544",
        damageName: "五花肉",
        damageSum: "120kg",
        damageUser: "何小月(系统默认生成)",
        damageDate: "2019-10-14(系统默认生成)"
      },
    ]
  },
  Return: function (e) {
    wx.reLaunch({
      url: "../../basket/baskethome/baskethome"
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
    switch (e.target.dataset.num) {
      case '4':
        that.setData({
          footer: true,
          start: 0,
          type: null,
        })
        // wx.getStorage({
        //   key: 'modelList',
        //   success: function (res) {
        //     let start = that.data.start;
        //     let count = that.data.count;
        //     let userid = res.data.ID
        //     let name = res.data.UserName
        //     let sysInfo = app.globalData.sysInfo;
        //     let time = util.formatTime(new Date());
        //     let b64 = utilMd4.hexMD4(time + app.globalData.key + userid + name + start + that.data.count + '').toLocaleUpperCase();
        //     app.Promise({ url: 'api/Basket_/GetBasketToUserList?userId=' + userid + '&userName=' + name + '&start=' + start + '&count=' + that.data.count + '&type=&securityStr=' + b64, method: "GET" }).then((res) => {
        //       // console.log(res)
        //       if (res.errInfo == "0") {
        //         if (res.modelList) {
        //           var arr1 = that.data.Orderlist;
        //           var arr2 = res.modelList;
        //           arr1 = arr1.concat(arr2);
        //           that.setData({
        //             Orderlist: arr1
        //           })
        //         } else {
        //           console.log("我是有底线的")
        //           that.setData({
        //             footer: true,
        //           })
        //         }
        //         that.puth()
        //       }
        //     })
        //   },
        // })
        break;
      case '1':
        that.setData({
          Orderlist: [],
          start: 0,
          count: 10,
          type: 0,
        })
        // wx.getStorage({
        //   key: 'modelList',
        //   success: function (res) {
        //     let start = that.data.start;
        //     let userid = res.data.ID
        //     let name = res.data.UserName
        //     let sysInfo = app.globalData.sysInfo;
        //     let time = util.formatTime(new Date());
        //     let b64 = utilMd4.hexMD4(time + app.globalData.key + userid + name + start + that.data.count + that.data.type).toLocaleUpperCase();
        //     app.Promise({ url: 'api/Basket_/GetBasketToUserList?userId=' + userid + '&userName=' + name + '&start=' + start + '&count=' + that.data.count + '&type=' + that.data.type + '&securityStr=' + b64, method: "GET" }).then((res) => {
        //       // console.log(res)
        //       if (res.errInfo == "0") {
        //         if (res.modelList) {
        //           var arr1 = that.data.Orderlist;
        //           var arr2 = res.modelList;
        //           arr1 = arr1.concat(arr2);
        //           that.setData({
        //             Orderlist: arr1
        //           })
        //         } else {
        //           console.log("我是有底线的")
        //           that.setData({
        //             footer: true,
        //           })
        //         }
        //         that.puth()
        //       }
        //     })
        //   },
        // })
        break;
      case '2':
        that.setData({
          Orderlist: [],
          start: 0,
          count: 10,
          type: 2
        })
        // wx.getStorage({
        //   key: 'modelList',
        //   success: function (res) {
        //     let start = that.data.start;
        //     let userid = res.data.ID
        //     let name = res.data.UserName
        //     let sysInfo = app.globalData.sysInfo;
        //     let time = util.formatTime(new Date());
        //     let b64 = utilMd4.hexMD4(time + app.globalData.key + userid + name + start + that.data.count + that.data.type).toLocaleUpperCase();
        //     app.Promise({ url: 'api/Basket_/GetBasketToUserList?userId=' + userid + '&userName=' + name + '&start=' + start + '&count=' + that.data.count + '&type=' + that.data.type + '&securityStr=' + b64, method: "GET" }).then((res) => {
        //       // console.log(res)
        //       if (res.errInfo == "0") {
        //         if (res.modelList) {
        //           var arr1 = that.data.Orderlist;
        //           var arr2 = res.modelList;
        //           arr1 = arr1.concat(arr2);
        //           that.setData({
        //             Orderlist: arr1
        //           })
        //         } else {
        //           console.log("我是有底线的")
        //           that.setData({
        //             footer: true,
        //           })
        //         }
        //         that.puth()
        //       }
        //     })
        //   },
        // })
        break;
      case '3':
        that.setData({
          Orderlist: [],
          start: 0,
          count: 10,
          type: 3
        })
        // wx.getStorage({
        //   key: 'modelList',
        //   success: function (res) {
        //     let start = that.data.start;
        //     let userid = res.data.ID
        //     let name = res.data.UserName
        //     let sysInfo = app.globalData.sysInfo;
        //     let time = util.formatTime(new Date());
        //     let b64 = utilMd4.hexMD4(time + app.globalData.key + userid + name + start + that.data.count + that.data.type).toLocaleUpperCase();
        //     app.Promise({ url: 'api/Basket_/GetBasketToUserList?userId=' + userid + '&userName=' + name + '&start=' + start + '&count=' + that.data.count + '&type=' + that.data.type + '&securityStr=' + b64, method: "GET" }).then((res) => {
        //       // console.log(res)
        //       if (res.errInfo == "0") {
        //         if (res.modelList) {
        //           var arr1 = that.data.Orderlist;
        //           var arr2 = res.modelList;
        //           arr1 = arr1.concat(arr2);
        //           that.setData({
        //             Orderlist: arr1
        //           })
        //         } else {
        //           console.log("我是有底线的")
        //           that.setData({
        //             footer: true,
        //           })
        //         }
        //         that.puth()
        //       }
        //     })
        //   },
        // })
        break;
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
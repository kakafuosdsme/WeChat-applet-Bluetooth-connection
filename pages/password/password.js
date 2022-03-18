const app = getApp()


Page({

  data: {
    // userName: '',
    userPwd: ""
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    var cht = options.cht
   var  deviceId=options.deviceId
    var serviceId = options.serviceId
   that.setData({
     deviceId:deviceId,
     cht:cht,
     serviceId:serviceId

   })
  },

  //获取用户输入的用户名
  // userNameInput: function(e) {
  //   this.setData({
  //     userName: e.detail.value
  //   })
  // },
   passWdInput: function(e) {
    this.setData({
      userPwd: e.detail.value
    })
  },
  //获取用户输入的密码
  loginBtnClick: function(e) {
    //console.log(" 密码：" + this.data.userPwd)
    var _this = this;
    var that=this
    var cht = that.data.cht
   var  deviceId=that.data.deviceId
    var serviceId = that.data.serviceId
    _this.setData({
      // userName: this.data.userName,
      userPwd: this.data.userPwd,
    })
     var num = parseInt(this.data.userPwd);
     //console.log("num:"+typeof(num));
     if (num == "001122") {
      wx.showLoading({
        title: '密码正确',
      })
      setTimeout(function () {
        wx.hideLoading()
        wx.navigateTo({
          url: '/pages/shezhi/shezhi?cht=' + cht + '&serviceId=' + serviceId + '&deviceId=' + deviceId,
        })
      }, 2000)
     }
     else if (num == "005819") {
      wx.showLoading({
        title: '密码正确',
      })
      setTimeout(function () {
        wx.hideLoading()
        wx.navigateTo({
          url: '/pages/shezhi-2/shezhi-2?cht=' + cht + '&serviceId=' + serviceId + '&deviceId=' + deviceId,
        })
      }, 2000)
    
     } 
     else if (num == "942100") {
      wx.showLoading({
        title: '密码正确',
      })
      setTimeout(function () {
        wx.hideLoading()
        wx.navigateTo({
          url: '/pages/shezhi-3/shezhi-3?cht=' + cht + '&serviceId=' + serviceId + '&deviceId=' + deviceId,
        })
      }, 2000)
    }else
     {
        wx.showLoading({
          title: '密码错误',
        })
        setTimeout(function () {
          // wx.hideLoading()
          //   wx.navigateTo({
          //     url: '/pages/password/password'
          // })
          wx.navigateBack({
            delta:1
          })
        }, 2000)
     }
  },
  // 用户点击右上角分享
  onShareAppMessage: function() {

  }
})

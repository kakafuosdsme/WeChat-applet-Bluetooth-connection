// pages/chakan/chakan.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  chakan:function (e) {
    var that = this;

    //将计时器赋值给setInter
    that.data.setInter = setInterval(
        function () {    //开始定时循环发送读取“原始信号”命令
            console.log(that.data.setInter);
            var X = Value_to_Hex(fs[16],buffer)//温度零点
            X=CreateReadModbus(fs[16],X)//温度零点读取命令
            
        }
      , 10000)
    this.setData({
      temperzero:temperzero ,
      pressurezero:pressurezero ,
      flowzero:flowzero,
      temperysxh:temperysxh,
      pressureysxh:pressureysxh,
      flowysxh:flowysxh,
      banbenver:banbenver,
      shebeiver:shebeiver
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  vhak: function () {

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
    //返回后需要清除定时器
    var that = this;
    //清除计时器  即清除setInter
    clearInterval(that.data.setInter)
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
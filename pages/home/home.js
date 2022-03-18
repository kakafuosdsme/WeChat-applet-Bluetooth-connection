//const modbus = require('../modbus/modbus.js')
// pages/home/home.js
const app = getApp()
var fs = app.globalData.fs//调用其他页面的函数
Page({

  /**
   * 页面的初始数据
   */
  data: {
    setInter:'',   //用于定时器命名，可以关闭，如在password按钮事件中
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    var cht = options.cht
    var  deviceId=options.deviceId
    var serviceId = options.serviceId
    var chtread = options.chtread
    var  deviceIdread=options.deviceIdread
    var serviceIdread = options.serviceIdread
    console.log("对应的ID值deviceId："+deviceId)
    console.log("对应的ID值serviceId："+serviceId)
    console.log("对应的ID值characteristicId："+cht)
    console.log("对应的ID值deviceIdread："+deviceIdread)
    console.log("对应的ID值serviceIdread："+serviceIdread)
    console.log("对应的ID值characteristicIdread："+chtread)
    that.setData({
      deviceId:deviceId,
      cht:cht,
      serviceId:serviceId,

      chtread:chtread,
      deviceIdread:deviceIdread,
      serviceIdread:serviceIdread
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  password:function () {
    var that=this
    var cht = that.data.cht
    var  deviceId=that.data.deviceId
    var serviceId = that.data.serviceId
    var chtread = that.data.chtread
    var  deviceIdread=that.data.deviceIdread
    var serviceIdread = that.data.serviceIdread
    clearInterval(that.data.setInter)    //关闭定时器读取浓度
    wx.navigateTo({
      //url: '/pages/password/password?cht=' + cht + '&serviceId=' + serviceId + '&deviceId=' + deviceId,
      url: '../home/home?cht=' + cht + '&serviceId=' + serviceId + '&deviceId=' + deviceId,
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    var cht = that.data.cht
    var  deviceId=that.data.deviceId
    var serviceId = that.data.serviceId
    var chtread = that.data.chtread
    var  deviceIdread=that.data.deviceIdread
    var serviceIdread = that.data.serviceIdread
    var id = 0
    var modbus = require('../modbus/modbus.js')  //调用其他页面的函数
    //定时器读取浓度
    that.data.setInter = setInterval(function(){
      if (id<3){
        var value = modbus.CreateReadModbus(fs[id])  //读取温度数据的命令
        console.log("读取温度数据的命令"+value)      //测试后去掉
        wx.writeBLECharacteristicValue({
        deviceId: deviceId,
        serviceId: serviceId,
        characteristicId: cht,
        value: modbus.hex2ab(value),
          success: function (res) {    //res为返回函数，内包括服务器返回的数据
            console.log(res)      //测试后去掉
            console.log("write对应的ID值deviceId："+that.data.deviceId)
            console.log("write对应的ID值serviceId："+that.data.serviceId)
            console.log("write对应的ID值characteristicId："+that.data.cht)
            },
          fail:function(res){
              console.log(res)   //测试后去掉
              console.log("write对应的ID值deviceId："+that.data.deviceId)
              console.log("write对应的ID值serviceId："+that.data.serviceId)
              console.log("write对应的ID值characteristicId："+that.data.cht)
             }
        });
        wx.readBLECharacteristicValue({
          deviceId: deviceId,
          serviceId: serviceId,
          characteristicId: cht,
          success: function(e) {
            console.log(e)
          },
          })
        wx.onBLECharacteristicValueChange(function (characteristics) {    
        var a = characteristics.value
        var Read_get_value0 = modbus.ab2hex(a);   // 这个值好像没有传到外面；ArrayBuffer转16进制字符串示例
        console.log("characteristics:"+Read_get_value0)
        if ((Read_get_value0 != "01")&&(Read_get_value0 != "00" )) {
          console.log("characteristics11111:"+Read_get_value0)
          var Read_get_value = modbus.ModbusAsk(Read_get_value0)
          Read_get_value = modbus.Hex_to_Value(fs[id],Read_get_value)
          switch (id) {
          case 0:
            console.log("当前ID值:" + id)
            that.setData({
              temper:Read_get_value
            })
            break;
          case 1:
            console.log("当前ID值:" + id)
            that.setData({
              pressure:Read_get_value
            })
            break;
        case 2:
          console.log("当前ID值:" + id)
          that.setData({
            flow:Read_get_value
          })
          break;
        default:
          break;
      }
      id++;
    } else {
      return
    }
  }) 
      }else{
        id=0;
      }
    }, 2000);
    // 启用低功耗蓝牙设备特征值变化是的notify功能
    wx.notifyBLECharacteristicValueChange({
      deviceId: deviceIdread,
      serviceId: serviceIdread,
      characteristicId: chtread,
      state: true,
      success: function (res) {
        console.log("notifyBLECharacteristicValueChange成功:"+res)
        console.log("notify对应的ID值deviceId："+deviceId)
        console.log("notify对应的ID值serviceId："+serviceId)
        console.log("notify对应的ID值characteristicId："+characteristicId)
      },
      fail:function(res){
        console.log("notify功能失败"+res)
        console.log("对应的ID值deviceId："+deviceId)
        console.log("对应的ID值serviceId："+serviceId)
        console.log("对应的ID值characteristicId："+characteristicId)

      },
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  // onHide: function () {

  // },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  shuaxin:function () {

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

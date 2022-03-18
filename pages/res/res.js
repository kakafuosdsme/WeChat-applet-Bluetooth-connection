// pages/res/res.js
var app=getApp()
var serviceId
var _characteristicId,_serviceId,_deviceId,_readCharacteristicId,_readServiceId,_readDeviceId
Page({

  /**
   * 页面的初始数据
   */
  data: {
   array:'',
   characteristics:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var deviceId=options.id
    //var that=this
    //var _characteristicId,_serviceId,_deviceId,_readCharacteristicId,_readServiceId,_readDeviceId

      // 第五步、获取蓝牙设备所有服务(service)。
    wx.getBLEDeviceServices({
      deviceId: deviceId,
      success: (res) => {
        console.log('蓝牙设备所有服务', res)
        //for (var i = 0; i < res.services.length; i++) {
          var i = 1    //测试    选定某一服务*********************************
          if (res.services[i].isPrimary) {
            // 第六步、 获取蓝牙设备某个服务中所有特征值(characteristic) 
            serviceId = res.services[i].uuid
            wx.getBLEDeviceCharacteristics({
              deviceId,
              serviceId,
              success: (res) => {
                //console.log("services[i]"+(res.services[i].uuid))
                //console.log("serviceID"+serviceId)
                 for (let j = 0; j < res.characteristics.length; j++) {
                //for (let j = 0; j < 2; j++) {
                  let item = res.characteristics[j]                  
                  if (((item.properties.read==true) &&(item.properties.write==true) )) {
                      this._deviceId = deviceId
                      this._serviceId = serviceId
                      this._characteristicId = item.uuid              
                  }
                  if ((item.properties.notify==true)) {
                    this._readDeviceId = deviceId
                    this._readServiceId = serviceId
                    this._readCharacteristicId = item.uuid         
                }
                }
              }
            })
            //return;
          }
        //}
      },
      fail(res) { console.log('蓝牙设备所有服务失败', res) }
    })
    // wx.navigateTo({
    //   url: '../home/home?cht=' + _characteristicId + '&serviceId=' + _serviceId + '&deviceId=' + _deviceId +'&chtread=' + _readCharacteristicId + '&serviceIdread=' + _readServiceId + '&deviceIdread=' + _readDeviceId ,
    // })
  },
  ReadBtnClick:function (options) {
    var that = this
    console.log('serviceId=' +that._serviceId )
    wx.navigateTo({
      // url: '../home/home?cht=' + that._characteristicId + '&serviceId=' +that._serviceId + '&deviceId=' + that._deviceId,
      url: '../home/home?cht=' + that._characteristicId + '&serviceId=' +  that._serviceId + '&deviceId=' +  that._deviceId +'&chtread=' +  that._readCharacteristicId + '&serviceIdread=' +  that._readServiceId + '&deviceIdread=' +  that._readDeviceId ,
    })
  },
    // sub:function(e){
    //   var that = this
    //   var serviceId=e.target.id

    // //获取蓝牙设备某个服务中的所有特征值
    // wx.getBLEDeviceCharacteristics({
    //   deviceId:app.globalData.deviceId,
    //   serviceId:serviceId,
    //   success: function(res) {
    //     console.log(res)
    //     that.data.characteristics=res.characteristics//获取characteristic

    //     wx.navigateTo({
    //       url: '../notify/notify?ct=' + JSON.stringify(that.data.characteristics) + '&serviceId=' + serviceId,
    //     })
    //   },
    //   fail:function(res){
    //     console.log(res)
    //     wx.navigateTo({
    //       url: '../notify/notify?ct=' + JSON.stringify(that.data.characteristics) + '&serviceId=' + serviceId,
    //     })
    //   }
    // })
    
    //   //监听设备连接状态
    //   wx.onBLEConnectionStateChange(function (res) {
    //     console.log(res)
    //     if (res.connected == false) {
    //       wx.showModal({
    //         title: '提示',
    //         content: '设备连接已断开',
    //       })
    //     }
    //   })
    // },


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
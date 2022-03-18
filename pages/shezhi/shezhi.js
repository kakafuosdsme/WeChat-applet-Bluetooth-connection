// pages/shezhi/shezhi.js
const app = getApp()
var fs = app.globalData.fs//调用其他页面的函数
Page({
  /**
   * 页面的初始数据
   */
  data: {   
    formData:[], //表单
  },
  //数据输入后赋值到此处
  // valueInput: function(e) {
  //   var temp_range
  //   this.setData({
  //     get_value: e.detail.value,  //赋值功能,数据类型在按钮事件中体现
  //     temp_range:e.detail.value   //测试赋值功能,数据类型在按钮事件中体现
  //   })
  //   temp_range = e.detail.value
  //   console.log(temp_range)
  // },

// 输入监听
valueInput: function (e) {
  var that = this
  console.log(e);
  let formData = this.data.formData;
  //let item = e.currentTarget.dataset.model;
  var id = e.target.id
  formData[id] = e.detail.value;
  console.log("formData[id]:"+formData[id])
  this.setData({
  formData
  });
  console.log(formData);
  // that.setData({
  //   TempOutRge:formData[id] 
  // })
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
  //点击读取按钮
  ReadBtnClick:function(e){
    var that = this
    var id = e.target.id
    that.lanyaRead(id)

  },
  //点击设置按钮
  WriteBtnClick:function(e){
    var that = this
    var id = e.target.id
    var value = that.data.formData[id] ;
    var Read_get_value = that.lanyaSet(id,value)
    console.log(Read_get_value)  //需要确定读取的是同一行上的数据
  },
  //测试用
  //   WriteBtnClick:function(e){
  //   var that = this
  //   var id = e.target.id
  //   var value = that.data.formData[id] ;
  //   that.setData({
  //     TempOutRge:value
  //   })
  // },

  //蓝牙读取数据公用函数
  lanyaRead: function (id) {
    var that = this
    var modbus = require('../modbus/modbus.js')  //调用其他页面的函数
    var value = modbus.CreateReadModbus(fs[id])  //读取温度量程数据的命令
    wx.writeBLECharacteristicValue({
      deviceId: that.data.deviceId,
      serviceId: that.data.serviceId,
      characteristicId: that.data.cht,   
      value: modbus.hex2ab(value),
      success: function (res) {    //res为返回函数，内包括服务器返回的数据
        //console.log(res)      //测试后去掉
      },
      fail:function(res){
        console.log(res)   //测试后去掉
      }
    });
    wx.readBLECharacteristicValue({
       deviceId: that.data.deviceId,
       serviceId: that.data.serviceId,
        characteristicId: that.data.cht,
        success: function(e) {
          console.log(e)
      },     
    })
    wx.onBLECharacteristicValueChange(function (characteristics) {
      //console.log(characteristics.value)
      var a = characteristics.value
      var Read_get_value0 = modbus.ab2hex(a);   // 这个值好像没有传到外面；ArrayBuffer转16进制字符串示例
      //console.log("Read_get_value0:"+Read_get_value0)
      if (Read_get_value0 != "01") {
        var Read_get_value = modbus.ModbusAsk(Read_get_value0)
        Read_get_value = modbus.Hex_to_Value(fs[id],Read_get_value)
        //console.log("modbus.Hex_to_Value:"+Read_get_value)
        switch(id){
          case "17": 
            //console.log("当前ID值:" + id)
            that.setData({
              TempOutRge: Read_get_value,  //赋值功能,数据类型在按钮事件中体现
            });
          break;
          case "7":
            that.setData({
              PrsuOUpLmt: Read_get_value,  
            });
            break;
          case "8":
            that.setData({
              PrsuODnLmt: Read_get_value,  
            });
            break;
          case "11":
            that.setData({
              FlowRange: Read_get_value,  
            });
            break;
            case "30":
              that.setData({
                TempAvge: Read_get_value,  
              });
              break;
              case "27":
                that.setData({
                  PrsuAvge: Read_get_value,  
                });
                break;
                case "29":
                  that.setData({
                    FSmallAvge: Read_get_value,  
                  });
                  break;
                  case "28":
                    that.setData({
                      FLargeAvge: Read_get_value,  
                    });
                    break;
                    case "25":
                      that.setData({
                        AutoRevBlowPeriod: Read_get_value,  
                      });
                      break;
                      case "22":
                        that.setData({
                          RevBlowTime: Read_get_value,  
                        });
                        break;
                        case "39":
                          that.setData({
                            HighRevBlowPeriod: Read_get_value,  
                          });
                          break;
                          case "38":
                            that.setData({
                              HighRevBlowTime: Read_get_value,  
                            });
                            break;
                            case "24":
                              that.setData({
                                AutoZeroPeriod: Read_get_value,  
                              });
                              break;
                              case "23":
                                that.setData({
                                  ZeroWaitTime: Read_get_value,  
                                });
                                break;
                                case "21":
                                  that.setData({
                                    TempHoldTime: Read_get_value,  
                                  });
                                  break;
                                  case "26":
                                    that.setData({
                                      FanTemp: Read_get_value,  
                                    });
                                    break;
                                    case "50":
                                      that.setData({
                                        atpSet: Read_get_value,  
                                      });
                                      break;
          default:
            break;
        }
      }else {
        return
      }

    })

  },
  //蓝牙设置数据公用函数
  lanyaSet: function (id,buffer) {
      var that = this
      var modbus = require('../modbus/modbus.js')  //调用其他页面的函数
      var set_buffer= modbus.CreateWriteModbus(fs[id],buffer)
      wx.writeBLECharacteristicValue({
        deviceId: that.data.deviceId,
        serviceId: that.data.serviceId,
        characteristicId: that.data.cht,   
        value: modbus.hex2ab(set_buffer),
        success: function (res) {    //res为返回函数，内包括服务器返回的数据
          console.log(res)      //测试后去掉

        },
        fail:function(res){
          console.log(res)   //测试后去掉
        }
      });
      wx.readBLECharacteristicValue({
         deviceId: that.data.deviceId,
         serviceId: that.data.serviceId,
          characteristicId: that.data.cht,
          success: function(e) {
            console.log(e)
        },
      })
      wx.onBLECharacteristicValueChange(function (characteristics) {
          var a = characteristics.value;
          var Set_ask_value0 = modbus.ab2hex(a);   // ArrayBuffer转16进制字符串示例
          if (Set_ask_value0 != "01") {
            var true_or_false = modbus.ModbusAsk(Set_ask_value0);
            console.log("监听到特征值更新:设置是否成功:" + true_or_false);
            return true_or_false;
          }          
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
    var that = this    
    // 启用低功耗蓝牙设备特征值变化是的notify功能
    wx.notifyBLECharacteristicValueChange({
      deviceId: that.data.deviceId,
      serviceId: that.data.serviceId,
      characteristicId: that.data.cht,  
      state: true,
      success: function (res) {
        //console.log("notifyBLECharacteristicValueChange成功:"+res)
      },
      fail:function(res){
        //console.log("notify功能失败"+res)
      },
    })
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
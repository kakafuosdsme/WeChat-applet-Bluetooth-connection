// app.js
const app = getApp();
App({
  globalData: {
    userInfo: null,
    fs:null,
    deviceId:'',
    cht: ''
  },
  onLaunch() {
    this.globalData.fs =[
      {"ID":"0","name":"温度","addr":0x00,"type":"float"},
      {"ID":"1","name":"压力","addr":0x02,"type":"float"},
      {"ID":"2","name":"流速","addr":0x04,"type":"float"},
      {"ID":"3","name":"压力变送器量程上限","addr":0x06,"type":"float"},
      {"ID":"4","name":"压力变送器量程下限","addr":0x08,"type":"float"},
      {"ID":"5","name":"压力零点","addr":0x0a,"type":"float"},
      {"ID":"6","name":"压力波动范围","addr":0x0c,"type":"float"},
      {"ID":"7","name":"压力输出量程上限","addr":0x0e,"type":"float"},
      {"ID":"8","name":"压力输出量程下限","addr":0x10,"type":"float"},
      {"ID":"9","name":"差压变送器上限 (折算流速)","addr":0x12,"type":"float"},
      {"ID":"10","name":"差压变送器下限 (折算流速)","addr":0x14,"type":"float"},
      {"ID":"11","name":"流速量程","addr":0x16,"type":"float"},
      {"ID":"12","name":"流速零点","addr":0x18,"type":"float"},
      {"ID":"13","name":"流速波动范围","addr":0x1a,"type":"float"},
      {"ID":"14","name":"温度变送器上限 ","addr":0x1c,"type":"float"},
      {"ID":"15","name":"温度变送器下限 ","addr":0x1e,"type":"float"},
      {"ID":"16","name":"温度零点","addr":0x20,"type":"float"},
      {"ID":"17","name":"温度输出量程","addr":0x22,"type":"float"},
      {"ID":"18","name":"温度波动范围","addr":0x24,"type":"float"},
      {"ID":"19","name":"皮托管系数 ","addr":0x26,"type":"float"},
      {"ID":"20","name":"流速输出零点","addr":0x28,"type":"float"},
      {"ID":"21","name":"温度输出保持时间","addr":0x2a,"type":"UINT32"},
      {"ID":"22","name":"反吹时间","addr":0x2c,"type":"UINT32"},
      {"ID":"23","name":"调零过程中等待时间","addr":0x2e,"type":"UINT32"},
      {"ID":"24","name":"自动调零周期","addr":0x30,"type":"UINT16"},
      {"ID":"25","name":"自动反吹周期","addr":0x31,"type":"UINT16"},
      {"ID":"26","name":"风扇温度","addr":0x32,"type":"UINT16"},
      {"ID":"27","name":"压力滑动平均值","addr":0x33,"type":"UINT16"},
      {"ID":"28","name":"流速大滑动系数","addr":0x34,"type":"UINT16"},
      {"ID":"29","name":"流速小滑动系数","addr":0x35,"type":"UINT16"},
      {"ID":"30","name":"温度滑动系数","addr":0x36,"type":"UINT16"},
      {"ID":"31","name":"流速通道","addr":0x37,"type":"UINT8"},
      {"ID":"32","name":"设备地址","addr":0x38,"type":"UINT8"},
      {"ID":"33","name":"设备语言","addr":0x39,"type":"UINT8"},
      {"ID":"34","name":" 过压保护开关","addr":0x3a,"type":"BOOL"},
      {"ID":"35","name":"单片机温度","addr":0x3b,"type":"float"},
      {"ID":"36","name":" 差压输出量程上限","addr":0x3d,"type":"float"},
      {"ID":"37","name":" 差压输出量程下限","addr":0x3f,"type":"float"},
      {"ID":"38","name":" 高频反吹持续时间","addr":0x41,"type":"UINT32"},
      {"ID":"39","name":" 高频反吹周期","addr":0x43,"type":"UINT16"},
      {"ID":"40","name":" 压力滑动系数","addr":0x44,"type":"UINT16"},
      {"ID":"41","name":" 读取流量","addr":0x45,"type":"UINT32"},
      {"ID":"42","name":" 温度输出量程上限","addr":0x47,"type":"float"},
      {"ID":"43","name":" 温度输出量程下限","addr":0x49,"type":"float"},
      {"ID":"44","name":" 高频调零开关","addr":0x4b,"type":"UINT16"},
      {"ID":"45","name":" 停炉开关","addr":0x4c,"type":"UINT16"},
      {"ID":"46","name":" 温度阈值","addr":0x4d,"type":"float"},
      {"ID":"47","name":" 流速阈值","addr":0x4f,"type":"float"},
      {"ID":"48","name":" 速度场系数","addr":0x53,"type":"float"},
      {"ID":"49","name":" 当前差压","addr":0x4d,"type":"float"},//寄存器地址重复了
      {"ID":"50","name":" 大气压设置","addr":0x6d,"type":"float"},
      {"ID":"51","name":" 速度场系数","addr":0x8a,"type":"float"},
      {"ID":"52","name":"流量","addr":0x84,"type":"float"},
      //{"ID":"53","name":"质量流量","addr":0x51,"type":"UINT32"},//寄存器地址冲突“流速阈值”
      {"ID":"54","name":"状态","addr":0x8c,"type":"UINT16"}
    ]
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  }

})

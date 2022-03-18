const app = getApp()
module.exports={
  CreateWriteModbus: CreateWriteModbus,
  CreateReadModbus:CreateReadModbus,
  ModbusAsk:ModbusAsk,
  Hex_to_Value:Hex_to_Value,
  ab2hex:ab2hex,
  HexToString:HexToString,
  hex2ab:hex2ab
}


var _auchCRCHi = [

  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0,
  0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0,
  0x80, 0x41, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1,
  0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1,
  0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0,
  0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40,
  0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1,
  0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0,
  0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40,
  0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0,
  0x80, 0x41, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0,
  0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0,
  0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0,
  0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40,
  0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1,
  0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0,
  0x80, 0x41, 0x00, 0xC1, 0x81, 0x40
];
var _auchCRCLo = [
  0x00, 0xC0, 0xC1, 0x01, 0xC3, 0x03, 0x02, 0xC2, 0xC6, 0x06,
  0x07, 0xC7, 0x05, 0xC5, 0xC4, 0x04, 0xCC, 0x0C, 0x0D, 0xCD,
  0x0F, 0xCF, 0xCE, 0x0E, 0x0A, 0xCA, 0xCB, 0x0B, 0xC9, 0x09,
  0x08, 0xC8, 0xD8, 0x18, 0x19, 0xD9, 0x1B, 0xDB, 0xDA, 0x1A,
  0x1E, 0xDE, 0xDF, 0x1F, 0xDD, 0x1D, 0x1C, 0xDC, 0x14, 0xD4,
  0xD5, 0x15, 0xD7, 0x17, 0x16, 0xD6, 0xD2, 0x12, 0x13, 0xD3,
  0x11, 0xD1, 0xD0, 0x10, 0xF0, 0x30, 0x31, 0xF1, 0x33, 0xF3,
  0xF2, 0x32, 0x36, 0xF6, 0xF7, 0x37, 0xF5, 0x35, 0x34, 0xF4,
  0x3C, 0xFC, 0xFD, 0x3D, 0xFF, 0x3F, 0x3E, 0xFE, 0xFA, 0x3A,
  0x3B, 0xFB, 0x39, 0xF9, 0xF8, 0x38, 0x28, 0xE8, 0xE9, 0x29,
  0xEB, 0x2B, 0x2A, 0xEA, 0xEE, 0x2E, 0x2F, 0xEF, 0x2D, 0xED,
  0xEC, 0x2C, 0xE4, 0x24, 0x25, 0xE5, 0x27, 0xE7, 0xE6, 0x26,
  0x22, 0xE2, 0xE3, 0x23, 0xE1, 0x21, 0x20, 0xE0, 0xA0, 0x60,
  0x61, 0xA1, 0x63, 0xA3, 0xA2, 0x62, 0x66, 0xA6, 0xA7, 0x67,
  0xA5, 0x65, 0x64, 0xA4, 0x6C, 0xAC, 0xAD, 0x6D, 0xAF, 0x6F,
  0x6E, 0xAE, 0xAA, 0x6A, 0x6B, 0xAB, 0x69, 0xA9, 0xA8, 0x68,
  0x78, 0xB8, 0xB9, 0x79, 0xBB, 0x7B, 0x7A, 0xBA, 0xBE, 0x7E,
  0x7F, 0xBF, 0x7D, 0xBD, 0xBC, 0x7C, 0xB4, 0x74, 0x75, 0xB5,
  0x77, 0xB7, 0xB6, 0x76, 0x72, 0xB2, 0xB3, 0x73, 0xB1, 0x71,
  0x70, 0xB0, 0x50, 0x90, 0x91, 0x51, 0x93, 0x53, 0x52, 0x92,
  0x96, 0x56, 0x57, 0x97, 0x55, 0x95, 0x94, 0x54, 0x9C, 0x5C,
  0x5D, 0x9D, 0x5F, 0x9F, 0x9E, 0x5E, 0x5A, 0x9A, 0x9B, 0x5B,
  0x99, 0x59, 0x58, 0x98, 0x88, 0x48, 0x49, 0x89, 0x4B, 0x8B,
  0x8A, 0x4A, 0x4E, 0x8E, 0x8F, 0x4F, 0x8D, 0x4D, 0x4C, 0x8C,
  0x44, 0x84, 0x85, 0x45, 0x87, 0x47, 0x46, 0x86, 0x82, 0x42,
  0x43, 0x83, 0x41, 0x81, 0x80, 0x40
];
//下面是CRC计算
function CRC16(buffer) {
  var crcId = 0;
  var crcValue = 0xffff;
  var crc_h = (crcValue&0xff00)>>8;
  var crc_l = crcValue&0x00ff;
  for (var i = 0; i < buffer.length; ++i)
  {
    crcId = (crc_l ^ buffer[i]) & 0x00ff;
    crc_l = crc_h ^ _auchCRCHi[crcId];    
    crc_h = _auchCRCLo[crcId];
  }
     crcValue=((crc_h & 0x00ff) << 8) | (crc_l & 0x00ff) & 0xffff;
     return crcValue;
};     
 //ArrayBuffer类型数据转换成16进制数据  
function buf2hex(buffer) {       

   return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
};    
// ArrayBuffer转16进制字符串示例      蓝牙接收到的数据是ArrayBuffer，需转成16进制字符串
function ab2hex(buffer) {
  const hexArr = Array.prototype.map.call(
    //new Uint8Array(buffer),
    new Uint8Array(buffer),
    function (bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('')
};
 
//hex转arraybuffer
function hex2ab(hex){
  var arrayBuffer = new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
    return parseInt(h, 16)
  }))
  arrayBuffer = arrayBuffer.buffer;
  return arrayBuffer
};

//需要用到的函数(16进制转浮点数float)
function InsertString(t, c, n) {
  var r = new Array();
  for (var i = 0; i * 2 < t.length; i++) {
      r.push(t.substr(i * 2, n));
  }
  return r.join(c);
}
//需要用到的函数(16进制转浮点数float)
function FillString(t, c, n, b) {
  if ((t == "") || (c.length != 1) || (n <= t.length)) {
      return t;
  }
  var l = t.length;
  for (var i = 0; i < n - l; i++) {
      if (b == true) {
          t = c + t;
      }
       else {
          t += c;
      }
  }
  return t;
}
//16进制转浮点数float
function HexToSingle(t) {
  t = t.replace(/\s+/g, "");
  if (t == "") {
      return "";
  }
  if (t == "00000000") {
      return "0";
  }
  if ((t.length > 8) || (isNaN(parseInt(t, 16)))) {
      return "Error";
  }
  if (t.length < 8) {
      t = FillString(t, "0", 8, true);
  }
  t = parseInt(t, 16).toString(2);
  t = FillString(t, "0", 32, true);
  var s = t.substring(0, 1);
  var e = t.substring(1, 9);
  var m = t.substring(9);
  e = parseInt(e, 2) - 127;
  m = "1" + m;
  if (e >= 0) {
      m = m.substr(0, e + 1) + "." + m.substring(e + 1)
  }
   else {
      m = "0." + FillString(m, "0", m.length - e - 1, true)
  }
  if (m.indexOf(".") == -1) {
      m = m + ".0";
  }
  var a = m.split(".");
  var mi = parseInt(a[0], 2);
  var mf = 0;
  for (var i = 0; i < a[1].length; i++) {
      mf += parseFloat(a[1].charAt(i)) * Math.pow(2, -(i + 1));
  }
  m = parseInt(mi) + parseFloat(mf);
  if (s == 1) {
      m = 0 - m;
  }
  return m;
}
//浮点数转16进制
function SingleToHex(t) {
  if (t == "") {
      return "";
  }
  t = parseFloat(t);
  if (isNaN(t) == true) {
      return "Error";
  }
  if (t == 0) {
      return "00000000";
  }
  var s,
  e,
  m;
  if (t > 0) {
      s = 0;
  }
   else {
      s = 1;
      t = 0 - t;
  }
  m = t.toString(2);
  if (m >= 1) {
      if (m.indexOf(".") == -1) {
          m = m + ".0";
      }
      e = m.indexOf(".") - 1;
  }
   else {
      e = 1 - m.indexOf("1");
  }
  if (e >= 0) {
      m = m.replace(".", "");
  }
   else {
      m = m.substring(m.indexOf("1"));
  }
  if (m.length > 24) {
      m = m.substr(0, 24);
  }
   else {
      m = FillString(m, "0", 24, false)
  }
  m = m.substring(1);
  e = (e + 127).toString(2);
  e = FillString(e, "0", 8, true);
  var r = parseInt(s + e + m, 2).toString(16);
  r = FillString(r, "0", 8, true);
  // return InsertString(r, " ", 2).toUpperCase();
  return InsertString(r, 2).toUpperCase();

}
//“十六进制形式的字符串” 与 “字节数组” 相互转换
function Bytes2Str(arr)//字节数组转十六进制字符串
{
    var str = "";
    for(var i=0; i<arr.length; i++)
    {
       var tmp = arr[i].toString(16);
       if(tmp.length == 1)
       {
           tmp = "0" + tmp;
       }
       str += tmp;
    }
    return str;
}
//“十六进制形式的字符串” 与 “字节数组” 相互转换
function Str2Bytes(str)//十六进制字符串转字节数组
{
    var pos = 0;
    var len = str.length;
    if(len %2 != 0)
    {
       return null; 
    }
    len /= 2;
    var hexA = new Array();
    for(var i=0; i<len; i++)
    {
       var s = str.substr(pos, 2);
       var v = parseInt(s, 16);
       hexA.push(v);
       pos += 2;
    }
    return hexA;
}

//16进制转str类型
function HexToString(str) {
  if (str.length % 2 != 0) {
      this.$message.error('必须为偶数');
      return '';
  }
  let num;
  let arr = [];
  for (var i = 0; i < str.length; i = i + 2) {
      num = parseInt(str.substr(i, 2), 16);
      arr.push(String.fromCharCode(num));
  }
  return arr.join('');
}
//16进制转str类型
function hexToString(hex) {
  let out = '';
  for (let i = 0; i < hex.length; i++) {
    let h = (hex[i] / 16);
    if (h >= 10) {
      h = h - 10 + 97;
    } else {
      h = h + 48;
    }
    h = String.fromCharCode(h);
    out += h;

    let l = hex[i] % 16;
    if (l >= 10) {
      l = l - 10 + 97;
    } else {
      l = l + 48;
    }
    l = String.fromCharCode(l);
    out += l;

  }
  return out
  }



//16进制转int类型
function hex2int(hex) {
      var len = hex.length, a = new Array(len), code;
      for (var i = 0; i < len; i++) {
          code = hex.charCodeAt(i);
          if (48<=code && code < 58) {
              code -= 48;
          } else {
              code = (code & 0xdf) - 65 + 10;
          }
          a[i] = code;
      }
      
      return a.reduce(function(acc, c) {
          acc = 16 * acc + c;
          return acc;
      }, 0);
  }

//10进制转换为类似‘0x00d5’格式的16进制
function str_pad(hex){
  var zero = '0000';
  var tmp  = 4-hex.length;
  // return '0x' + zero.substr(0,tmp) + hex;
  return  zero.substr(0,tmp) + hex;
}


//确认温压流参数的数据类型
function CheckType(fsChoose){
  var num;
  var size;
  if (fsChoose.type=="float") {
    size = 0x02;
    num = 0x04;
  } else if(fsChoose.type=="UINT32"||fsChoose.type=="UINT16"||fsChoose.type=="UINT8"||fsChoose.type=="BOOL") {
    size = 0x01;
    num = 0x02;
  }
  return {size,num}
}


//Modbus协议写命令发送格式生产
function CreateWriteModbus(fsChoose,buffers){   //fsChoose选择的温压流设置参数，buffers为需要修改的值
  buffers = Value_to_Hex(fsChoose,buffers);
  var crcResult;
  var para = new Array();
  var obj = CheckType(fsChoose);
  para.length = 0;
	para[para.length++] = 0x01;//协议设备地址interFaceBoardAddr*********************************************
	para[para.length++] = 0x10;               //功能码
	para[para.length++] = (fsChoose.addr >> 8);//寄存器地址高字节
	para[para.length++] = (fsChoose.addr & 0xFF);//寄存器地址低字节
  para[para.length++] = (obj.size >> 8);//寄存器数量高字节
  para[para.length++] = (obj.size & 0xFF);//寄存器数量低字节
  para[para.length++] = obj.num;            //字节计数（寄存器*2）int16为02，float为04
  if(obj.num==0x04){
    var  buffer = buffers.substr(6,2)+buffers.substr(4,2)+buffers.substr(2,2)+buffers.substr(0,2);
    buffer = Str2Bytes(buffer);
    para[para.length++] = buffer[0];
    para[para.length++] = buffer[1] ;
    para[para.length++] = buffer[2];
    para[para.length++] = buffer[3];
  }else if(obj.num==0x02){
    var  buffer = buffers.substr(2,2)+buffers.substr(0,2);
    buffer = Str2Bytes(buffer);
    //console.log(buffer)
    para[para.length++] = buffer[0];
    para[para.length++] = buffer[1];
  }
	crcResult = CRC16(para);
	para[para.length++] = crcResult & 0x00FF;
  para[para.length++] = crcResult >> 8;
  para = buf2hex(para);
//	发送
  return para;
}

//Modbus协议读命令发送格式生产
function CreateReadModbus(fsChoose) {
  var crcResult;
  var para = new Array();
  var obj = CheckType(fsChoose);
  para.length = 0;
	para[para.length++] = 0x01;//协议设备地址interFaceBoardAddr*********************************
	para[para.length++] = 0x03;               //功能码
	para[para.length++] = (fsChoose.addr >> 8);//寄存器地址高字节
	para[para.length++] = (fsChoose.addr & 0xFF);//寄存器地址低字节
	para[para.length++] = (obj.size >> 8);//寄存器数量高字节
  para[para.length++] = (obj.size & 0xFF);//寄存器数量低字节
	//para.length += size;
	crcResult = CRC16(para);
	para[para.length++] = crcResult & 0x00FF;
  para[para.length++] = crcResult >> 8;
  para = buf2hex(para);
	//	发送读命令
  return para;
}



//Modbus Ask 函数，检查命令返回数据帧并解析   //读命令返回HEX数据段  //写命令提示设置是否成功
function ModbusAsk(ask) {     
  //var shebei_addr_get = 01
  var ask = ask.toString(16);
  var shebei_addr = ask.substr(0,2);  //确认设备地址   //如果地址正确or错误
  if (shebei_addr=="01") {      //设备地址后续改成可设的**************************************************************
    var gongnengma = ask.substr(2,2);//功能码，寄存器地址
  //如果是功能码03为读取的参数
    if (gongnengma=="03") {         //读命令返回，返回截取的HEX格式的数据段      
      var zijiejishu = ask.substr(4,2);//字节计数
        if (zijiejishu == "04") {//4个字节
          //蓝牙返回数据计算CRC
          var  buffer = ask.substr(0,2)+ask.substr(2,2)+ask.substr(4,2)+ask.substr(6,2)+ask.substr(8,2)+ask.substr(10,2)+ask.substr(12,2);
          buffer = Str2Bytes(buffer);
          var HexValue = ask.substr(6,8);
          var CRC_read = ask.substr(14,4);
          var CRC_check = CRC16(buffer);
          var para = new Array();
          para[0] = CRC_check & 0x00FF;
          para[1] = CRC_check >> 8;
          CRC_check = buf2hex(para);
          //蓝牙返回数据计算CRC
          if (CRC_read == CRC_check) {            //crc校验成功
            return HexValue;
          } else { //crc校验失败
            wx.showToast({
              title: '校验失败',
              icon: 'loading',
              duration: 2000
            })
            return
          }
        } else if (zijiejishu == "02")  {  //2个字节
                    //蓝牙返回数据计算CRC
                    var  buffer = ask.substr(0,2)+ask.substr(2,2)+ask.substr(4,2)+ask.substr(6,2)+ask.substr(8,2);
                    buffer = Str2Bytes(buffer);
                    var HexValue = ask.substr(6,4);
                    var CRC_read = ask.substr(10,4);
                    var CRC_check = CRC16(buffer);
                    var para = new Array();
                    para[0] = CRC_check & 0x00FF;
                    para[1] = CRC_check >> 8;
                    CRC_check = buf2hex(para);
                    //蓝牙返回数据计算CRC
          if (CRC_read == CRC_check) {            //crc校验成功
            return HexValue;
          } else { //crc校验失败
            wx.showToast({
              title: '校验失败',
              icon: 'loading',
              duration: 2000
            })
            return
          }
        }
    } else if(gongnengma=="10") {   //写命令返回，提示发送是否成功
      //跳过判断寄存器地址与寄存器数量是否正确的判断
                //蓝牙返回数据计算CRC
                var  buffer = ask.substr(0,2)+ask.substr(2,2)+ask.substr(4,2)+ask.substr(6,2)+ask.substr(8,2)+ask.substr(10,2);
                buffer = Str2Bytes(buffer);
                var CRC_read = ask.substr(12,4);
                var CRC_check = CRC16(buffer);
                var para = new Array();
                para[0] = CRC_check & 0x00FF;
                para[1] = CRC_check >> 8;
                CRC_check = buf2hex(para);
                //蓝牙返回数据计算CRC
      if (CRC_read == CRC_check) {            //crc校验成功
        wx.showToast({
          title: '设置成功',
          icon: 'success',
          duration: 2000
        })
        return true;
      } else { //crc校验失败
        wx.showToast({
          title: '设置失败',
          icon: 'loading',
          duration: 2000
        })
        return false;
      }
    } else{
    wx.showToast({
      title: '返回命令错误',
      icon: 'loading',
      duration: 2000
    })
      return false;
    }
  //确认寄存器地址，找到数据类型，转换数据，显示在对应的位置 swich case 0x0006:  fs_choose = fs[1];   调用Hex_to_Value(fs_choose，buffers)得到数据显示

  //如果是功能码10为写命令的应答
  //确认应答是否成功。若成功显示设置成功，若超时未接收显示设置失败
  } else {
    wx.showToast({
      title: '返回超时或设备地址错误',
      icon: 'loading',
      duration: 2000
    })
    return;
  }
  


}

//uint8/16/32&float&bool 数据类型转换成 HEX 函数再传入Modbus命令中
function Value_to_Hex(fsChoose,buffers) {
  if (fsChoose.type == "float") {
    var buffer;
    //console.log(buffers)
     buffer = SingleToHex(buffers)//float转HEX
     //console.log(buffer)
  } else if(fsChoose.type == "UINT32") {
    var buffer =  buffers.toString(16)   //UINT32转HEX
    buffer =  str_pad(buffer)   //10进制转换为类似‘0x00d5’格式的16进制
  }else if(fsChoose.type == "UINT16") {
    var buffer =  buffers.toString(16)   //UINT32转HEX
    buffer =  str_pad(buffer)   
  }else if(fsChoose.type == "UINT8") {
    var buffer =  buffers.toString(16)   //UINT32转HEX
    buffer =  str_pad(buffer)   
    buffer = buffer.substr(2,2)+buffer.substr(0,2);
  }else if(fsChoose.type == "BOOL") {
    var buffer =  buffers.toString(16)   //UINT32转HEX
    buffer =  str_pad(buffer)   
    buffer = buffer.substr(2,2)+buffer.substr(0,2);
  }
  return buffer;
}

// HEX转换成 uint8/16/32&float&bool 数据类型 函数再传给显示界面
function Hex_to_Value(fsChoose,buffers) {
  var buffer;
  var buffers = buffers.toString(16);
  if (fsChoose.type == "float") {
    buffer = buffers.substr(6,2)+buffers.substr(4,2)+buffers.substr(2,2)+buffers.substr(0,2);
    buffer = HexToSingle(buffer);
  } else if(fsChoose.type == "UINT32") {
    var aa = buffers.substr(2,2)+buffers.substr(0,2);
    buffer = hex2int(aa);
  }else if(fsChoose.type == "UINT16") {
    var aa = buffers.substr(2,2)+buffers.substr(0,2);
    buffer = hex2int(aa);
  }else if(fsChoose.type == "UINT8") {
    var aa = buffers.substr(2,2);
    buffer = parseInt(aa);
  }else if(fsChoose.type == "BOOL") {
    var aa = buffers.substr(2,2);
    buffer = parseInt(aa);
  }else{
    return false;
  }  
  return buffer;
}


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
  wendu:function (e) {
    //var modbus = require('../modbus/modbus.js')  //调用其他页面的函数
    var buffer= '010304544695c2e517'
    buffer = ModbusAsk(buffer)
    console.log(buffer)
    this.setData({
      name:buffer
    })
    //  console.log(x)
    //  var str = "0100";
    //  console.log(str)
    //  var xx = hex2int(str)
    //  console.log(xx)
 
    //  var buffers = "0100"
    //  var aa = buffers.substr(2,2)+buffers.substr(0,2);
    //  console.log(aa)
    //  var bb = hex2int(aa)
    //  console.log(bb)
    //  // var buffer = bb[0]&bb[1]
    //  // console.log(buffer)
    //  wx.showToast({
    //    title: '设备地址错误',
    //    icon: 'error',
    //    duration: 2000
    //  })
 
     
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
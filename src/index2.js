import scss from "./css/common2.scss";

import Barrage from './utils/barrage.js';
import example from './data/barrage.json'; // 组件提供的示例数据
function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
  
    var uuid = s.join("");
    return uuid;
}

// 加载弹幕
const barrage = new Barrage({
    container: document.getElementById('warp'), // 父级容器
    data: example, // 弹幕数据
    config: {
      // 全局配置项
      duration: 20000, // 弹幕循环周期(单位：毫秒)
      defaultColor: '#fff', // 弹幕默认颜色
    },
  });
  
// 播放弹幕
barrage.play();

document.getElementById('barrage-button').onclick=function(){
    var value = document.getElementById('barrage-input').value;
    document.getElementById('barrage-input').value='';

    var time = (Date.now()-barrage.startTime+3000)%barrage.config.duration;
    console.log(value,time);
    // 新增一条弹幕
    barrage.add({
        key: uuid(), // 弹幕的唯一标识
        time: time, // 弹幕出现的时间(单位：毫秒)
        text: value, // 弹幕文本内容
        fontSize: 24, // 该条弹幕的字号大小(单位：像素)，会覆盖全局设置
        color: '#f00', // 该条弹幕的颜色，会覆盖全局设置
    });

}
// 让车子后面显示加速状态
function activateflame(e, a) {
  parseInt($(`#car${a}`).css('left')) > e ? ($(`.car${a} .wind`).css('display', 'block'), $(`.car${a} .flame`).css('display', 'block')) : ($(`.car${a} .wind`).css('display', 'none'), $(`.car${a} .flame`).css('display', 'none'));
}
// 车子动画
function animate() {
  let e = Math.floor(40 * Math.random() + 30);
  e /= 10;
  let a = Math.floor(40 * Math.random() + 30);
  a /= 10;
  let t = Math.floor(40 * Math.random() + 30);
  t /= 10;
  let n = Math.floor(40 * Math.random() + 30);
  n /= 10;
  let o = Math.floor(40 * Math.random() + 30);
  o /= 10;
  let r = Math.floor(40 * Math.random() + 30);
  r /= 10;
  let s = Math.floor(40 * Math.random() + 30);
  s /= 10;
  let l = Math.floor(40 * Math.random() + 30);
  l /= 10;
  let i = Math.floor(40 * Math.random() + 30);
  i /= 10;
  let c = Math.floor(40 * Math.random() + 30);
  c /= 10;
  let d = Math.floor(10 * Math.random() + 1);
  d /= 10;
  let f = Math.floor(10 * Math.random() + 1);
  f /= 10;
  let m = Math.floor(10 * Math.random() + 1);
  m /= 10;
  let u = Math.floor(10 * Math.random() + 1);
  u /= 10;
  let p = Math.floor(10 * Math.random() + 1);
  p /= 10;
  let v = Math.floor(10 * Math.random() + 1);
  v /= 10;
  let h = Math.floor(10 * Math.random() + 1);
  h /= 10;
  let y = Math.floor(10 * Math.random() + 1);
  y /= 10;
  let w = Math.floor(10 * Math.random() + 1);
  w /= 10;
  let $ = Math.floor(10 * Math.random() + 1);
  $ /= 10;
  let M = Math.floor(1100 * Math.random() + 200);
  activateflame(M, '1'),
  M += 'px';
  let g = Math.floor(1100 * Math.random() + 200);
  activateflame(g, '2'),
  g += 'px';
  let x = Math.floor(1100 * Math.random() + 200);
  activateflame(x, '3'),
  x += 'px';
  let I = Math.floor(1100 * Math.random() + 200);
  activateflame(I, '4'),
  I += 'px';
  let T = Math.floor(1100 * Math.random() + 200);
  activateflame(T, '5'),
  T += 'px';
  let B = Math.floor(1100 * Math.random() + 200);
  activateflame(B, '6'),
  B += 'px';
  let E = Math.floor(1100 * Math.random() + 200);
  activateflame(E, '7'),
  E += 'px';
  let k = Math.floor(1100 * Math.random() + 200);
  activateflame(k, '8'),
  k += 'px';
  let b = Math.floor(1100 * Math.random() + 200);
  activateflame(b, '9'),
  b += 'px';
  let A = Math.floor(1100 * Math.random() + 200);
  activateflame(A, '10'),
  A += 'px';
  const L = document.getElementById('car1');
  const C = document.getElementById('car2');
  const N = document.getElementById('car3');
  const S = document.getElementById('car4');
  const q = document.getElementById('car5');
  const _ = document.getElementById('car6');
  const D = document.getElementById('car7');
  const F = document.getElementById('car8');
  const O = document.getElementById('car9');
  const R = document.getElementById('car10');
  TweenMax.to(L, e, {
    left: M,
    delay: d,
  }),
  TweenMax.to(C, a, {
    left: g,
    delay: f,
  }),
  TweenMax.to(N, t, {
    left: x,
    delay: m,
  }),
  TweenMax.to(S, n, {
    left: I,
    delay: u,
  }),
  TweenMax.to(q, o, {
    left: T,
    delay: p,
  }),
  TweenMax.to(_, r, {
    left: B,
    delay: v,
  }),
  TweenMax.to(D, s, {
    left: E,
    delay: h,
  }),
  TweenMax.to(F, l, {
    left: k,
    delay: y,
  }),
  TweenMax.to(O, i, {
    left: b,
    delay: w,
  }),
  TweenMax.to(R, c, {
    left: A,
    delay: $,
  });
}
function sortFloat(e, a) {
  return e - a;
}
// 校准中奖号码与对应的图片
function checkposition() {
  carposition = new Array();
  carsequence = new Array();
  my_array = new Array();
  for (n = 0; n < 10; n++) {
    const e = n + 1;
    let a = parseInt($(`#car${e}`).css('left'));
    a = `${a += carpositionoffset[n]}.${n}`;
    carposition[n] = parseFloat(a);
  }
  carposition.sort(sortFloat);
  for (n = 0; n < 10; n++) {
    let t = carposition[n];
    t = String(t);
    my_array = t.split('.');
    void 0 == my_array[1] ? carsequence[n] = '0' : carsequence[n] = my_array[1];
  }
  for (var n = 0; n < 10; n++) {
    const o = `#pos${n + 1}`;
    const r = -64 * carsequence[n];
    $(o).css('background-position', `0px ${r}px`);
  }
}
// 车轮子显示
function wheelon() {
  for (let e = 1; e < 11; e++) {
    $(`.wheel${e}a`).css('display', 'block');
    $(`.wheel${e}b`).css('display', 'block');
  }
}
// 滚动轮子消失
function wheeloff() {
  for (let e = 1; e < 11; e++) {
    $(`.wheel${e}a`).css('display', 'none');
    $(`.wheel${e}b`).css('display', 'none');
  }
}
function update(data) {
  if (!data) {
    return '';
  }
  return data;
}
// 入口；倒计时前的数据处理
function disposeDate(data) {
  // o=获取开始时间和结束时间的时间差，单位为秒 ; pubmethod.tools.cutTime('2019-05-03 00:10:00', '2019-05-03 09:30:51')
  // s=中奖号码、
  for (let o = data.marketCountDownTime, s = update(data.lotteryNumber).split(','), i = '', u = 0, n = s.length; u < n; u++) {
    s[u].substr(0, 1) == '0' ? i += `${s[u].substr(1, 1)},` : i += `${s[u]},`;
    // 显示上面的中奖号码，期数，期号，冠亚军，龙虎号
    // 如果时间小于0，就等于1秒；
    o = o < 0 ? 1 : o;
    showcurrentresult(i);
    $('#currentdrawid').text(data.periodicalTime);
    $('#nextdrawid').text(data.periodicalNumber);
    if (update(data.lotteryNumber)[0]) {
      // 有奖
      $('#stat1_1').text(data.size[0]);
      $('#stat1_2').text(data.size[1]);
      $('#stat1_3').text(data.size[2]);
      $('#stat2_1').text(data.longHu[0]);
      $('#stat2_2').text(data.longHu[1]);
      $('#stat2_3').text(data.longHu[2]);
      $('#stat2_4').text(data.longHu[3]);
      $('#stat2_5').text(data.longHu[4]);
    } else {
      // 无奖时动画
      $('#stat1_1').text('请');// 冠亚和
      $('#stat1_2').text('稍');// 冠亚和大小
      $('#stat1_3').text('等');// 冠亚和单双
      $('#stat2_1').text('等');// 龙虎
      $('#stat2_2').text('待');
      $('#stat2_3').text('开');
      $('#stat2_4').text('奖');
      $('#stat2_5').text('中');
    }
    $('#hlogo').find('img').attr('src', 'images/logo-pk10.png');
    $('.statuslogo').css({ background: 'url(images/logo-pk10.png)no-repeat' });
    startcountdown(data.marketCountDownTime, data.lockCountDownTime, data.lotteryNumber, data);
  }
}

/**
 * 开始倒计时动画
 * @param {*} marketCountDownTime :倒计时显示的秒
 * @param {*} a 数据
 */
function startcountdown(marketCountDownTime, lockCountDownTime, lotteryNumber, data) {
  // if (TweenLite.killDelayedCallsTo(winnerpage), $('.page1').css('display', 'block'), $('.page2').css('display', 'none'), waitfinish == 1) return !1;
  stopanimation();
  $('#car1').css('left', '1206px');
  $('#car2').css('left', '1197px');
  $('#car3').css('left', '1181px');
  $('#car4').css('left', '1166px');
  $('#car5').css('left', '1153px');
  $('#car6').css('left', '1139px');
  $('#car7').css('left', '1128px');
  $('#car8').css('left', '1105px');
  $('#car9').css('left', '1084px');
  $('#car10').css('left', '1067px');
  $('.roadstart').css('left', '960px');
  $('.trafficlight').css('display', 'block');
  $('.redlight').css('display', 'none');
  $('.yellowlight').css('display', 'none');
  $('.greenlight').css('display', 'none');
  $('.countdownnum').html('');
  $('.countdownnum2').html('');
  $('.countdownnum').css('display', 'block');
  $('.countdownnum2').css('display', 'block');
  // 开始倒计时
  if (lotteryNumber) {
    haveLotteryAnimateFormat(data);
  } else {
    formatAnimate(marketCountDownTime, lockCountDownTime, data);
  }
}
// 无奖格式
function formatAnimate(marketCountDownTime, lockCountDownTime) {
  let sum = marketCountDownTime + lockCountDownTime;
  clearInterval(countdowninv);
  clearInterval(countdowninv2);
  countdowninv = setInterval(() => {
    marketCountDownTime -= 1;
    sum = marketCountDownTime + lockCountDownTime;
    countdowntimer(sum, lockCountDownTime);
    countdown(sum, marketCountDownTime);
    marketCountDownTime + lockCountDownTime == 0 && (clearInterval(countdowninv), clearInterval(countdowninv2));
  }, 1e3);
  let t = 99;
  // 分秒倒计时
  countdowninv2 = setInterval(() => {
    minisectimer(t, sum);
    t == 0 && (t = 99);
    t -= 1;
  }, 10);
  // lotteryNumber ? haveLotteryAnimate(sum, data) : countdowntimer(sum, lockCountDownTime);
  countdowntimer(sum, lockCountDownTime);
  countdown(sum, marketCountDownTime);
}
// 有奖格式动画
function haveLotteryAnimateFormat(data) {
  let sum = 3;
  clearInterval(countdowninv);
  clearInterval(countdowninv2);
  countdowninv = setInterval(() => {
    sum -= 1;
    haveLotteryAnimate(sum, data);
    countdown(sum, 0);
    sum == 0 && (clearInterval(countdowninv), clearInterval(countdowninv2));
  }, 1e3);
  let t = 99;
  // 分秒倒计时
  countdowninv2 = setInterval(() => {
    minisectimer(t);
    t == 0 && (t = 99);
    t -= 1;
  }, 10);
  haveLotteryAnimate(sum, data);
  countdown(sum, 0);
}
// 毫秒动画
function minisectimer(e) {
  const a = convertTime(e);
  $('.countdownnum2').html(a);
}
// 转换时间
function convertTime(e) {
  let a = String(e);
  return a.length == 1 ? a = `0${a}` : a;
}
// 秒种倒计时
function countdown(sum, marketCountDownTime) {
  let e = null;
  e = marketCountDownTime > 0 ? marketCountDownTime : sum;
  let a = e / 60;
  if ((a = Math.floor(a)) == 0) var t = '00';
  else t = convertTime(t = String(a));
  const n = convertTime(e - 60 * a);
  e <= 0 ? ($('.countdownnum').html('00:00'), $('.countdownnum2').html('00')) : $('.countdownnum').html(`${t}:${n}`);
}
// 无奖号，秒钟最后3秒倒计时
function countdowntimer(sum, lockCountDownTime) {
  const e = sum;
  e >= 0 ? $('.trafficlight').css('display', 'block') : $('.trafficlight').css('display', 'none');
  e <= lockCountDownTime ? $('#hint').css('display', 'block') : $('#hint').css('display', 'none');
  // e <= 3 && $('.redlight').css('display', 'block');
  // // e == 2 && videoTools.ifsund() && ($('#sound').attr('src', 'sound/cuttime.mp3'), $('#sound').removeAttr('loop'), document.getElementById('sound').play());
  // e <= 2 && $('.yellowlight').css('display', 'block');
  // e <= 1 && ($('.greenlight').css('display', 'block'), $('.trafficlight').delay(500).fadeOut(300));
  // e <= 0 && (startanimation(), $('.countdownnum').html('00:00'), $('.countdownnum2').html('00'), $('#hint').css('display', 'none'));
}
// 有奖动画,秒钟最后3秒倒计时
function haveLotteryAnimate(sum, data) {
  const e = sum;
  e >= 0 ? $('.trafficlight').css('display', 'block') : $('.trafficlight').css('display', 'none');
  e <= 3 && $('.redlight').css('display', 'block');
  // e == 2 && videoTools.ifsund() && ($('#sound').attr('src', 'sound/cuttime.mp3'), $('#sound').removeAttr('loop'), document.getElementById('sound').play());
  e <= 2 && $('.yellowlight').css('display', 'block');
  e <= 1 && ($('.greenlight').css('display', 'block'), $('.trafficlight').delay(500).fadeOut(300));
  e <= 0 && (startanimation(data), $('.countdownnum').html('00:00'), $('.countdownnum2').html('00'), $('#hint').css('display', 'none'));
}
// 开始动画
function startanimation(data) {
  $('.trafficlight').css('display', 'none');// 红绿灯消失
  // setTimeout(() => {
  //   // 开始音乐播放
  //   // videoTools.ifsund() && ($('#sound').attr('src', 'sound/staring.mp3'), $('#sound').attr('loop', 'loop'), document.getElementById('sound').play());
  // }, 1e3);
  wheelon();// 车轮子动；
  const e = document.getElementById('roadstart');// 起跑线；逐渐消失；
  TweenMax.to(e, 1, {
    left: '1334px',
    ease: Power1.easeIn,
  });
  const a = document.getElementById('roaditm');// 跑道向右运动；
  TweenMax.to(a, 0.4, {
    left: '-120px',
    repeat: -1,
    ease: Linear.easeNone,
  });
  const t = document.getElementById('scenaryitm');// 背景向右移动变化；
  TweenMax.to(t, 20, {
    left: '0',
    repeat: -1,
    ease: Linear.easeNone,
  }),
  $('wheel1a').css('display', 'block'); // 轮子出来
  // animation1 = setInterval(() => {
  //   animate();// 车子跑
  // }, 3e3);
  animation2 = setInterval(() => {
    checkposition();// 位置变化
  }, 300);
  animate();
  wheelon();
  let tiemr = null;
  clearTimeout(tiemr);
  tiemr = setTimeout(() => {
    finishgame(data.lotteryNumber);
    clearTimeout(tiemr);
  }, data.animationDuration);
}

// 车子加速动画
function windflameani() {
  $('.wind').animate({
    opacity: 0.7,
  }, 150, () => {
    $('.wind').css('opacity', '1');
  }), $('.flame').animate({
    opacity: 0.7,
  }, 150, () => {
    $('.flame').css('opacity', '1');
  });
}
// 停止状态
function stopanimation() {
  $('#roaditm').css('left', '-1300px');
  $('#scenaryitm').css('left', '-1334px');
  $('.wind').css('display', 'none');
  $('.flame').css('display', 'none');
  TweenMax.killAll();
  wheeloff(); // 滚动轮子消失
  clearInterval(animation1); // 清除车子跑定时器
  clearInterval(animation2); // 清除位置变化定时器
  clearInterval(countdowninv); // 清除秒定时器
  clearInterval(countdowninv2);// 清除分秒定时器
}
// 获得随机数
function getRandomInt(e, a) {
  return Math.floor(Math.random() * (a - e + 1)) + e;
}
// 游戏过程
function midgame(data) {
  if (TweenLite.killDelayedCallsTo(winnerpage), $('.page1').css('display', 'block'), $('.page2').css('display', 'none'), waitfinish == 1) return !1;
  stopanimation();
  $('#roadstart').css('left', '1334px');
  $('.trafficlight').css('display', 'none');
  for (let e = 1; e < 11; e++) {
    const a = getRandomInt(200, 1e3);
    $(`#car${e}`).css('left', `${a}px`);
  }
  startanimation(data);
}
/**
 * 即将完成比赛
 * @param {*} e
 */
function finishgame(e) {
  // 完成比赛关闭声音
  if (setTimeout(() => {
    // $('#sound').attr('src', 'sound/over.mp3'),
    // document.getElementById('sound').pause();
    // videoTools.ifsund() && ($('#sound').removeAttr('loop'), document.getElementById('sound').play());
    // setTimeout(() => {
    //   $('#sound').removeAttr('src');
    // }, 4e3);
  }, 3e3),
  TweenLite.killDelayedCallsTo(winnerpage), $('.page1').css('display', 'block'), $('.page2').css('display', 'none'), waitfinish == 1) return !1;
  waitfinish = !0;
  TweenMax.killAll();
  wheelon();
  $('#roaditm').css('left', '-1300px');
  const a = document.getElementById('roaditm');// 跑道
  TweenMax.to(a, 0.4, {
    left: '-120px',
    repeat: -1,
    ease: Linear.easeNone,
  });
  const t = document.getElementById('scenaryitm');// 背景
  TweenMax.to(t, 20, {
    left: '0',
    repeat: -1,
    ease: Linear.easeNone,
  });
  const n = document.getElementById('roadstart');// 起跑线
  TweenMax.to(n, 1, {
    left: '1334px',
    ease: Linear.easeNone,
    delay: 3,
  });
  const o = setInterval(() => {
    checkposition();
  }, 300);
  $('#roadstart').css('left', '-250px');
  $('.trafficlight').css('display', 'none');// 红绿灯消失
  clearInterval(animation1);
  clearInterval(countdowninv);
  clearInterval(countdowninv2);
  for (let r = e.split(','), s = 0; s < 10; s++) {
    let l = Math.floor(10 * Math.random() + 1);
    l /= 10;
    const i = parseInt(r[s]) - 1;
    const c = 100 * s - carpositionoffset[i] + 350;
    const d = `${c}px`;
    const f = `car${r[s]}`;
    const m = document.getElementById(f);
    activateflame(c, r[s]);
    TweenMax.to(m, 3, {
      left: d,
      delay: l,
    });
  }
  $('.flashlight').delay(3200).fadeIn(100,
    () => {
      $('.flashlight').fadeOut(500);
      clearInterval(o);
      waitfinish = !1;
      resultpage(e);
    });
}
// 显示结果页；显示中奖号码
function resultpage(e) {
  if ($('.page1').css('display', 'block'), $('.page2').css('display', 'none'), waitfinish == 1) return !1;
  stopanimation();
  $('#roadstart').css('left', '130px');
  $('.trafficlight').css('display', 'none');
  for (let a = e.split(','), t = 0; t < 10; t++) {
    const n = parseInt(a[t]) - 1;
    const o = `${100 * t - carpositionoffset[n] + 350}px`;
    const r = `car${a[t]}`;
    $(`#${r}`).css('left', o);
  }
  showcurrentresult(e);
  TweenLite.delayedCall(2, winnerpage, [e]);
}
// 显示动态结果；根据中奖号码，显示对象的图片
function showcurrentresult(e) {
  for (let a = e.split(','), t = 0; t < 10; t++) {
    const n = `#pos${t + 1}`;
    const o = -64 * (a[t] - 1);
    // $(n).css('background-position', `0px ${o}px`);
  }
}
// 获胜
function winnerpage(e) {
  $('.resultitm').css('opacity', 0);
  $('.resultcar1').css('left', '483px');
  $('.resultcar1').css('top', '288px');
  $('.resultcar2').css('left', '170px');
  $('.resultcar2').css('top', '251px');
  $('.resultcar3').css('left', '946px');
  $('.resultcar3').css('top', '254px');
  const a = e.split(',');
  $('.page1').css('display', 'none');
  $('.page2').css('display', 'block');
  for (let t = 0; t < 3; t++) {
    const n = `.resultcarimg${t + 1}`;
    $(n).attr('src', `images/winner${a[t]}.png`);
  }
  const o = document.getElementById('resultcar1');
  TweenMax.to(o, 1, {
    left: '395px',
    top: '328px',
    opacity: 1,
    delay: 0.2,
  });
  const r = document.getElementById('resultcar2');
  TweenMax.to(r, 1, {
    left: '81px',
    top: '287px',
    opacity: 1,
    delay: 0.7,
  });
  const s = document.getElementById('resultcar3');
  TweenMax.to(s, 1, {
    left: '859px',
    top: '291px',
    opacity: 1,
    delay: 1.2,
  });
  const l = document.getElementById('result1');
  TweenMax.to(l, 1, {
    opacity: 1,
    delay: 0.2,
  });
  const i = document.getElementById('result2');
  TweenMax.to(i, 1, {
    opacity: 1,
    delay: 0.7,
  });
  const c = document.getElementById('result3');
  TweenMax.to(c, 1, {
    opacity: 1,
    delay: 1.2,
  });
  // 新增跑完刷新页面
  // let timer = null;
  // clearTimeout(timer);
  // timer = setTimeout(() => {
  //   window.location.reload();
  //   clearTimeout(timer);
  // }, 3000);
}
// 隐藏地址栏
function hideAddressBar() {
  setTimeout(() => {
    window.scrollTo(0, 1);
  }, 0);
}

let animation1; let animation2; let waitfinish; const
  videoTools = {};
// 点击关闭或打开声音
// $(() => {
//   $('.currentdraw').on('click', '#closeSound',
//     function () {
//       $(this).hasClass('closesoundbtn')
//         ? ($(this).removeClass('closesoundbtn'), document.getElementById('sound').play(), ifopen = !0)
//         : ($(this).addClass('closesoundbtn'), ifopen = !1, void 0 != $('#sound').attr('src') && document.getElementById('sound').pause());
//     });
// });
var carpositionoffset = [0, 9, 25, 40, 53, 67, 78, 101, 122, 139]; // 车子跑动的偏移量
let countdowninv;
let countdowninv2;
// 车子加速动画
const animation3 = setInterval(() => {
  windflameani();
}, 150);
// 监听，页面加载后，隐藏地址栏
window.addEventListener('load', () => {
  hideAddressBar();
});
// 监听屏幕变化，隐藏地址栏
window.addEventListener('orientationchange', hideAddressBar);
// e为true。声音开始为播放状态
videoTools.ifsund = function () {
  // let e = null;
  // return e = !$('#closeSound').hasClass('closesoundbtn'),
  // console.log(`flag：${e}`),
  // e;
};

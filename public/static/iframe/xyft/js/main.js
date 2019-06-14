function activateflame (a, t) {
  parseInt($(`#car${t}`).css('left')) > a ? ($(`.car${t} .wind`).css('display', 'block'), $(`.car${t} .flame`).css('display', 'block')) : ($(`.car${t} .wind`).css('display', 'none'), $(`.car${t} .flame`).css('display', 'none'));
}
// 飞艇移动动画
function animate () {
  let a = Math.floor(40 * Math.random() + 30);
  a /= 10;
  let t = Math.floor(40 * Math.random() + 30);
  t /= 10;
  let e = Math.floor(40 * Math.random() + 30);
  e /= 10;
  let n = Math.floor(40 * Math.random() + 30);
  n /= 10;
  let o = Math.floor(40 * Math.random() + 30);
  o /= 10;
  let r = Math.floor(40 * Math.random() + 30);
  r /= 10;
  let l = Math.floor(40 * Math.random() + 30);
  l /= 10;
  let i = Math.floor(40 * Math.random() + 30);
  i /= 10;
  let s = Math.floor(40 * Math.random() + 30);
  s /= 10;
  let c = Math.floor(40 * Math.random() + 30);
  c /= 10;
  let d = Math.floor(10 * Math.random() + 1);
  d /= 10;
  let m = Math.floor(10 * Math.random() + 1);
  m /= 10;
  let u = Math.floor(10 * Math.random() + 1);
  u /= 10;
  let p = Math.floor(10 * Math.random() + 1);
  p /= 10;
  let f = Math.floor(10 * Math.random() + 1);
  f /= 10;
  let y = Math.floor(10 * Math.random() + 1);
  y /= 10;
  let h = Math.floor(10 * Math.random() + 1);
  h /= 10;
  let v = Math.floor(10 * Math.random() + 1);
  v /= 10;
  let g = Math.floor(10 * Math.random() + 1);
  g /= 10;
  let w = Math.floor(10 * Math.random() + 1);
  w /= 10;
  let $ = Math.floor(1100 * Math.random() + 200);
  activateflame($, '1'),
    $ += 'px';
  let M = Math.floor(1100 * Math.random() + 200);
  activateflame(M, '2'),
    M += 'px';
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
  let k = Math.floor(1100 * Math.random() + 200);
  activateflame(k, '7'),
    k += 'px';
  let E = Math.floor(1100 * Math.random() + 200);
  activateflame(E, '8'),
    E += 'px';
  let b = Math.floor(1100 * Math.random() + 200);
  activateflame(b, '9'),
    b += 'px';
  let A = Math.floor(1100 * Math.random() + 200);
  activateflame(A, '10'),
    A += 'px';
  const L = document.getElementById('car1');
  const _ = document.getElementById('car2');
  const H = document.getElementById('car3');
  const N = document.getElementById('car4');
  const C = document.getElementById('car5');
  const S = document.getElementById('car6');
  const q = document.getElementById('car7');
  const G = document.getElementById('car8');
  const Y = document.getElementById('car9');
  const D = document.getElementById('car10');
  TweenMax.to(L, a, {
    left: $,
    delay: d,
  }),
    TweenMax.to(_, t, {
      left: M,
      delay: m,
    }),
    TweenMax.to(H, e, {
      left: x,
      delay: u,
    }),
    TweenMax.to(N, n, {
      left: I,
      delay: p,
    }),
    TweenMax.to(C, o, {
      left: T,
      delay: f,
    }),
    TweenMax.to(S, r, {
      left: B,
      delay: y,
    }),
    TweenMax.to(q, l, {
      left: k,
      delay: h,
    }),
    TweenMax.to(G, i, {
      left: E,
      delay: v,
    }),
    TweenMax.to(Y, s, {
      left: b,
      delay: g,
    }),
    TweenMax.to(D, c, {
      left: A,
      delay: w,
    });
}
// 返回一个差值
function sortFloat (a, t) {
  return a - t;
}
// 校对飞艇位置
function checkposition () {
  carposition = new Array(),
    carsequence = new Array(),
    my_array = new Array();
  for (n = 0; n < 10; n++) {
    const a = n + 1;
    let t = parseInt($(`#car${a}`).css('left'));
    t = `${t += carpositionoffset[n]}.${n}`,
      carposition[n] = parseFloat(t);
  }
  carposition.sort(sortFloat);
  for (n = 0; n < 10; n++) {
    let e = carposition[n];
    e = String(e),
      my_array = e.split('.'),
      void 0 == my_array[1] ? carsequence[n] = '0' : carsequence[n] = my_array[1];
  }
  for (var n = 0; n < 10; n++) {
    const o = `#pos${n + 1}`;
    const r = -64 * carsequence[n];
    $(o).css('background-position', `0px ${r}px`);
  }
}
// 隐藏加速样式
function wheelon () {
  for (let a = 1; a < 11; a++) {
    $(`.wheel${a}a`).css('display', 'block'),
      $(`.wheel${a}b`).css('display', 'block');
  }
}
// 显示加速样式；
function wheeloff () {
  for (let a = 1; a < 11; a++) {
    $(`.wheel${a}a`).css('display', 'none'),
      $(`.wheel${a}b`).css('display', 'none');
  }
}
// 尾部动画隐藏；
function wheeloff_2 () {
  for (let a = 1; a < 11; a++) $(`.wheel${a}b`).css('display', 'none');
}
function update (data) {
  if (!data) {
    return '';
  }
  return data;
}
// 入口数据；
function disposeDate (data) {
  // var o = pubmethod.tools.cutTime(r.drawTime, r.serverTime),结果为倒计时时间
  for (let s = update(data.lotteryNumber).split(','), i = [], u = 0, n = s.length; u < n; u++) s[u].substr(0, 1) == '0' ? i.push(1 * s[u].substr(1, 1)) : i.push(1 * s[u]);
  showcurrentresult(data.lotteryNumber);
  $('#currentdrawid').text(data.periodicalNumber);// 期号
  $('#nextdrawid').text(data.periodicalTime);// 奖期20190509012

  if (!!update(data.lotteryNumber)[0]) {
    $('#stat1_1').text(data.sumNum[0]);// 冠亚和
    $('#stat1_2').text(data.sumNum[1]);// 冠亚和大小
    $('#stat1_3').text(data.sumNum[2]);// 冠亚和单双
    $('#stat2_1').text(data.longHu[0]);//龙虎
    $('#stat2_2').text(data.longHu[1]);
    $('#stat2_3').text(data.longHu[2]);
    $('#stat2_4').text(data.longHu[3]);
    $('#stat2_5').text(data.longHu[4]);
  } else {
    // 无奖时动画
    $('#stat1_1').text('请');// 冠亚和
    $('#stat1_2').text('稍');// 冠亚和大小
    $('#stat1_3').text('等');// 冠亚和单双
    $('#stat2_1').text('等');//龙虎
    $('#stat2_2').text('待');
    $('#stat2_3').text('开');
    $('#stat2_4').text('奖');
    $('#stat2_5').text('中');
  }
  startcountdown(data);
}
// 准备动画；
function startcountdown (data) {
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
  // 有奖时动画
  if (!!update(data.lotteryNumber)[0]) {
    haveLotteryAnimateFormat(data);
  } else {
    // 无奖时动画
    notLotteryAnimateFormat(data);
  }
}
// 有奖号码时的动画；
function haveLotteryAnimateFormat (data) {
  let sum = 3;// 时间和
  countdowninv = setInterval(() => {
    sum -= 1;
    haveLotteryCountDown(sum, data);// 倒计时的显示和隐藏
    countdown(sum, 0);// 秒钟内容显示；
    sum == 0 && (clearInterval(countdowninv), clearInterval(countdowninv2));
    // setTimeout(pubmethod.doAjax(t.issue, t.lotCode, t.type, !1), "2000")
  }, 1e3);
  let e = 99;
  countdowninv2 = setInterval(() => {
    minisectimer(e);// 毫秒内容显示
    e == 0 && (e = 99);
    e -= 1;
  }, 10);
  haveLotteryCountDown(sum, data);// 倒计时的显示和隐藏
  countdown(sum, 0);// 秒钟内容显示；
}
// 无奖号码时的动画
function notLotteryAnimateFormat (data) {
  clearInterval(countdowninv);
  clearInterval(countdowninv2);
  let sum = data.marketCountDownTime + data.lockCountDownTime;;// 时间和
  countdowninv = setInterval(() => {
    data.marketCountDownTime -= 1;
    sum = data.marketCountDownTime + data.lockCountDownTime;
    countdowntimer(sum, data.lockCountDownTime);// 倒计时的显示和隐藏
    countdown(sum, data.marketCountDownTime);// 秒钟内容显示；
    data.marketCountDownTime + data.lockCountDownTime == 0 && (clearInterval(countdowninv), clearInterval(countdowninv2));
    // setTimeout(pubmethod.doAjax(t.issue, t.lotCode, t.type, !1), "2000")
  }, 1e3);
  let e = 99;
  countdowninv2 = setInterval(() => {
    minisectimer(e);// 毫秒内容显示
    e == 0 && (e = 99);
    e -= 1;
  }, 10);
  countdowntimer(sum, data.lockCountDownTime);// 倒计时的显示和隐藏
  countdown(sum, data.marketCountDownTime);// 秒钟内容显示；
}
// 毫秒内容显示；
function minisectimer (a) {
  const t = convertTime(a);
  $('.countdownnum2').html(t);
}
// 格式化时间；
function convertTime (e) {
  let a = String(e);
  return a.length == 1 ? a = `0${a}` : a;
}
// 秒钟内容显示；
function countdown (sum, marketCountDownTime) {
  let e = null;
  e = marketCountDownTime > 0 ? marketCountDownTime : sum;
  let a = e / 60;
  if ((a = Math.floor(a)) == 0) var t = '00';
  else t = convertTime(t = String(a));
  const n = convertTime(e - 60 * a);
  e <= 0 ? ($('.countdownnum').html('00:00'), $('.countdownnum2').html(00)) : $('.countdownnum').html(`${t}:${n}`);
}
// 无奖号倒计时的显示和隐藏
function countdowntimer (sum, lockCountDownTime) {
  const e = sum;
  e >= 0 ? $('.trafficlight').css('display', 'block') : $('.trafficlight').css('display', 'none');
  e <= lockCountDownTime ? $('#hint').css('display', 'block') : $('#hint').css('display', 'none');
  // sum == 0 && ($(".countdownnum").html("00:00"), $(".countdownnum2").html("00"), $(".greenlight").css("display", "block"), $(".trafficlight").delay(500).fadeOut(300))
  // console.log(a);
  // a >= 0 ? $(".trafficlight").css("display", "block") : $(".trafficlight").css("display", "none");
  // // a <= 2 && a > 0 && ($(".redlight").css("display", "block"), playing.pause(), playing = document.getElementById("cuttime"), isplay && playing.play()),
  // // a <= 1 && $(".yellowlight").css("display", "block"),
  // a = 0 && (startanimation(), $(".countdownnum").html("00:00"), $(".countdownnum2").html("00"), $(".greenlight").css("display", "block"), $(".trafficlight").delay(500).fadeOut(300))
}
// 有奖号时的倒计时的显示和隐藏
function haveLotteryCountDown (sum, data) {
  sum >= 0 ? $('.trafficlight').css('display', 'block') : $('.trafficlight').css('display', 'none');
  sum == 0 && (startanimation(data), $('.countdownnum').html('00:00'), $('.countdownnum2').html('00'), $('.greenlight').css('display', 'block'), $('.trafficlight').delay(500).fadeOut(300));
}
// 开始动画
function startanimation (data) {
  $('.wheel10a img').css('animation', 'twinkling 0.01s  ease-in-out  infinite');
  // playing.pause();
  // playing = document.getElementById("running");
  // isplay && playing.play(),
  addint = setInterval(() => {
    ShipUndulation();
  }, 200);
  wheelon();
  const a = document.getElementById('roadstart');
  TweenMax.to(a, 1, {
    left: '1334px',
    ease: Power1.easeIn,
  });
  const t = document.getElementById('roaditm');
  TweenMax.to(t, 0.4, {
    left: '-120px',
    repeat: -1,
    ease: Linear.easeNone,
  });
  const e = document.getElementById('scenaryitm');
  TweenMax.to(e, 20, {
    left: '0',
    repeat: -1,
    ease: Linear.easeNone,
  });
  $('wheel1a').css('display', 'block');
  $('wheel1b').css('display', 'block');
  animation1 = setInterval(() => {
    animate();
  }, 3e3);
  animation2 = setInterval(() => {
    checkposition();
  }, 300);
  animate();
  wheelon();
  // 动画开始动,飞艇跑动
  let tiemr = null;
  clearTimeout(tiemr);
  tiemr = setTimeout(() => {
    finishgame(data.lotteryNumber);
    clearTimeout(tiemr);
  }, data.animationDuration);
}

function windflameani () {
  $('.wind').animate({
    opacity: 0.7,
  },
    150,
    () => {
      $('.wind').css('opacity', '1');
    }),
    $('.flame').animate({
      opacity: 0.7,
    },
      150,
      () => {
        $('.flame').css('opacity', '1');
      });
}
// 停止动画
function stopanimation () {
  $('#roaditm').css('left', '-1300px'),
    $('#scenaryitm').css('left', '-1334px'),
    $('.flame').css('display', 'none'),
    TweenMax.killAll(),
    wheeloff_2(),
    $('.wheel10a img').css('animation', 'initial'),
    clearInterval(animation1),
    clearInterval(animation2),
    clearInterval(animation3),
    clearInterval(countdowninv),
    clearInterval(countdowninv2),
    clearInterval(addint),
    running.pause(),
    playing = empt;
}
// 生成随机数
function getRandomInt (a, t) {
  console.log(a);
  return Math.floor(Math.random() * (t - a + 1)) + a;
}
// 动画进行时；
function midgame (data) {
  if (TweenLite.killDelayedCallsTo(winnerpage), $('.page1').css('display', 'block'), $('.page2').css('display', 'none'), waitfinish == 1) return !1;
  stopanimation(),
    $('#roadstart').css('left', '1334px'),
    $('.trafficlight').css('display', 'none');
  for (let a = 1; a < 11; a++) {
    const t = getRandomInt(200, 1e3);
    $(`#car${a}`).css('left', `${t}px`);
  }
  startanimation();
}
// 即将完成比赛
function finishgame (a) {
  if (TweenLite.killDelayedCallsTo(winnerpage), $('.page1').css('display', 'block'), $('.page2').css('display', 'none'), waitfinish == 1) return !1;
  // if (TweenLite.killDelayedCallsTo(winnerpage), $(".page1").css("display", "block"), $(".page2").css("display", "none"), playing.pause(), playing = document.getElementById("running"), isplay && playing.play(), 1 == waitfinish) return !1;
  waitfinish = !0;
  TweenMax.killAll();
  wheelon();
  $('#roaditm').css('left', '-1300px');
  const e = document.getElementById('roaditm');
  TweenMax.to(e, 0.4, {
    left: '-120px',
    repeat: -1,
    ease: Linear.easeNone,
  });
  const n = document.getElementById('scenaryitm');
  TweenMax.to(n, 20, {
    left: '0',
    repeat: -1,
    ease: Linear.easeNone,
  });
  const o = document.getElementById('roadstart');
  TweenMax.to(o, 1, {
    left: '1334px',
    ease: Linear.easeNone,
    delay: 3,
  });
  const r = setInterval(() => {
    checkposition();
  }, 300);
  $('#roadstart').css('left', '-250px');
  $('.trafficlight').css('display', 'none');
  clearInterval(animation1);
  clearInterval(countdowninv);
  clearInterval(countdowninv2);
  for (let l = a.split(','), i = 0; i < 10; i++) {
    let s = Math.floor(10 * Math.random() + 1);
    s /= 10;
    const c = parseInt(l[i]) - 1;
    const d = 100 * i - carpositionoffset[c] + 350;
    const m = `${d}px`;
    const u = `car${l[i]}`;
    const p = document.getElementById(u);
    activateflame(d, l[i]);
    TweenMax.to(p, 3, {
      left: m,
      delay: s,
    });
  }
  $('.flashlight').delay(3200).fadeIn(100,
    () => {
      $('.flashlight').fadeOut(500),
        clearInterval(r),
        waitfinish = !1,
        resultpage(a);
    });
  // void 0 != t && setTimeout(function () {
  //   // startcountdown(t)
  // }, 1e4)
}
// 显示结果页面
function resultpage (a) {
  if ($('.page1').css('display', 'block'), $('.page2').css('display', 'none'), waitfinish == 1) return !1;
  // if ($(".page1").css("display", "block"), $(".page2").css("display", "none"), playing.pause(), playing = document.getElementById("kaisound"), isplay && playing.play(), 1 == waitfinish) return !1;
  stopanimation(),
    $('#roadstart').css('left', '130px'),
    $('.trafficlight').css('display', 'none');
  for (let t = a.split(','), e = 0; e < 10; e++) {
    const n = parseInt(t[e]) - 1;
    const o = `${100 * e - carpositionoffset[n] + 350}px`;
    const r = `car${t[e]}`;
    $(`#${r}`).css('left', o);
  }
  showcurrentresult(a),
    TweenLite.delayedCall(2, winnerpage, [a]);
}
// 显示动态中奖号码
function showcurrentresult (a) {
  if (a) {
    for (let t = a.split(','), e = 0; e < 10; e++) {
      const n = `#pos${e + 1}`;
      const o = -64 * (1 * t[e] - 1);
      $(n).css('background-position', `0px ${o}px`);
    }
  }
}
// 获胜飞艇
function winnerpage (a) {
  $('.resultitm').css('opacity', 0),
    $('.resultcar1').css('left', '483px'),
    $('.resultcar1').css('top', '288px'),
    $('.resultcar2').css('left', '170px'),
    $('.resultcar2').css('top', '251px'),
    $('.resultcar3').css('left', '946px'),
    $('.resultcar3').css('top', '254px');
  const t = a.split(',');
  $('.page1').css('display', 'none'),
    $('.page2').css('display', 'block');
  for (let e = 0; e < 3; e++) {
    const n = `.resultcarimg${e + 1}`;
    $(n).attr('src', `images/winner${t[e]}.png`);
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
  const l = document.getElementById('resultcar3');
  TweenMax.to(l, 1, {
    left: '859px',
    top: '291px',
    opacity: 1,
    delay: 1.2,
  });
  const i = document.getElementById('result1');
  TweenMax.to(i, 1, {
    opacity: 1,
    delay: 0.2,
  });
  const s = document.getElementById('result2');
  TweenMax.to(s, 1, {
    opacity: 1,
    delay: 0.7,
  });
  const c = document.getElementById('result3');
  TweenMax.to(c, 1, {
    opacity: 1,
    delay: 1.2,
  });
}

function hideAddressBar () {
  setTimeout(() => {
    window.scrollTo(0, 1);
  },
    0);
}

let animation1; let animation2; let waitfinish; let addint; const carHeight = [];
let isplay = !0;
const ifopen = !0;
var playing = '';
$(() => {
  document.getElementById('running');
  document.getElementById('kaisound');
  document.getElementById('cuttime');
  const a = document.getElementById('empt');
  playing = a;
}),
  createNum = function (a, t) {
    const e = t - a;
    const n = Math.random();
    return a + Math.round(n * e);
  },
  ShipUndulation = function () {
    for (let a = 0; a < 10; a++) $(`.car${a + 1}`).css('top', `${createNum(carHeight[a] - 4, carHeight[a] + 4)}px`);
  };
var carpositionoffset = [0, 9, 25, 40, 53, 67, 78, 101, 122, 139];
setCarHeight = function () {
  for (let a = 1; a < 11; a++) {
    const t = 1 * $(`.car${a}`).css('top').replace('px', '');
    carHeight.push(t);
  }
};
setCarHeight();
let countdowninv; let countdowninv2; var animation3;
animation3 = setInterval(() => {
  windflameani();
}, 150);
// const soundBtn = document.getElementById('soundBtn');
// soundBtn.onclick = function () {
//   this.className == 'on' ? (this.className = 'off', isplay = !1, playing.pause()) : (this.className = 'on', isplay = !0, playing.play());
// };
const fun = {};
fun.stateSound = function () {
  running.play(),
    kaisound.play(),
    running.pause(),
    kaisound.pause();
};
// fun.fillHtml = function (a, t) {
//   $('#currentdrawid').html(a.currNum);
//   $('#nextdrawid').html(a.currid);
//   $('#stat1_1').html(a.GuaYaArr[0]);
//   $('#stat1_2').html(a.GuaYaArr[1]);
//   $('#stat1_3').html(a.GuaYaArr[2]);
//   $('#stat2_1').html(a.LoHuArr[0]);
//   $('#stat2_2').html(a.LoHuArr[1]);
//   $('#stat2_3').html(a.LoHuArr[2]);
//   $('#stat2_4').html(a.LoHuArr[3]);
//   $('#stat2_5').html(a.LoHuArr[4]);
//   showcurrentresult(a.result);
//   // void 0 != t && startcountdown(t);
// };
// const obj = {
//   currNum: 36,
//   currid: 12345678,
//   GuaYaArr: ['和', '冠', '亚'],
//   LoHuArr: ['虎', '虎', '龙', '虎', '龙'],
//   result: '8,2,6,9,3,4,1,10,5,7',
// };
window.addEventListener('load',
  () => {
    hideAddressBar();
  }),
  window.addEventListener('orientationchange', hideAddressBar);

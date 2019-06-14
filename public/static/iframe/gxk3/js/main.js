$(() => {
  $('.animate').find('.loading').fadeOut(1e3, () => { });
  // 点击开始模拟开奖;
  // $('.kuai3Animate').on('click', '.kaimodule-box', () => { k3v.tryPlay(); });
  // 点击开关音乐;
  // $("#soundBtn").on("click", "#spanbtn", () => {
  //   document.getElementById("audio");
  //   "sounds" == $("#spanbtn").attr("class") ? ($("#soundBtn").children().removeClass("sounds").addClass("sounds2"), k3v.sound.stop("")) : ($("#soundBtn").children().removeClass("sounds2").addClass("sounds"), k3v.sound.play("all"))
  // });
});

const k3v = {};
let tryflag = !0;
let timer = null;
let ifpaused = '';
const animateId = {};
// 开始筛子动画
k3v.startGame = function (t, data) {
  let preDrawCode = null;
  if (data) {
    preDrawCode = data.preDrawCode;
  } else {
    preDrawCode = [];
  }
  let timerTimeout = null;
  clearTimeout(timerTimeout);
  const e = this;
  e.codePlay = function () {
    const t = $('#code').find('li');// 骰子元素的集合
    e.run(2, '80', '0', t);
    e.run(5, '80', '1', t);
    e.run(8, '80', '2', t);
  };
  e.run = function (t, e, n, a) {
    const i = setInterval(() => {
      $(a).eq(n).attr('class', `k3v0${t}`);
      ++t >= 8 && (t = 1);
    }, e);
    animateId[n] = i;
    // 有奖才停，无奖一直动；
    if (preDrawCode.length) {
      timerTimeout = setTimeout(() => {
        $('#opening').hide();
        k3v.stopGame(preDrawCode);
        $('#timetitle').text('恭喜发财').css('color', 'yellow');
        clearTimeout(timerTimeout);
      }, data.animationDuration);// 骰子动画时间
    }
  };
  t && e.codePlay();
  $('.linelist').find('li').addClass('redli');// 进度条变化
  ifpaused = 'audioidB';
  // $('#spanbtn').hasClass('sounds') && k3v.sound.play('audioidR');// 背景音乐
  k3v.bressBG(10);
};
/**
 * 结束筛子动画
 * t:中奖号码
*/
k3v.stopGame = function (t) {
  this.stop = function (t, e) {
    setTimeout(() => {
      clearInterval(animateId[t]);
      const n = $('#code').find('li');
      $(n).eq(t).attr('class', `k3v${e}`);
    }, 800 * t);
  };
  for (let e = 0; e < 3; e++) this.stop(e, t[e]);
};

/**
 * 点击模拟开奖模式
 */
const trytime = [];
k3v.tryPlay = function () {
  const t = [];
  if (tryflag) {
    $('#timetitle').text('模拟开奖');
    $('#hourtxt').hide();
    $('#opening').show();
    tryflag = !1;
    k3v.startGame(!0);
    var e = setTimeout(() => {
      for (let n = 0; n < 3; n++) t.push(Math.round(5 * Math.random() + 1));
      k3v.stopGame(t);
      const a = setTimeout(() => {
        for (var t = $('#codetop').find('li'), e = [], n = 0, a = t.length; n < a; n++) e.push($(t).eq(n).text());
        k3v.stopGame(e);
        setTimeout(() => {
          tryflag = !0;
        }, 3e3);
      }, 8e3);
      i = setTimeout(() => {
        $('#timetitle').text('倒计时');
        $('#hourtxt').show();
        $('#opening').hide();
        const t = $('#hourtxt').text().split(':');
        let e = t[0];
        let n = t[1];
        let a = t[2];
        const i = 3600 * (e = e < 10 ? e.substring(e.length - 1, e.length) : e) + 60 * (n = n < 10 ? n.substring(n.length - 1, n.length) : n) + 1 * (a = a < 10 ? a.substring(a.length - 1, a.length) : a);
        // k3v.cutTime(i);
        ifpaused = 'audioidB';
        // $('#spanbtn').hasClass('sounds') && k3v.sound.play('audioidB');
        k3v.bressBG();
      }, 2e3);
      trytime.push(e);
      trytime.push(a);
      trytime.push(i);
    }, 5e3);
  } else {
    // $('.noinfor').fadeIn(200, '', () => {
    //   setTimeout(() => {
    //     // $('.noinfor').fadeOut('300');
    //   }, 1e3);
    // });
  }
};

// k3v.playGame = function (preDrawCode) {
//   k3v.startGame(!0, preDrawCode)
// };

function maintainIssue(str) {
  if (!str) {
    return '';
  }
  return str.slice(-3);
}
// 得到数据更改页面数据
k3v.updateData = function (t) {
  const e = t.preDrawCode;
  $('#num1').text(e[0]);// 第一个中奖号
  $('#num2').text(e[1]);// 第二个中奖号
  $('#num3').text(e[2]);// 第三个中奖号
  $('#sumNum').text(t.sumNum);// 中奖结果的总和
  $('#sumBigSmall').text(k3v.sumBigSmall(t.sumNum));// 中奖结果，大，小，通吃
  $('#drawIssue').text(t.drawIssue);// 显示下次开奖奖期
  const n = maintainIssue(t.preDrawIssue);// 获取到本期后三位数；
  $('.nowDraw').text(n);// 显示本期奖期
  let a = '';
  if (void 0 != t.drawTime) {
    a = t.drawTime.substr(t.drawTime.length - 8, 8);
  } else { a = ''; }
  $('#drawTime').text(a);// 下期开奖时间
};

/**
 * 根据时间显示倒计时还是正在开奖
 * data:数据模型
*/
k3v.cutTime = function (data) {
  // $('.kaimodule').css('display', 'block');
  // $('.noinfor').css('display', 'none');
  if (data.preDrawCode.length) {
    haveBetTime(data);
  } else {
    noBetTime(data.marketCountDownTime, data.lockCountDownTime);
  }
};
// 有奖号的时间变化
function haveBetTime(data) {
  let num = 3;
  timer != null && clearInterval(timer);
  timer = setInterval(() => {
    num -= 1;
    if (num > 0) {
      changeTime(num);
    } else if (num <= 0) {
      // $(".kaimodule").css('display', 'none')
      // $(".noinfor").css('display', 'block').text("即将开奖，禁止模拟");
      clearInterval(timer);
      $('#timetitle').text('正在开奖');
      $('#opening').show();
      $('#hourtxt').text('00:00:00');
      k3v.startGame(true, data);
      // 再次请求数据
      // setTimeout(pubmethod.doAjax(e.issue, e.lotCode, e.type, !1), "500")
    }
  }, 1e3);
}
// 时间变化；
function changeTime(time) {
  const n = Math.floor(time / 3600);
  const a = Math.floor(time / 60 % 60);
  const i = Math.floor(time % 60);
  let s = '';
  if (s = `${n < 10 ? `0${n}` : n}:`, s = `${s}${a < 10 ? `0${a}` : a}:${i < 10 ? `0${i}` : i}`, $('#hourtxt').text(s)) {
    const o = $('.linelist').find('li');
    $(o).eq(10).addClass('redli');
  }
}
/**
 * 没有奖号的时间变化
 */
function noBetTime(marketCountDownTime, lockCountDownTime) {
  let num = null;
  timer != null && clearInterval(timer);
  timer = setInterval(() => {
    num = marketCountDownTime + lockCountDownTime;
    marketCountDownTime -= 1;
    if (marketCountDownTime >= 0) {
      changeTime(marketCountDownTime);
      // console.log(num);
      // t < 8 && (tryflag = !1, $(".kaimodule").css('display', 'none'), $(".noinfor").css('display', 'block').text("即将开奖，禁止模拟"))
    }
    if (num <= lockCountDownTime) {
      changeTime(num);
      $('#timetitle').text('封盘中...').css('color', 'yellow');
    }
    if (num <= 0) {
      // console.log(num);
      // $(".kaimodule").css('display', 'none')
      // $(".noinfor").css('display', 'block').text("即将开奖，禁止模拟");
      clearInterval(timer);
      $('#timetitle').text('封盘中...').css('color', 'yellow');
      $('#opening').show();
      $('#hourtxt').text('00:00:00');
      k3v.startGame(true);
      // 再次请求数据
      // setTimeout(pubmethod.doAjax(e.issue, e.lotCode, e.type, !1), "500")
    }
  }, 1e3);
}
// 背景音乐
k3v.sound = {
  // play(t) {
  //   // "sounds" == $("#spanbtn").attr("class") && ("all" == t ? document.getElementById(ifpaused).play() : (document.getElementById("audioidB").pause(), document.getElementById("audioidR").pause(), document.getElementById(t).play()))
  // },
  // stop(t) {
  //   let e = document.getElementById('audioidB');
  //   ifpaused = e.paused ? 'audioidR' : 'audioidB',
  //   document.getElementById('audioidB').pause(),
  //   document.getElementById('audioidR').pause();
  // },
};
/**
 * t：传入的数据模型
*/
k3v.dataEntrance = function (t) {
  k3v.stopGame(t.preDrawCode);// 传入中奖号码
  k3v.updateData(t);
  setTimeout(() => {
    $('#timetitle').text('倒计时');
    $('#hourtxt').fadeIn();
    $('#opening').hide();
    $('.linelist').find('li').removeClass('redli');
    k3v.cutTime(t);
    // k3v.cutTime(t.seconds, e);
    ifpaused = 'audioidB';
    // $("#spanbtn").hasClass("sounds") && k3v.sound.play("audioidB");
    k3v.bressBG();
    tryflag = !0;
  }, 2e3);
};
// 跟背景相关
k3v.bressBG = function (t) {
  let e = 1; let
    n = !1;
  void 0 != animateId.bressBG && clearInterval(animateId.bressBG),
  void 0 == t && (t = 80);
  const a = setInterval(() => {
    $('.bodybg').find('img').stop().animate({
      opacity: `0.${e}`,
    }, t);
    n ? (e -= 1) < 1 && (n = !1) : (e += 1) > 8 && (n = !0);
  }, t);
  animateId.bressBG = a;
};
// 判断大小
k3v.sumBigSmall = function (sum) {
  if (!sum) {
    return '';
  }
  if (sum >= 11 && sum <= 17) {
    return '大';
  }
  if (sum <= 10 && sum >= 4) {
    return '小';
  }
  return '';
};

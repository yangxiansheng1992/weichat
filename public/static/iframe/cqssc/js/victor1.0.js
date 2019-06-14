
function sscAnimateEnd(o) {
  animate.sscAnimateEnd(o.preDrawCode, '#numBig', o.counttime, o.lockCountDownTime, !1);
  // animate.sscAnimate("#numBig");
  videoTools.inseartData(o);
  datestr = o.counttime;
  preDrawCode = o.preDrawCode;
}

function stopSound(o) {
  videoTools.sounds.soundsT.stop(o);
}

$(() => {
  videoTools.createNum(),
  setTimeout(() => {
    setTimeout(() => {
      $('.loading').fadeOut(600);
    }, 100);
  }, 200),
  $('.menubox').on('click', '.tyrbtn',
    () => {
      // $(this).attr("id") || ($(this).attr("id", "true"), animate.sscAnimate("#numBig"), videoTools.testOpen())
    }),
  $('.menubox').on('click', '.soundbtn',
    function () {
      if ($(this).hasClass('closesoundbtn')) {
        $(this).removeClass('closesoundbtn');
        $('audio');
        // $(".oping ").is(":hidden") ? videoTools.ifsund() && ($("#bgsound").attr("src", "sound/bg.mp3"), videoTools.sounds.soundsT.play("bgsound")) : videoTools.ifsund() && ($("#bgsound").attr("src", "sound/opening.mp3"), videoTools.sounds.soundsT.play("bgsound"))
      } else {
        $(this).addClass('closesoundbtn'),
        $('#bgsound').attr('src', '');
      }
    }),
  $('.djs').show();
  $('.codeboxl .perspectiveView');
});

var animate = {};
var datestr = '';
let timerInterval = '';
var preDrawCode = '';
const animateID = [];
var videoTools = {};
// 正在开奖。。。
animate.sscAnimate = function (o) {
  clearInterval(animateID[o]);
  // videoTools.ifsund() && ($("#bgsound").attr("src", "sound/opening.mp3"), videoTools.sounds.soundsT.play("bgsound"));
  const e = setInterval(() => {
    for (let e = $(o).find('.box'), n = $(e).find('span').length, s = 0; s < n; s++) {
      $(e).find('span').eq(s).removeClass()
        .addClass(`num${$(e).find('span').eq(s).text()}`),
      $(e).find('span').eq(s).css({
        backgroundPositionY: '0',
        backgroundPositionX: '0',
        backgroundSize: '100%',
      });
      const t = videoTools.excutenum();
      $(e).find('span').eq(s).stop()
        .animate({
          backgroundPositionY: '-30',
          backgroundPositionX: '67px',
          backgroundSize: '50%',
        },
        50 * t == '0' ? '100' : 50 * t),
      $(e).find('span').eq(s).text(videoTools.excutenum());
    }
  }, 100); const
    n = $('.codeboxl .perspectiveView');
  $(n).each((o) => {
    videoTools.xz3D(n[o], !1);
  });

  // $(".oping").show();//正在开奖
  // $(".djs").hide();//倒计时关闭
  switchover();
  animateID[o] = e;
};
// 开奖和倒计时的动画切换
function switchover() {
  $('.oping').show();// 正在开奖
  $('.djs').hide();// 倒计时关闭
  let timer = null;
  clearTimeout(timer);
  timer = setTimeout(() => {
    $('.oping').hide();// 倒计时关闭
    $('.djs').show();// 正在开奖
    clearTimeout(timer);
  }, 5000);
}
// 时时彩动画结束,大图中奖号码显示
animate.sscAnimateEnd = function (o, e, marketCountDownTime, lockCountDownTime, s) {
  // console.log(e);
  // videoTools.ifsund() && ($("#bgsound").attr("src", "sound/over.mp3"), videoTools.sounds.soundsT.play("bgsound")),
  // if (o.preDrawCode.length == 0) {
  //   let arr = returnCharacter(o.preDrawCode);
  //   $("#litNum").find(".box").each(function (e) {
  //     $(this).find("span").text(arr[e]);
  //   })
  // }
  // $("#litNum").find(".box").each(function (e) {
  //   $(this).find("span").removeClass().addClass("num" + o.preDrawCode[e]);
  // })
  clearInterval(animateID[e]);
  $('.oping').hide();// 开奖隐藏
  $('.djs').show();// 倒计时显示
  const a = [];
  if (o.length == 0) {
    const arr = returnCharacter(o);
    $(e).find('.box').each(function (e) {
      $(this).find('span').text(arr[e]);
      a.push($(this).find('span'));
    });
  } else {
    // 将中奖号码显示出来
    $(e).find('.box').each(function (e) {
      $(this).find('span').text('');
      $(this).find('span').removeClass().addClass(`num${o[e]}`);
      a.push($(this).find('span'));
    });
  }
  videoTools.showNUM(a, o);
  s || videoTools.cutTime(marketCountDownTime, lockCountDownTime);
};
// 动态随机数
videoTools.excutenum = function () {
  return Math.floor(10 * Math.random());
};
// 转换3d；
videoTools.xz3D = function (o, e) {
  var o = $(o);
  e ? ($(o).children('.flip').eq(0).addClass('out')
    .removeClass('in'), setTimeout(() => {
    $(o).find('.flip').show().eq(1)
      .addClass('in')
      .removeClass('out'),
    $(o).children('.flip').eq(0).hide();
  }, 225)) : ($(o).children('.flip').eq(1).addClass('out')
    .removeClass('in'), setTimeout(() => {
    $(o).find('.flip').show().eq(0)
      .addClass('in')
      .removeClass('out'),
    $(o).children('.flip').eq(1).hide();
  }, 225));
};
// 显示数字动画 o:span元素;e:中奖号码
videoTools.showNUM = function (o, e) {
  for (var n = $('.tl .perspectiveView'), s = $('.bl .perspectiveView'), t = function (o) {
      $(o).css({
        backgroundPositionY: '28px',
        backgroundPositionX: '26px',
        backgroundSize: '10%',
      }),
      $(o).stop().animate({
        backgroundPositionY: '-18px',
        backgroundPositionX: '-16px',
        backgroundSize: '150%',
      }, 200, () => {
        $(o).stop().animate({
          backgroundPositionY: '0',
          backgroundPositionX: '0',
          backgroundSize: '100%',
        }, 200);
      });
    },
    i = 0, a = 0; i < 5; i++) {
    if (a += 150, i >= 4) var d = 0;
    setTimeout(() => {
      t(o[d]),
      videoTools.xz3D(n[d], !0),
      videoTools.xz3D(s[d], !0),
      d++;
    },
    a);
  }
  // setTimeout(function () {
  //   // videoTools.ifsund() && ($("#bgsound").attr("src", "sound/bg.mp3"), setTimeout(videoTools.sounds.soundsT.play("bgsound"), 1e3))
  // },2800),
  $('.tl').find('.box').each(function (o) {
    let n = '';
    let s = $(this).find('span').eq(1).attr('class');
    e[o] >= 5 ? (n = 'bigbg', s.indexOf(n) != -1 || (s = s.replace('smallbg', n))) : (n = 'smallbg', s.indexOf(n) != -1 || (s = s.replace('bigbg', n))),
    $(this).find('span').eq(1).removeAttr('class')
      .attr('class', s);
  });
  $('.bl').find('.box').each(function (o) {
    let n = '';
    let s = $(this).find('span').eq(1).attr('class');
    e[o] % 2 == 0 ? (n = 'doublebg', s.indexOf(n) != -1 || (s = s.replace('singlebg', n))) : (n = 'singlebg', s.indexOf(n) != -1 || (s = s.replace('doublebg', n))),
    $(this).find('span').eq(1).removeAttr('class')
      .attr('class', s);
  });
};
// 音乐按钮开关
videoTools.sounds = {
  soundsT: {
    play(o) {
      // videoTools.ifsund() && ("sound/over.mp3" == $("#" + o).attr("src") ? $("#" + o).removeAttr("loop", "loop") : $("#" + o).attr("loop", "loop"), document.getElementById(o).play())
    },
    stop(o) {
      document.getElementById(o).pause();
    },
  },
};
// 倒计时
videoTools.cutTime = function (marketCountDownTime, lockCountDownTime) {
  let n = marketCountDownTime;
  clearInterval(animateID.timer);
  timerInterval = window.setInterval(() => {
    if (n >= 1) {
      n -= 1;
      updatContentTime(n);
    } else {
      // setTimeout(pubmethod.doAjax(e.issue, e.lotCode, e.type, !1), "1000");
      // sscAnimateEnd(details, t);
      // animate.sscAnimate("#numBig");
      $('.lock').css('display', 'block');
      // 开始跑封盘倒计时
      lockCountDownTimeContentUpdata(lockCountDownTime);
      // 新增跑完刷新页面
      // contentOnload();
    }
  }, 1e3),
  animateID.timer = timerInterval;
};
// 封盘倒计时
function lockCountDownTimeContentUpdata(lockCountDownTime) {
  clearInterval(timerInterval);
  let lockTimer = null;
  clearInterval(lockTimer);
  lockTimer = setInterval(() => {
    lockCountDownTime -= 1;
    updatContentTime(lockCountDownTime);
    if (lockCountDownTime <= 0) {
      // animate.sscAnimate("#numBig");
      clearInterval(lockTimer);
    }
  }, 1e3);
}
// 内容刷新
function contentOnload() {
  let timer = null;
  clearTimeout(timer);
  timer = setTimeout(() => {
    window.location.reload();
    clearTimeout(timer);
  }, 5000);
}
// 倒计时内容更新
function updatContentTime(n) {
  const o = Math.floor(n / 3600);
  const s = Math.floor(n / 60 % 60);
  const t = Math.floor(n % 60);
  let i = '';
  i = `${i = o <= 0 ? '' : `${o < 10 ? `0${o}` : o}:`}${s < 10 ? `0${s}` : s}:${t < 10 ? `0${t}` : t}`,
  $('.bluefont').text(i);
}
// 返回内容
function returnCharacter(arr) {
  if (arr.length == 0) {
    return ['等', '待', '开', '奖', '中'];
  }
  return arr;
}
// 渲染小图中奖内容 o:传入的所有数据
videoTools.inseartData = function (o) {
  $('#preDrawIssue').text(o.preDrawIssue);
  $('#drawTime').text(o.drawTime);
  $('#sumNum').text(o.sumNum);// 和
  $('#sumSingleDouble').text(o.sumSingleDouble);// 单双
  $('#sumBigSmall').text(o.sumBigSmall);// 大小
  $('#dragonTiger').text(o.dragonTiger);// 龙虎
  // 渲染开奖的小数据
  if (o.preDrawCode.length == 0) {
    const arr = returnCharacter(o.preDrawCode);
    $('#litNum').find('.box').each(function (e) {
      $(this).find('span').text(arr[e]);
    });
  }
  $('#litNum').find('.box').each(function (e) {
    $(this).find('span').removeClass().addClass(`num${o.preDrawCode[e]}`);
  });
};
// 随机数
videoTools.createNum = function () {
  for (var o = [], e = 0; e < 5; e++) o.push((`${9 * Math.random()}`).split('.')[0]);
  return o;
};
// 试试手气按钮事件
videoTools.testOpen = function () {
  let o = 0;
  var e = setInterval(() => {
    ++o >= 8 && (clearInterval(e), animate.sscAnimateEnd(videoTools.createNum(), '#numBig', datestr, !0), setTimeout(() => {
      setTimeout(() => {
        animate.sscAnimateEnd(preDrawCode, '#numBig', datestr, !0);
        // $(".menubox .tyrbtn").removeAttr("id")
      }, 100);
    }, 5e3));
  }, 1e3);
};
// 清除定时器
videoTools.clearInterval = function () {
  clearInterval(timerInterval);
};
// 声音按钮的开关监听
videoTools.ifsund = function () {
  return !$('#soundbtn').hasClass('closesoundbtn');
};

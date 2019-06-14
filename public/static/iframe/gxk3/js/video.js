// var pubmethod = {}, path = window.location.href, lotCode, lotType;
// $(function () {
//   pubmethod.init()
// }), pubmethod.init = function () {
//   // var ss = path.split("?");
//   // if (-1 != path.indexOf("video_index") || void 0 != ss[1] && "" != ss[1]) {
//   //   lotCode = ss[1];
//   //   if (ss.length > 2)
//   //     lotType = ss[2];
//   //   } else alert("外链代码有误，请重新获取代码！")
//   pubmethod.doAjax("k3", lotCode, lotType, !0)
// }, pubmethod.tools = {
//   action: {
//     pk10: "Api/Index/getLotteryPksInfo",
//     jsft: "Api/Index/getLotteryPksInfo",
//     cqnc: "Api/Index/getLotteryInfo",
//     ssc: "Api/Index/getBaseCQShiCai",
//     klsf: "Api/Index/getLotteryInfo",
//     "11x5": "Api/Index/getElevenFiveInfo",
//     bjkl8: "Api/Index/getBaseLuckTewnty",
//     xy28: "Api/Index/getPcLucky28",
//     k3: "Api/Index/getBaseJSFastThree"
//   },
//   pageView: function (e) {
//     return {
//       cqnc: "video/cqnc/index.html",
//       egxy: "video/xy28/index.html",
//       gxklsf: "video/gxklsf_video/index.html",
//       fcsd: "video/fc3DVideo/index.html",
//       bjkl8: "video/bjkl8Video/index.html",
//       twbg: "video/twbgVideo/twbg_index.html",
//       klsf: "video/gdklsf/index.html",
//       pk10: "video/PK10/index.html",
//       qgc: "video/PK10/index.html",
//       ssc: "video/ssc/index.html",
//       kuai3: "video/k3/index.html",
//       shiyi5: "video/11x5/index.html",
//       jsft: "video/jisuft/index.html",
//       xgc: "video/SixColor_animate/index.html"
//     }[e]
//   },
//   random: function () {
//     return (new Date).getTime()
//   },
//   ifObj: function (e) {
//     var t = null;
//     return "object" != typeof e ? t = JSON.parse(e) : (t = JSON.stringify(e), t = JSON.parse(t)), t
//   },
//   cutTime: function (e, t) {
//     var r = e.replace("-", "/"), t = t.replace("-", "/");
//     return r = r.replace("-", "/"), t = t.replace("-", "/"), (new Date(r) - new Date(t)) / 1e3
//   }
// }, pubmethod.repeatAjax = function (e, t) {
//   setTimeout(function () {
//     e(t)
//   }, config.startTime)
// }, pubmethod.doAjax = function (e, t, r, o) {
//   var s = {
//     url: pubmethod.tools.action[r],
//     issue: e,
//     lotCode: t,
//     flag: o,
//     type: r,
//     succM: function (e, t) {
//       pubmethod.creatHeadD['k3'](e, t)
//     }
//   };
//   pubmethod.ajaxM(s)
// }, pubmethod.ajaxM = function (e) {
//   $.ajax({
//     // url: config.publicUrl + "" + e.url,
//     url: 'http://jihua.azbbet.com/video/k3/index.html?gxk3',
//     type: "GET",
//     async: !0,
//     data: { issue: void 0 == e.issue ? "" : e.issue, lotCode: e.lotCode, datestr: "" },
//     timeout: "6000",
//     success: function (t) {
//       try {
//         e.succM(t, e)
//       } catch (t) {
//         pubmethod.repeatAjax(pubmethod.ajaxM, e)
//       }
//     },
//     error: function (t) {
//       pubmethod.repeatAjax(pubmethod.ajaxM, e)
//     }
//   })
// }, pubmethod.creatHeadD = {
//   pk10: function (e, t) {
//     var r = pubmethod.tools.ifObj(e);
//     if ("100002" == r.result.businessCode) throw new Error("error");
//     if (0 == r.errorCode && 0 == r.result.businessCode) {
//       r = r.result.data;
//       for (var o = pubmethod.tools.cutTime(r.drawTime, r.serverTime), s = r.preDrawCode.split(","), i = "", u = 0, n = s.length; u < n; u++) "0" == s[u].substr(0, 1) ? i += s[u].substr(1, 1) + "," : i += s[u] + ",";
//       if (o = o < 0 ? 1 : o, showcurrentresult(i), $("#currentdrawid").text(r.drawCount), $("#nextdrawid").text(r.preDrawIssue), $("#stat1_1").text(r.sumFS), $("#stat1_2").text("0" == r.sumBigSamll ? "大" : "小"), $("#stat1_3").text("0" == r.sumSingleDouble ? "单" : "双"), $("#stat2_1").text("0" == r.firstDT ? "龙" : "虎"), $("#stat2_2").text("0" == r.secondDT ? "龙" : "虎"), $("#stat2_3").text("0" == r.thirdDT ? "龙" : "虎"), $("#stat2_4").text("0" == r.fourthDT ? "龙" : "虎"), $("#stat2_5").text("0" == r.fifthDT ? "龙" : "虎"), t.flag) $("#hlogo").find("img").attr("src", "images/logo/logo-" + t.lotCode + ".png"), $(".statuslogo").css({ background: "url(images/logo/logo-" + t.lotCode + ".png)no-repeat" }), startcountdown(o, t); else {
//         if (!t.flag && o <= 1) throw new Error("error");
//         setTimeout(function () {
//           finishgame(i)
//         }, "1000"), setTimeout(function () {
//           startcountdown(o - 11, t)
//         }, "10000")
//       }
//     }
//   }, xy28: function (e, t) {
//     var r = pubmethod.tools.ifObj(e);
//     if ("100002" == r.result.businessCode) throw new Error("error");
//     if (0 == r.errorCode && 0 == r.result.businessCode) {
//       r = r.result.data, console.log(r);
//       for (var o = pubmethod.tools.cutTime(r.drawTime, r.serverTime), s = r.preDrawCode.split(","), i = [], u = 0, n = s.length; u < n; u++) "0" == s[u].substr(0, 1) ? i.push(s[u].substr(1, 1)) : i.push(s[u]);
//       o = o < 0 ? 1 : o;
//       var a = {
//         nextIssue: r.drawIssue,
//         drawTime: r.drawTime,
//         serverTime: r.serverTime,
//         numArr: i,
//         preDrawTime: r.preDrawTime
//       };
//       if (t.flag) pcEgg.startVid(a, t); else {
//         if (!t.flag && o <= 1) throw new Error("error");
//         setTimeout(function () {
//           pcEgg.stopVid(a, t)
//         }, "1000")
//       }
//     }
//   }, cqnc: function (e, t) {
//     var r = pubmethod.tools.ifObj(e);
//     if ("100002" == r.result.businessCode) throw new Error("error");
//     if (0 == r.errorCode && 0 == r.result.businessCode) {
//       r = r.result.data;
//       for (var o = pubmethod.tools.cutTime(r.drawTime, r.serverTime), s = r.preDrawCode.split(","), i = [], u = 0, n = s.length; u < n; u++) "0" == s[u].substr(0, 1) ? i.push(s[u].substr(1, 1)) : i.push(s[u]);
//       if (o = o < 0 ? 1 : o, t.flag) cqncVideo.statusFun(r.preDrawIssue, i, o, !0, t); else {
//         if (!t.flag && o <= 1) throw new Error("error");
//         setTimeout(function () {
//           stopanimate(i, o, t)
//         }, "1000")
//       }
//     }
//   }, ssc: function (e, t) {
//     if ("100002" == (a = pubmethod.tools.ifObj(e)).result.businessCode) throw new Error("error");
//     if (0 == a.errorCode && 0 == a.result.businessCode) {
//       a = a.result.data;
//       for (var r = pubmethod.tools.cutTime(a.drawTime, a.serverTime), o = a.preDrawCode.split(","), s = [], i = 0, u = o.length; i < u; i++) "0" == o[i].substr(0, 1) && o[i].length > 1 ? s.push(o[i].substr(1, 1)) : s.push(o[i]);
//       r = r < 0 ? 1 : r;
//       var n = "";
//       "0" == a.dragonTiger ? n = "龙" : "1" == a.dragonTiger ? n = "虎" : "2" == a.dragonTiger && (n = "和");
//       var a = {
//         preDrawCode: s,
//         id: "#numBig",
//         counttime: r,
//         preDrawIssue: a.preDrawIssue,
//         drawTime: a.drawTime.substr(a.drawTime.length - 8, 8),
//         sumNum: a.sumNum,
//         sumSingleDouble: 0 == a.sumSingleDouble ? "单" : "双",
//         sumBigSmall: 0 == a.sumBigSmall ? "大" : "小",
//         dragonTiger: n
//       };
//       if (t.flag) sscAnimateEnd(a, t), $("#hlogo").find("img").attr("src", "img/cqssc/logo-" + t.lotCode + ".png"); else {
//         if (!t.flag && r <= 1) throw new Error("error");
//         setTimeout(function () {
//           sscAnimateEnd(a, t)
//         }, "1000")
//       }
//     }
//   }, "11x5": function (e, t) {
//     var r = pubmethod.tools.ifObj(e);
//     if (console.log(r), "100002" == r.result.businessCode) throw new Error("error");
//     if (0 == r.errorCode && 0 == r.result.businessCode) {
//       r = r.result.data;
//       for (var o = pubmethod.tools.cutTime(r.drawTime, r.serverTime), s = r.preDrawCode.split(","), i = [], u = 0, n = s.length; u < n; u++) "0" == s[u].substr(0, 1) ? i.push(1 * s[u].substr(1, 1)) : i.push(1 * s[u]);
//       if (o = o < 0 ? 1 : o, console.log(i), t.flag) $(".nameLogo").find("img").attr("src", "img/logo/11x5_" + t.lotCode + ".png"), k3v.startVideo(r, t), console.log($(".nameLogo"), t); else {
//         if (!t.flag && o <= 1) throw new Error("error");
//         console.log(r), setTimeout(function () {
//           k3v.stopVideo(r, t)
//         }, "1000")
//       }
//     }
//   }, klsf: function (e, t) {
//     var r = pubmethod.tools.ifObj(e);
//     if ("100002" == r.result.businessCode) throw new Error("error");
//     if (0 == r.errorCode && 0 == r.result.businessCode) {
//       r = r.result.data;
//       for (var o = pubmethod.tools.cutTime(r.drawTime, r.serverTime), s = r.preDrawCode.split(","), i = [], u = 0, n = s.length; u < n; u++) "0" == s[u].substr(0, 1) ? i.push(1 * s[u].substr(1, 1)) : i.push(1 * s[u]);
//       o = o < 0 ? 1 : o;
//       var a = r.preDrawIssue, l = r.drawIssue, d = r.drawTime.split(" ")[1].slice(0, 5);
//       if (t.flag) $(".video_box").css("background", "url(img/logo/" + t.lotCode + ".jpg) 0 0 no-repeat"), fun.fillHtml(a, l, d, o, i, t); else {
//         if (!t.flag && o <= 1) throw new Error("error");
//         setTimeout(function () {
//           fun.Trueresult(i), fun.fillHtml(a, l, d, o, void 0, t)
//         }, "1000")
//       }
//     }
//   }, k3: function (e, t) {
//     // var r = pubmethod.tools.ifObj(e);
//     let r = {
//       drawCount: "0",
//       drawIssue: 190523011,
//       drawTime: "2019-05-23 12:50:00",
//       firstNum: 1,
//       firstSeafood: 1,
//       frequency: "",
//       groupCode: 1,
//       index: 100,
//       lotCode: "gxk3",
//       lotName: "广西快3",
//       preDrawCode: "1,2,4",
//       preDrawDate: "20190523",
//       preDrawIssue: "190523010",
//       preDrawTime: "2019-05-23 12:30:56",
//       secondNum: 4,
//       secondSeafood: 4,
//       serverTime: "2019-05-23 12:33:42",
//       shelves: 0,
//       sumBigSmall: 0,
//       sumNum: 11,
//       sumSingleDouble: 0,
//       thirdNum: 6,
//       thirdSeafood: 6,
//       totalCount: "0",
//     }

//     if ("100002" == r.result.businessCode) throw new Error("error");
//     if (0 == r.errorCode && 0 == r.result.businessCode) {
//       //o:开奖倒计时，单位秒
//       for (var o = 484, s = [1, 2, 4], i = [], u = 0, n = s.length; u < n; u++) {
//         "0" == s[u].substr(0, 1) ? i.push(1 * s[u].substr(1, 1)) : i.push(1 * s[u]);
//         o = o < 0 ? 1 : o;
//       }
//       var a = {
//         seconds: 484,
//         preDrawCode: [1, 2, 4],
//         sumNum: 11,
//         drawTime: '"2019-05-23 12:50:00"',
//         drawIssue: '190523011',
//         preDrawIssue: '190523010'
//       };
//       k3v.stopVideo(a, t)
//       // if (t.flag) $(".nameLogo").find("img").attr("src", "img/logo/" + t.lotCode + ".png"), k3v.stopVideo(a, t); else {
//       //   if (!t.flag && o <= 1) throw new Error("error");
//       //   setTimeout(function () {
//       //     k3v.stopVideo(a, t)
//       //   }, "1000")
//       // }

//     }
//   }, pl3: function (e, t) {
//     var r = pubmethod.tools.ifObj(e);
//     if ("100002" == r.result.businessCode) throw new Error("error");
//     if (0 == r.errorCode && 0 == r.result.businessCode) {
//       r = r.result.data;
//       for (var o = pubmethod.tools.cutTime(r.drawTime, r.serverTime), s = r.preDrawCode.split(","), i = [], u = 0, n = s.length; u < n; u++) "0" == s[u].substr(0, 1) ? i.push(1 * s[u].substr(1, 1)) : i.push(1 * s[u]);
//       o = o < 0 ? 1 : o, r.cutime = o;
//       r.drawTime.split(" ")[1];
//       if (console.log(r), r.preDrawCode = i, t.flag) $(".logo").css("background", "url(img/logo/" + t.lotCode + ".png) center center no-repeat"), fcsdv.startVid(r, t); else {
//         if (t.flag && o <= 1) throw new Error("error");
//         setTimeout(function () {
//           fcsdv.stopVid(r, t)
//         }, "1000")
//       }
//     }
//   }, bjkl8: function (e, t) {
//     var r = pubmethod.tools.ifObj(e);
//     if ("100002" == r.result.businessCode) throw new Error("error");
//     if (0 == r.errorCode && 0 == r.result.businessCode) {
//       r = r.result.data;
//       for (var o = pubmethod.tools.cutTime(r.drawTime, r.serverTime), s = r.preDrawCode.split(","), i = [], u = 0, n = s.length; u < n; u++) "0" == s[u].substr(0, 1) ? i.push(1 * s[u].substr(1, 1)) : i.push(1 * s[u]);
//       if (o = o < 0 ? 1 : o, r.cutime = o, console.log(r), r.preDrawCode = i, t.flag) $(".logo").css("background", "url(img/logo/" + t.lotCode + ".png) center center no-repeat"), syxwV.startVid(r, t); else {
//         if (!t.flag && o <= 1) throw new Error("error");
//         setTimeout(function () {
//           syxwV.stopVid(r, t)
//         }, "1000")
//       }
//     }
//   }, twbg: function (e, t) {
//     var r = pubmethod.tools.ifObj(e);
//     if ("100002" == r.result.businessCode) throw new Error("error");
//     if (0 == r.errorCode && 0 == r.result.businessCode) {
//       r = r.result.data;
//       for (var o = pubmethod.tools.cutTime(r.drawTime, r.serverTime), s = r.preDrawCode.split(","), i = [], u = 0, n = s.length; u < n; u++) "0" == s[u].substr(0, 1) ? i.push(1 * s[u].substr(1, 1)) : i.push(1 * s[u]);
//       if (o = o < 0 ? 1 : o, r.cutime = o, console.log(r), r.preDrawCode = i, t.flag) syxwV.startVid(r, t); else {
//         if (!t.flag && o <= 1) throw new Error("error");
//         setTimeout(function () {
//           syxwV.stopVid(r, t)
//         }, "1000")
//       }
//     }
//   }, gxklsf: function (e, t) {
//     var r = pubmethod.tools.ifObj(e);
//     if ("100002" == r.result.businessCode) throw new Error("error");
//     if (0 == r.errorCode && 0 == r.result.businessCode) {
//       r = r.result.data;
//       for (var o = pubmethod.tools.cutTime(r.drawTime, r.serverTime), s = r.preDrawCode.split(","), i = [], u = 0, n = s.length; u < n; u++) "0" == s[u].substr(0, 1) ? i.push(1 * s[u].substr(1, 1)) : i.push(1 * s[u]);
//       if (o = o < 0 ? 1 : o, r.cutime = o, console.log(r), r.numArr = i, t.flag) gxklsf.startVid(r, t); else {
//         if (!t.flag && o <= 1) throw new Error("error");
//         setTimeout(function () {
//           gxklsf.stopVid(r, t)
//         }, "1000")
//       }
//     }
//   }, jsft: function (e, t) {
//     var r = pubmethod.tools.ifObj(e);
//     if ("100002" == r.result.businessCode) throw new Error("error");
//     if (0 == r.errorCode && 0 == r.result.businessCode) {
//       r = r.result.data;
//       for (var o = pubmethod.tools.cutTime(r.drawTime, r.serverTime), s = r.preDrawCode.split(","), i = [], u = 0, n = s.length; u < n; u++) "0" == s[u].substr(0, 1) ? i.push(1 * s[u].substr(1, 1)) : i.push(1 * s[u]);
//       if (o = o < 0 ? 1 : o, r.cutime = o, console.log(r), showcurrentresult(r.preDrawCode), $("#currentdrawid").text(r.drawCount), $("#nextdrawid").text(r.preDrawIssue), $("#stat1_1").text(r.sumFS), $("#stat1_2").text("0" == r.sumBigSamll ? "大" : "小"), $("#stat1_3").text("0" == r.sumSingleDouble ? "单" : "双"), $("#stat2_1").text("0" == r.firstDT ? "龙" : "虎"), $("#stat2_2").text("0" == r.secondDT ? "龙" : "虎"), $("#stat2_3").text("0" == r.thirdDT ? "龙" : "虎"), $("#stat2_4").text("0" == r.fourthDT ? "龙" : "虎"), $("#stat2_5").text("0" == r.fifthDT ? "龙" : "虎"), t.flag) startcountdown(o, t); else {
//         if (!t.flag && o <= 1) throw new Error("error");
//         setTimeout(function () {
//           finishgame(i.toString())
//         }, "1000"), setTimeout(function () {
//           startcountdown(o - 11, t)
//         }, "10000")
//       }
//     }
//   }
// };
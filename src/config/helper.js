import { Toast, Indicator } from 'mint-ui';

export class toolkit {
  /**
   * 去除字符串中的空白后是否长度为0，
   * str:string
   */
  static deleteBlank = (str) => {
    if (str.replace(/\s+/g, '').length === 0) {
      return true;
    }
    return false;
  };

  /**
   * @description 绑定事件 on(element, event, handler)
   */
  static on = (() => {
    if (document.addEventListener) {
      return (element, event, handler) => {
        if (element && event && handler) {
          element.addEventListener(event, handler, true);
        }
      };
    }
    return (element, event, handler) => {
      if (element && event && handler) {
        element.attachEvent(`on${event}`, handler);
      }
    };
  })();

  /**
   * @description 解绑事件 off(element, event, handler)
   */
  static off = (() => {
    if (document.removeEventListener) {
      return (element, event, handler) => {
        if (element && event) {
          element.removeEventListener(event, handler, true);
        }
      };
    }
    return (element, event, handler) => {
      if (element && event) {
        element.detachEvent(`on${event}`, handler);
      }
    };
  })();
}

/**
 * scrollTop animation
 * @param {*} el
 * @param {*} from
 * @param {*} to
 * @param {*} duration
 * @param {*} endCallback
 */
export const scrollTop = (el, from = 0, to, duration = 500, endCallback) => {
  const animateFun = callback => window.setTimeout(callback, 1000 / 60);

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame
      || window.mozRequestAnimationFrame
      || window.msRequestAnimationFrame
      || animateFun
    );
  }
  const difference = Math.abs(from - to);
  const step = Math.ceil(difference / duration * 50);

  const scroll = (start, end) => {
    if (start === end) {
      if (endCallback) {
        endCallback();
      }
      return;
    }

    let d = (start + step > end) ? end : start + step;
    if (start > end) {
      d = (start - step < end) ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }
    window.requestAnimationFrame(() => scroll(d, end, step));
  };
  scroll(from, to, step);
};

/**
 * 顯示輕提示
 * @param message
 * @param position
 */
export const showToast = (message, position = 'center', className = 'toast-primary') => {
  Toast({
    message,
    position,
    className,
    duration: 2500,
  });
};

/**
 * 顯示加载loading
 * @param message
 */
export const showLoading = (message) => {
  Indicator.open({
    text: message || '加载中...',
    // spinnerType: 'snake',
    spinnerType: 'fading-circle',
    // spinnerType: 'double-bounce',
    // spinnerType: 'triple-bounce',
  });
};

/**
 * 隐藏加载loading
 */
export const hideLoading = () => {
  Indicator.close();
};

/**
 * 連字號轉駝峰
 * @param str
 * @returns {string}
 */
export const hyphensToCamelCase = (str) => {
  const arr = str.split(/[_-]/);
  let newStr = '';
  for (let i = 1; i < arr.length; i++) {
    newStr += arr[i].charAt(0)
      .toUpperCase() + arr[i].slice(1);
  }
  return arr[0] + newStr;
};

/**
 * 获取开奖计划消息字串
 * @param plan
 * @param planName
 * @returns {string}
 */
export const getPlanMsgStr = (plan, planName) => {
  let str = '';
  plan.forEach((item) => {
    let {
      beginIssue, endIssue, plans, win,
    } = item;
    beginIssue = beginIssue.substring(beginIssue.length - 4);
    endIssue = endIssue.substring(endIssue.length - 4);
    plans = `【${plans.join(' ')}】`;
    let status = '';
    if (win === undefined) {
      status = '等开';
    }
    if (win === true) {
      status = '中';
    }
    if (win === false) {
      status = '错';
    }
    str += `${beginIssue}-${endIssue}期:${planName}\n${plans} ${status}\n`;
  });
  return str;
};

/**
 * 转化彩种为获取开奖计划需要的code
 * @param plan
 * @param planName
 * @returns {string}
 * 17: 'ffc'
 */

export const getLotteryCodeForPlan = (id) => {
  const config = {
    1: 'cqssc',
    20: 'pk10',
    28: 'xyft',
    21: 'gxk3',
  };
  return config[id];
};

export const getBallColor = (lotteryId, num) => {
  const ballColor = {
    // 1: '#3771de', // 重庆时时彩
    // 3: '#3771de', // 黑龙江时时彩
    // 4: '#3771de', // 新疆时时彩
    // 5: '#3771de', // 广东11选5
    // 8: '#3771de', // 山东11选5
    // 19: '#3771de', // 幸运28（pc蛋蛋）
    // 21: '#3771de', // 广西快三
    // 23: '#3771de', // 天津时时彩
    // 29: '#3771de', // 北京11选5
    // 21: '#3771de', // 江苏快三 未找到
    // 21: '#3771de', // 广东快乐十分 未找到
    // 21: '#3771de', // 幸运六合彩 未找到
    12: [ // 香港六合彩
      {
        color: '#f8223c',
        number: [1, 7, 23, 29, 45, 12, 18, 30, 34, 13, 19, 35, 2, 8, 24, 40, 46],
      },
      {
        color: '#1fc26b',
        number: [5, 16, 21, 27, 32, 38, 43, 6, 11, 17, 22, 28, 33, 39, 44, 49],
      },
      {
        color: '#0093e8',
        number: [3, 9, 25, 41, 47, 10, 14, 36, 15, 31, 37, 4, 20, 26, 42, 48],
      },
    ],
    20: {// pk10 | 幸运飞艇（28）
      0: '#07bf00',
      1: '#e6de00',
      2: '#0092dd',
      3: '#4b4b4b',
      4: '#ff7600',
      5: '#17e2e5',
      6: '#5234ff',
      7: '#bfbfbf',
      8: '#ff2600',
      9: '#780b00',
      10: '#07bf00',
      lh: { // 龙虎
        龙: '#f00',
        虎: '#049b04',
      },
      gyh: {// 冠亚和
        8: '#f90',
        9: '#c00',
        10: '#c00',
        11: '#c00',
        12: '#c00',
        13: '#c00',
        // 14: '#f90',
        // 15: '#f90',
        16: '#666',
        // 17: '#666',
        18: '#09f',
        大: '#f00',
        小: '#090',
        庄: '#ff9901',
        闲: '#009900',
        双: '#c00',
        单: '#09f',
        A: '#c00',
        B: '#09f',
        C: '#666',
      },

    },
  };
  let needColor = '';
  switch (lotteryId) {
    case 12:
      ballColor[12].forEach(({ color, number }) => {
        if (number.includes(num)) {
          needColor = color;
        }
      });
      break;
    default:
      needColor = ballColor[20][num];
      break;
  }
  return needColor;
};

/**
 * 獲取系統設定域名
 */
export const getRunningDomain = () => {
  if (process.env.NODE_ENV === 'development') {
    return '/api';
  }
  const { protocol, hostname } = window.location;
  let domain = '';
  domain = `wxchat2.${hostname.split('.')[1]}.${hostname.split('.')[2]}`;
  if (hostname.split('.').length >= 3) {
    // TODO 未來這邊要改掉，統一為api開頭
    domain = `wxchat2.${hostname.split('.')[1]}.${hostname.split('.')[2]}`;
  }
  return `${protocol}//${domain}`;
};

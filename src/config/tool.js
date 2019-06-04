import { Toast, Indicator } from 'mint-ui';

export class toolkit{
   /**
   * 去除字符串中的空白后是否长度为0，
   * str:string
   */
  static deleteBlank = (str) => {
    if (str.replace(/\s+/g, '').length === 0) {
      return true;
    }
    return false;
  }
}

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
 * 隐藏loading
 */
export const hideLoading = () => {
  Indicator.close();
};

/**
 * 这是一个彩蛋
 * 彩虹颜色
 */
export const rainbow = () => console.log("%c Powered by Zhaohui - microzz.com", "background-image:-webkit-gradient( linear, left top,right top, color-stop(0, #00a419),color-stop(0.15, #f44336), color-stop(0.29, #ff4300),color-stop(0.3, #AA00FF),color-stop(0.4, #8BC34A), color-stop(0.45, #607D8B),color-stop(0.6, #4096EE), color-stop(0.75, #D50000),color-stop(0.9, #4096EE), color-stop(1, #FF1A00));color:transparent;-webkit-background-clip:text;font-size:13px;")

/**
 * 这是一个彩蛋
 * 立体文字
 */
export const dimensional = (code) => console.log(`%c${code}`," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em");


// console.log('%c    sdfs  ', 'background: url(\'data:image/svg+xml;utf8,<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><g><text font-size="32" text-anchor="middle" x="50%" y="50%" text-transform="uppercase" fill="none" stroke="#3498db" text-shadow="0 0 1px #3498db" stroke-width="1px" stroke-dasharray="90 310">【Calamus】<animate attributeName="stroke-dashoffset" begin="-1.5s" dur="6s" from="0" to="-400" repeatCount="indefinite"/></text><text font-size="32" text-anchor="middle" x="50%" y="50%" text-transform="uppercase" fill="none" stroke="#f39c12" text-shadow="0 0 1px #f39c12" stroke-width="1px" stroke-dasharray="90 310">【Calamus】<animate attributeName="stroke-dashoffset" begin="-3s" dur="6s" from="0" to="-400" repeatCount="indefinite"/></text><text font-size="32" text-anchor="middle" x="50%" y="50%" text-transform="uppercase" fill="none" stroke="#e74c3c" text-shadow="0 0 1px #e74c3c" stroke-width="1px" stroke-dasharray="90 310">【Calamus】<animate attributeName="stroke-dashoffset" begin="-4.5s" dur="6s" from="0" to="-400" repeatCount="indefinite"/></text><text font-size="32" text-anchor="middle" x="50%" y="50%" text-transform="uppercase" fill="none" stroke="#9b59b6" text-shadow="0 0 1px #9b59b6" stroke-width="1px" stroke-dasharray="90 310">【Calamus】<animate attributeName="stroke-dashoffset" begin="-6s" dur="6s" from="0" to="-400" repeatCount="indefinite"/></text></g></svg>\') left top no-repeat; font-size: 48px;')  console.log("%c kiz.calamus@gmail.com", "color:#9e9e9e;font-size:14px")
// console.log("%c ", "background: url(https://cdn.calamus.xyz/qq%E7%BE%A4.png) no-repeat center;padding-left:151px;padding-bottom: 240px;")
// console.log("%c ", "background: url(https://cdn.calamus.xyz/wechat.jpg) no-repeat center;padding-left:151px;padding-bottom: 151px;")
// console.log("%c你可以选择爱我或者不爱我\n而我\n只能选择爱你或者更爱你\n", "color:#e1244e;font-size:14px;text-shadow:3px 1px 2px #e1244e9e;")
//打印键盘
// console.log((_=>[..."`1234567890-=~~QWERTYUIOP[]\\~ASDFGHJKL;'~~ZXCVBNM,./~"].map(x=>(o+=`/${b='_'.repeat(w=x<y?2:' 667699'[x=["BS","TAB","CAPS","ENTER"][p++]||'SHIFT',p])}\\|`,m+=y+(x+'    ').slice(0,w)+y+y,n+=y+b+y+y,l+=' __'+b)[73]&&(k.push(l,m,n,o),l='',m=n=o=y),m=n=o=y='|',p=l=k=[])&&k.join`
// `)())

// console.log('%chello world', 'font-size:16px;color:white;padding: 20px 50px;background-image: -webkit-radial-gradient(hsla(120,70%,60%,.9),hsla(360,60%,60%,.9))');
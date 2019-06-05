import Cookies from 'js-cookie';

const keys = {
  TOKEN_KEY: 'token',
};

/**
 * 使用者資訊存儲
 */
export default class UserStorage {
  /**
   * 設定token到cookie
   * @param token
   */
  static setToken = (token) => {
    Cookies.set(keys.TOKEN_KEY, token, { expires: 7 });
  }

  /**
   * 從cookie獲取token
   * @returns {*}
   */
  static getToken = () => {
    const token = Cookies.get(keys.TOKEN_KEY);
    if (token) {
      return token;
    }
    return false;
  }

  /**
   * 設置個人訊息到localstorage
   * @param userInfo
   */
  static setUserInfo = (userInfo) => {
    localStorage.userInfo = JSON.stringify(userInfo);
  }

  /**
   * 獲取個人訊息到localstorage
   * @returns {*}
   */
  static getUserInfo = () => {
    const { userInfo } = localStorage;
    if (userInfo) {
      return JSON.parse(userInfo);
    }
    return false;
  }

  /**
   * 清除掉所有資訊
   */
  static clean = (callback) => {
    Cookies.remove(keys.TOKEN_KEY);
    localStorage.removeItem('userInfo');
    if (callback) {
      callback();
    }
  }

  /**
 * 存公共信息
 */
  static setGlobalConfig = (globalConfig) => {
    localStorage.globalConfig = JSON.stringify(globalConfig);
  }

  /**
 * 取公共信息
 */
  static getGlobalConfig = () => {
    const { globalConfig } = localStorage;
    if (globalConfig) {
      return JSON.parse(globalConfig);
    }
    return false;
  }

}

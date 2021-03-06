import axios from 'axios';
import mockApiUrl from './mock-config';

export default class mockApi {
  //获取聊天列表
  static getChatList = async () => axios.post(`${mockApiUrl.chatListUrl}`)
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(JSON.stringify(err)))

  //获取名字列表
  static getFriendList = async () => axios.post(`${mockApiUrl.friendList}`)
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(JSON.stringify(err)))

  //获取vue资料列表
  static getVueList = async () => axios.post(`${mockApiUrl.vueList}`)
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(JSON.stringify(err)))

  //获取js原生资料列表
  static getJsNativeList = async () => axios.post(`${mockApiUrl.jsNativeList}`)
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(JSON.stringify(err)))

  //获取战略性布局资料列表
  static getStrategyList = async () => axios.post(`${mockApiUrl.strategyList}`)
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(JSON.stringify(err)))

  //获取个人中心列表
  static getMeItemList = async () => axios.post(`${mockApiUrl.meItemList}`)
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(JSON.stringify(err)))
}

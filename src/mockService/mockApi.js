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
}

import axios from 'axios';
import mockApiUrl from './mock-config';

export default class mockApi {
  static getChatList = async () => axios.post(`${mockApiUrl.chatListUrl}`)
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(JSON.stringify(err)))
}

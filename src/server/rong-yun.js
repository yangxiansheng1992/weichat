import axios from 'axios';
import RYurl from '../config/RY-config';

export default class RongYunApi {

  static getUserToken = async () => (axios.post(`${RYurl.getUserToken}`)
  .then((res)=>return Promise.resolve(res.data))
  .catch((err)=>Promise.reject(JSON.stringify(error))));

}
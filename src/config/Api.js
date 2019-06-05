
import axios from 'axios';
import RYurl from './RY-config';

export default class Api {
  //获取融云toke
  static getRongCloudToken = async ({ userId, name, portraitUri }) => (axios.get(`${RYurl.RongCloudTokenUrl}`, {
    params: { userId, name, portraitUri },
  })
    .then(res => Promise.resolve(res.data))
    .catch(error => Promise.reject(JSON.stringify(error))))

}
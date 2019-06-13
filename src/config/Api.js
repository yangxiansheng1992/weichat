
import axios from 'axios';
import RYurl from './RY-config';


export default class Api {
  //获取融云的token
  static getRongCloudToken = async ({ userId, name, portraitUrl }) => (axios.get(`${RYurl.RongCloudTokenUrl}`,
    {
      params: { userId, name, portraitUrl },
    }
  )
    .then(res => Promise.resolve(res.data))
    .catch(error => Promise.reject(JSON.stringify(error))))

}

import axios from 'axios';
import RYurl from './RY-config';
import sha1 from 'sha1';
const Nonce = parseInt(Math.random() * 10000)
const Timestamp = new Date().getTime()
const Signature = RYurl.AppSecret + Nonce + Timestamp

export default class Api {
  //获取融云的token
  static getRongCloudToken = async ({ userId, name, portraitUrl }) => {
    console.log(RYurl.RongCloudTokenUrl);
    console.log({
      'App-Key': RYurl.appKey,
      'Nonce': Nonce,
      'Timestamp': Timestamp,
      'Signature': sha1(Signature),
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': 78,
    })
    return (axios.post(`${RYurl.RongCloudTokenUrl}`,
      {
        userId,
        name,
        portraitUrl,
      },
      {
        headers: {
          'App-Key': RYurl.appKey,
          'Nonce': Nonce,
          'Timestamp': Timestamp,
          'Signature': sha1(Signature),
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': 78,
        },
      }
    )
      .then(res => Promise.resolve(res.data))
      .catch(error => Promise.reject(JSON.stringify(error))))
  }

}
const sha1 = require('sha1')
const AppKey = 'x18ywvqfxczhc'
const AppSecret = '7XbvINhe82'
const Nonce = parseInt(Math.random() * 10000)
const Timestamp = new Date().getTime()
const Signature = AppSecret + Nonce + Timestamp
const express = require('express')
const request = require('request')
const baseUrl = 'http://api-cn.ronghub.com' //融云baseURL
const apiServerApp = express();

apiServerApp.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
console.log('启动')

apiServerApp.get('/user/token', function (req, res) {
  let userId = req.query.userId ? req.query.userId : ''
  let name = req.query.name ? req.query.name : ''
  let portraitUri = req.query.portraitUri ? req.query.portraitUri : ''
  request.post({
    url: `${baseUrl}/user/getToken.json`,
    form: {
      userId,
      name,
      portraitUri
    },
    headers: {
      'App-Key': AppKey,
      'Nonce': Nonce,
      'Timestamp': Timestamp,
      'Signature': sha1(Signature),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  },
    (err, response, body) => {
      try {
        res.json(JSON.parse(body))
      } catch (error) {
        console.log(error)
      }

    }
  )
})
console.log('> Starting api server...on 1990 port')
// var apiServer = apiServerApp.listen(1990);
apiServerApp.listen(1990, () => {
  console.log('监听服务');
});


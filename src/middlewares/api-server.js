const sha1 = require('sha1')
const AppKey = 'k51hidwqk4xab'
const AppSecret = 'wi4LWuUxlS1XxS'
const Nonce = parseInt(Math.random() * 10000)
const Timestamp = new Date().getTime()
const Signature = AppSecret + Nonce + Timestamp
const express = require('express')
const request = require('request')
// const { exec } = require('child_process');
const baseUrl = 'http://api-cn.ronghub.com' //融云baseURL
const apiServerApp = express()

apiServerApp.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// apiServerApp.get('/execute/update', function (req, res) {

//     let key = req.query.key ? req.query.key : ''

//     if (key !== 'UzGPLdBTGW83OXVbKUp76rwxDaOzYvAI') {
//       res.json({ msg: '未授權' })
//       return
//     }
//     exec('sudo ssh-agent bash -c "ssh-add ~/.ssh/id_rsa;git stash;git pull origin develop"', (err, stdout, stderr) => {
//       if (err) {
//         console.log(err)
//         return
//       }

//       console.log(`stdout: ${stdout}`)
//       console.log(`stderr: ${stderr}`)
//     })

//     exec('sudo bash -c "cd ../;npm install;npm rebuild node-sass;sudo bash start.sh";', (err, stdout, stderr) => {
//       if (err) {
//         console.log(err)
//         return
//       }

//       console.log(`stdout: ${stdout}`)
//       console.log(`stderr: ${stderr}`)
//     })
//     res.json({ msg: '開始執行更新打包' })
//   }
// )
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

// // 聊天室禁言/踢人服务
// // type => gag: 禁言，kick: 踢出
// apiServerApp.get('/chatroom/user/block/add', function (req, res) {
//   let userId = req.query.userId || ''
//   let chatroomId = req.query.chatroomId || ''
//   let minute = req.query.minute || ''
//   const reqUrl = req.query.type === 'gag' ? `${baseUrl}/chatroom/user/gag/add.json` : `${baseUrl}/chatroom/user/block/add.json`

//   request.post({
//       url: reqUrl,
//       form: {
//         userId,
//         chatroomId,
//         minute
//       },
//       headers: {
//         'App-Key': AppKey,
//         'Nonce': Nonce,
//         'Timestamp': Timestamp,
//         'Signature': sha1(Signature),
//         'Content-Type': 'application/x-www-form-urlencoded'
//       }
//     },
//     (err, response, body) => {
//       res.json(JSON.parse(body))
//     }
//   )
// })

// apiServerApp.get('/chatroom/user/block/rollback', function (req, res) {
//   let userId = req.query.userId || ''
//   let chatroomId = req.query.chatroomId || ''
//   const reqUrl = req.query.type === 'gag' ? `${baseUrl}/chatroom/user/gag/rollback.json` : `${baseUrl}/chatroom/user/block/rollback.json`

//   request.post({
//       url: reqUrl,
//       form: {
//         userId,
//         chatroomId
//       },
//       headers: {
//         'App-Key': AppKey,
//         'Nonce': Nonce,
//         'Timestamp': Timestamp,
//         'Signature': sha1(Signature),
//         'Content-Type': 'application/x-www-form-urlencoded'
//       }
//     },
//     (err, response, body) => {
//       res.json(JSON.parse(body))
//     }
//   )
// })

// apiServerApp.get('/chatroom/user/block/list', function (req, res) {
//   let chatroomId = req.query.chatroomId || ''
//   const reqUrl = req.query.type === 'gag' ? `${baseUrl}/chatroom/user/gag/list.json` : `${baseUrl}/chatroom/user/block/list.json`

//   request.post({
//       url: reqUrl,
//       form: {
//         chatroomId
//       },
//       headers: {
//         'App-Key': AppKey,
//         'Nonce': Nonce,
//         'Timestamp': Timestamp,
//         'Signature': sha1(Signature),
//         'Content-Type': 'application/x-www-form-urlencoded'
//       }
//     },
//     (err, response, body) => {
//       res.json(JSON.parse(body))
//     }
//   )
// })

module.exports = apiServerApp

// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const { code } = event
  
  let appRet = await db.collection('app').get()

  let { appId, appSecret } = appRet.data[0]

  const URL = 'https://api.weixin.qq.com/sns/jscode2session'

  try {
    let res = await axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`)
    return res.data
  } catch(err) {
    return JSON.stringify(err)
  }
  
}
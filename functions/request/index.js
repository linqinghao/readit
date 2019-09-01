// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const request = require('axios');

// 云函数入口函数
exports.main = async (event, context) => {
  let { url } = event;
  let res = await request(url);
  return res;
}
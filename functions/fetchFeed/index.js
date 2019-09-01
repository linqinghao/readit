// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const Parser = require('rss-parser');

let parser = new Parser()

// 云函数入口函数
exports.main = async (event, context) => {
  let { url } = event;
  let res = await parser.parseURL(url);
  return res;
}
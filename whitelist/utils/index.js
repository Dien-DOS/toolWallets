const crypto = require('crypto')

const md5 = (data) => {
  return crypto.createHash('md5').update(data).digest('hex')
}

const delay = (time) => {
  return new Promise(resolve => setTimeout(resolve, time))
}

const isObject = (data) => {
  return data != null && typeof data === "object" && !Array.isArray(data)
}

const isArray = (data) => {
  return data != null && typeof data === "object" && Array.isArray(data)
}

const isURL = (data) => {
  return data && (data.startsWith("http") || data.startsWith("https"))
}

const toAsync = async (promise) => {
  return new Promise(resolve => promise.then(data => resolve({ data })).catch(err => resolve({ err })))
}

module.exports = { md5, delay, isObject, isArray, isURL, toAsync }
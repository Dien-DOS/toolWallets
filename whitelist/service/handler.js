const { isObject, isURL } = require("@dir/utils")
const { airdropExecute } = require("@dir/service/airdrop")
const axios = require("axios").default

const handle = async (body = {}) => {
  const { event, data, metadata, callbackURL } = body

  const result = {
    request: { event, data, metadata, callbackURL },
    response: { success: false, message: "Invalid data" }
  }

  if (!event || !isObject(data)) {
    return result.response
  }

  if (event == "airdrop") {
    result.response = await airdropExecute(data)
  } else {
    result.response = { success: false, message: "Event not found" }
  }

  console.log("\n======================================================\n")
  console.log(JSON.stringify(result))

  if (isURL(callbackURL)) axios.post(callbackURL, result.response).catch(() => { })

  return result.response
}

module.exports = { handle }
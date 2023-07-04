const config = {
  IS_DEVELOPMENT: process.env.MODE === "development",
  MONGO_URI: process.env.MONGO_URI || "",
  CONTRACT_ASSETS_ADDRESS: process.env.CONTRACT_ASSETS_ADDRESS || "",
  ADMIN_PRIVATE_KEY: []
}
if (process.env.ADMIN_PRIVATE_KEY_1) config.ADMIN_PRIVATE_KEY.push(process.env.ADMIN_PRIVATE_KEY_1)
if (process.env.ADMIN_PRIVATE_KEY_2) config.ADMIN_PRIVATE_KEY.push(process.env.ADMIN_PRIVATE_KEY_2)
if (process.env.ADMIN_PRIVATE_KEY_3) config.ADMIN_PRIVATE_KEY.push(process.env.ADMIN_PRIVATE_KEY_3)
if (process.env.ADMIN_PRIVATE_KEY_4) config.ADMIN_PRIVATE_KEY.push(process.env.ADMIN_PRIVATE_KEY_4)
if (process.env.ADMIN_PRIVATE_KEY_5) config.ADMIN_PRIVATE_KEY.push(process.env.ADMIN_PRIVATE_KEY_5)
if (process.env.ADMIN_PRIVATE_KEY_6) config.ADMIN_PRIVATE_KEY.push(process.env.ADMIN_PRIVATE_KEY_6)
if (process.env.ADMIN_PRIVATE_KEY_7) config.ADMIN_PRIVATE_KEY.push(process.env.ADMIN_PRIVATE_KEY_7)
if (process.env.ADMIN_PRIVATE_KEY_8) config.ADMIN_PRIVATE_KEY.push(process.env.ADMIN_PRIVATE_KEY_8)
if (process.env.ADMIN_PRIVATE_KEY_9) config.ADMIN_PRIVATE_KEY.push(process.env.ADMIN_PRIVATE_KEY_9)
if (process.env.ADMIN_PRIVATE_KEY_10) config.ADMIN_PRIVATE_KEY.push(process.env.ADMIN_PRIVATE_KEY_10)
if (process.env.ADMIN_PRIVATE_KEY_11) config.ADMIN_PRIVATE_KEY.push(process.env.ADMIN_PRIVATE_KEY_11)
if (process.env.ADMIN_PRIVATE_KEY_12) config.ADMIN_PRIVATE_KEY.push(process.env.ADMIN_PRIVATE_KEY_12)
if (process.env.ADMIN_PRIVATE_KEY_13) config.ADMIN_PRIVATE_KEY.push(process.env.ADMIN_PRIVATE_KEY_13)
if (process.env.ADMIN_PRIVATE_KEY_14) config.ADMIN_PRIVATE_KEY.push(process.env.ADMIN_PRIVATE_KEY_14)
if (process.env.ADMIN_PRIVATE_KEY_15) config.ADMIN_PRIVATE_KEY.push(process.env.ADMIN_PRIVATE_KEY_15)
if (process.env.ADMIN_PRIVATE_KEY_16) config.ADMIN_PRIVATE_KEY.push(process.env.ADMIN_PRIVATE_KEY_16)
if (process.env.ADMIN_PRIVATE_KEY_17) config.ADMIN_PRIVATE_KEY.push(process.env.ADMIN_PRIVATE_KEY_17)
if (process.env.ADMIN_PRIVATE_KEY_18) config.ADMIN_PRIVATE_KEY.push(process.env.ADMIN_PRIVATE_KEY_18)
if (process.env.ADMIN_PRIVATE_KEY_19) config.ADMIN_PRIVATE_KEY.push(process.env.ADMIN_PRIVATE_KEY_19)
if (process.env.ADMIN_PRIVATE_KEY_20) config.ADMIN_PRIVATE_KEY.push(process.env.ADMIN_PRIVATE_KEY_20)
console.log(config)
module.exports = config
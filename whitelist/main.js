require("dotenv").config({ path: "./config/config.env" })
const { MONGO_URI } = require("@dir/config")
const { handle } = require("@dir/service/handler")
const http = require("http")
const websocket = require("ws")
const express = require("express")
const mongoose = require("mongoose")

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
mongoose.connection.on("error", e => { throw new Error(`[__EXIT__] Mongo ${e}`) })
mongoose.connection.on("connected", () => console.log("Mongo connected", MONGO_URI))

const app = express()
app.use(require("cors")())
app.use(express.json({ limit: "500kb" }))
app.use(async (req, res) => res.send(await handle(req.body)))

const server = http.createServer(app)
const wss = new websocket.Server({ server })
wss.on("connection", (ws) => ws.on("message", async (message) => {
  ws.send(JSON.stringify(await handle(JSON.parse(message))))
}))

server.listen(8998, () => console.log("App listening at http://localhost:8998"))
process.on("uncaughtException", e => {
  console.log("uncaughtException", e)
  e.message.includes("[__EXIT__]") && process.exit(0)
})
process.on("unhandledRejection", e => {
  console.log("unhandledRejection", e)
  e.message.includes("[__EXIT__]") && process.exit(0)
})
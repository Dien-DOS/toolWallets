const mongoose = require("mongoose")

const schema = new mongoose.Schema(
  {
    wallets: [{ address: { type: String } }],
    offset: { type: Number, default: 0 },
  },
  {
    timestamps: true,
    collection: "whitelist"
  }
)
schema.index({ address: 1 }, { unique: true })

module.exports = mongoose.model("whitelist", schema)
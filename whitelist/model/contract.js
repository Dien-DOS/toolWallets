const mongoose = require("mongoose")

const schema = new mongoose.Schema(
  {
    name: { type: String },
    type: { type: String },
    contract: { type: String },
    rpcURL: { type: String },
    burnId: { type: Number },
    chainId: { type: Number },
    startBlock: { type: Number },
    abi: [{ type: Object }],
  },
  {
    timestamps: true,
    collection: "contract"
  }
)
schema.index({ contract: 1, chainId: 1 }, { unique: true })

module.exports = mongoose.model("contract", schema)
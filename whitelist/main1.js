const ethers = require("ethers")
const fs = require("fs")
const csv = require('csv-parser')

// const provider = new ethers.providers.JsonRpcProvider("https://test.doschain.com")
// const signer = new ethers.Wallet("368c754866710343b20a88c78ae8832b028aff90d3f3ba0456a02aba6ae6b9d7", provider)

const run = async () => {
  const results = []
  fs.createReadStream(__dirname + "/final.csv").pipe(csv())
    .on("data", data => results.push(data))
    .on("end", () => {
      fs.writeFileSync("final.json", JSON.stringify(results))
      console.log("done")
    })

  // const count = 10
  // const whitelist = require("./whitelist.json")
  // const sender = await signer.getAddress()
  // console.log(sender)

  // for (let i = 0; i < count; i++) {
  //   const { HolderAddress } = whitelist[i]
  //   const tx = {
  //     from: sender,
  //     to: HolderAddress,
  //     value: ethers.utils.parseUnits("0.1", 18),
  //     nonce: await provider.getTransactionCount(sender, "latest"),
  //   }
  //   try {
  //     await signer.sendTransaction(tx)
  //     console.log(i, "done", HolderAddress)
  //   } catch (error) {
  //     console.log(i, "fail", HolderAddress)
  //   }
  // }
}
run()
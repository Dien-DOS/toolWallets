const { ADMIN_PRIVATE_KEY, CONTRACT_ASSETS_ADDRESS } = require("@dir/config")
const { toAsync, delay } = require("@dir/utils")
const Web3 = require("web3")
const Contract = require("@dir/model/contract")
const Whitelist = require("@dir/model/whitelist")
const ethers = require("ethers")
let cnt = 0

const nextPrivateKey = () => {
  if (cnt == ADMIN_PRIVATE_KEY.length) cnt = 0
  return ADMIN_PRIVATE_KEY[cnt++]
}

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const sendSignedTransaction = async ({ web3, tx, privateKey }) => {
  const sender = web3.eth.accounts.privateKeyToAccount(privateKey).address
  const [gasPrice, gas] = await Promise.all([web3.eth.getGasPrice(), tx.estimateGas({ from: sender })])
  const options = { to: CONTRACT_ASSETS_ADDRESS, data: tx.encodeABI(), gas: gas, gasPrice: gasPrice }
  const signed = await web3.eth.accounts.signTransaction(options, privateKey)
  return web3.eth.sendSignedTransaction(signed.rawTransaction)
}

const airdropExecute = async () => {
  const ct = await Contract.findOne({ contract: { $regex: CONTRACT_ASSETS_ADDRESS, $options: "sim" } })
  if (!ct) {
    return { success: false, message: "Invalid contract" }
  }

  const wl = await Whitelist.findOne({})
  if (!wl) {
    return { success: false, message: "Invalid whitelist" }
  }

  const { abi, rpcURL } = ct
  const { offset, wallets } = wl
  const web3 = new Web3(rpcURL)
  const contract = new web3.eth.Contract(abi, CONTRACT_ASSETS_ADDRESS)
  const signer = new ethers.Wallet(ADMIN_PRIVATE_KEY[0])

  const count = wallets.length
  console.log("Total address", wallets.length - offset + 1)

  for (let i = offset; i < count; i++) {
    const { address } = wallets[i]
    const [wallet, id, amount] = [address, 14, 1]

    const nonce = Number(await contract.methods.getNonce(wallet).call())
    const messageEncode = ethers.utils.solidityKeccak256(["address", "uint256", "uint256", "uint256"], [wallet.toLowerCase(), id, nonce, amount])
    const messageHash = ethers.utils.arrayify(messageEncode)
    const signature = await signer.signMessage(messageHash)

    const tx = contract.methods.mint(wallet, id, nonce, amount, signature)
    const res = await toAsync(sendSignedTransaction({ web3, tx, privateKey: nextPrivateKey() }))

    if (res.err) console.log(new Date(), "Error", i, count, wallet, tx.err)
    else console.log(new Date(), "Success", i, count, wallet)

    await toAsync(Whitelist.updateOne({ _id: wl.id }, { $inc: { offset: 1 } }))
    await delay(random(30_000, 120_000))
  }

  return { success: true, message: "Done" }
}
airdropExecute()

module.exports = { airdropExecute }
import Caver from 'caver-js'
import { abi } from '../Contracts/block.json'
const caver = new Caver('https://api.baobab.klaytn.net:8651/')
const contractAddress = '0x6531f7AE930D56F7536E2CA9F3d2aF5dBb43De71'
const myContract = new caver.klay.Contract(abi, contractAddress, {
  from: '0x1234567890123456789012345678901234567891', // default from address
  gasPrice: '25000000000' // default gas price in peb, 25 Gpeb in this case
})
const privateKey =
  '0x8d760d7929139a7c3a993f36169c25596352e7f303c1f923576253af6b2e9f55' // ONLY FOR SHORT DEVELOP
const myAccount = caver.klay.accounts.privateKeyToAccount(privateKey)
caver.klay.accounts.wallet.add(myAccount)

export function loadOpenedIssues(callback) {
  loadIssue(0, callback)
}

export function loadIssue(idx, callback) {
  myContract.methods
    .issues(idx)
    .call({ from: contractAddress }, function(error, result) {
      if (result !== undefined) {
        if (callback) callback(result)
        else {
          return result
        }
      }
    })
}

export const applyAccount = async (github_id, privateKey) => {
  // keystore : json(object), password : string
  var myAccount = caver.klay.accounts.privateKeyToAccount(privateKey)
  const address = await myContract.methods.githubToAddress(github_id).call()
  if (address) {
    localStorage.setItem('address', address)
  } else {
    myContract.methods.applyAccount(github_id).send(
      {
        from: myAccount.address,
        gas: '5000000' // fixed
      },
      function(error, transactionHash) {
        // myContract.methods.GithubToAddress
        if (error) console.error('error')
        else {
          localStorage.setItem('address', myAccount.address)
        }
      }
    )
  }
}

// function keystore2Account(keystore, password) {
//   return caver.klay.accounts.decrypt(keystore, password)
// }

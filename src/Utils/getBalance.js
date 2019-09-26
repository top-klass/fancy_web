import Caver from 'caver-js'
import { abi } from '../Contracts/getBalance.json'
const caver = new Caver('https://api.baobab.klaytn.net:8651/')
const contractAddress = '0x779bA4eF1e427046be8c8820FC915A834F93DE1E'
const myContract = new caver.klay.Contract(abi, contractAddress, {
  from: '0x1234567890123456789012345678901234567891', // default from address
  gasPrice: '25000000000' // default gas price in peb, 25 Gpeb in this case
})

export function getBalance(address, callback) {
  myContract.methods
    .balanceOf(address)
    .call({ from: contractAddress }, function(error, result) {
      if (result !== undefined) {
        if (callback) callback(result)
        else {
          console.log("there's no callback")
        }
      }
    })
}

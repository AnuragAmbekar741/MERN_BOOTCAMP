const jwt = require('jsonwebtoken')

const secret = 'SuperSecret'

let encrypt = jwt.sign("Anurag@gmail.com", secret) //Encrypt it =>payload,secret

let decrypt = jwt.verify(encrypt, secret)//Decrypt => token, secret

console.log(encrypt)
console.log(decrypt)
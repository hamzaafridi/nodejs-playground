const fs = require('fs')

const dataBuffer = fs.readFileSync('data.json')

const strJSON = dataBuffer.toString()

const objD = JSON.parse(strJSON)

//change data
objD.name = "Hareem"
objD.age = 1

//upload

const strJSON2 = JSON.stringify(objD)

fs.writeFileSync('data.json', strJSON2)

console.log(strJSON2)
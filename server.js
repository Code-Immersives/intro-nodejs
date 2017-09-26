// // how to use other js files in your project
// let myString = require('./export')
// console.log(myString)
// // importing an object with multiple properties
// let myObj = require('./object')
// myObj.func()
// // importing my function and invoke it
// let myFunc = require('./func')
// myFunc('tony')
//
// // built in node modules or node packages
let fs = require('fs')
// let textContent = fs.readFileSync('myText.txt', 'utf8')
// console.log(textContent)
// let asyncTextContent = fs.readFile('myText.txt', 'utf8', (error, content) => {
//   console.log(error) // will be null
//   console.log(content) // will have text content
// })
// let errorTextContent = fs.readFile('myTet.txt', 'utf8', (error, content) => {
//   console.log(error) // will have a value
//   console.log(content) // will be undefined
// })
// // creating content to append to a text file
// let textToWrite = 'here is some text to add to the file'
// // I'm actually putting the text in the file using the fs module
// fs.writeFile('temp.txt', textToWrite, (error, content) => {
//   console.log(error)
//   console.log(content)
// })

// read the content from the csv
let csvContent = fs.readFileSync('./user_data.csv', 'utf8')
// console.log(csvContent)
let arrayContent = csvContent.split('\r\n')
// console.log(arrayContent)
let keysArray = arrayContent[0].split(',')
// console.log(keysArray)
let valuesArray = []
for (let i = 1; i < arrayContent.length; i++) {
  valuesArray.push(arrayContent[i].split(','))
}
// console.log(valuesArray)

// [ 'id', 'username', 'location', 'age' ]

// [ [ '1', 'toneloke', 'compton', '29' ],[ '2', 'joesmoe', 'dc', '55' ],[ '3', 'silentJay', 'new york', '88' ] ]

// create objects for each record
let jsonArray = []
for (let i = 0; i < valuesArray.length; i++) {
  let tempObj = {}
  for (let j = 0; j < valuesArray[i].length; j++) {
    // var myOBJ = {}
    // myOBJ['id'] = 1
    tempObj[keysArray[j]] = valuesArray[i][j]
    // console.log(tempObj)
  }
  // {id: 1, username: 'toneloke', location: 'compton', age: 29}
  jsonArray.push(tempObj)
}
// console.log(jsonArray)

// build our first node server using http
let http = require('http')

let server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'application/json'})
  response.write(JSON.stringify(jsonArray))
  response.end()
})

server.listen(3000)

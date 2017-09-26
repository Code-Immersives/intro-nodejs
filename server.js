// how to use other js files in your project
let myString = require('./export')
console.log(myString)
// importing an object with multiple properties
let myObj = require('./object')
myObj.func()
// importing my function and invoke it
let myFunc = require('./func')
myFunc('tony')

// built in node modules or node packages
let fs = require('fs')
let textContent = fs.readFileSync('myText.txt', 'utf8')
console.log(textContent)

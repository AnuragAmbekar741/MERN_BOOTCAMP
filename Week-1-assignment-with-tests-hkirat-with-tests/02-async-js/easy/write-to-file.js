const fs = require('fs')

fs.writeFile('test.txt', 'WEEK4 - ASSIGNMENT', { 'encoding': 'utf-8', 'flags': 'a' }, (err) => {
    if (!err) console.log("data added")
})
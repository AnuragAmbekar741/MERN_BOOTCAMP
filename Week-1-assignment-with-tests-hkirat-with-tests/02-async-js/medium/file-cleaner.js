const fs = require('fs')

fs.readFile('test.txt', 'utf-8', (err, data) => {
    data.replace(/\s+/g, ' ').trim()
})
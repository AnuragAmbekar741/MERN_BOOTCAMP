const fs = require('fs')

fs.readFile('test.txt', 'utf-8', (err, data) => {
    console.log(data)
})


for (i = 0; i < 100; i++) {
    console.log(i)
}
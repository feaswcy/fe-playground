var fs = require('fs')
fs.readFile('./css/str.txt', 'utf8', (err, data) => {
    var output = data.replace(/,,/g, ',')

    console.log(output)
})
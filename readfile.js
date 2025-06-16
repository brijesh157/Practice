const fs = require('fs');

//Here, the path is given reference to the execution of file and not reference with current file.

fs.readFile('example.txt', 'utf8', (err, data) => {
    console.log(data);
})


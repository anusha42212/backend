const fs = require('fs');
fs.readFile('anusha.text', 'utf8', (err, data) => {
    if (err) throw err;//const fs = require('fs'); // Import fs module
    //fs.writeFileSync('notes.txt', 'I hate to code');
    //fs.writeFileSync('notes.txt', 'I  am good');
    
    console.log(data)
});

const path = require('path');
const filePath = '/home/user/docs/file.txt';
console.log(path.dirname(filePath)); 
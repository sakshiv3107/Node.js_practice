const fs = require('fs');

const rs = fs.createReadStream('./files/renamed_lorem.txt' , {encoding: 'utf8'});

const ws = fs.createWriteStream('./files/streamWrite.txt');

// rs.on('data' , (datachunk) =>{
//     ws.write(datachunk);
// })

rs.pipe(ws);
const EventEmitter = require('events');
const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const logEvents = require('./logEvent');

class Emitter extends EventEmitter{};

//initialize object

const myEmitter = new Emitter();

const PORT =  process.env.PORT || 3500;

const server = http.createServer(( req, res )=>{
    console.log(req.url , req.method);
    
    // let filePath;

    // if(req.url==='/' || req.url==='index.html'){
    //     res.statusCode = 200;
    //     res.setHeader('Content-type' , 'text/html');
    //     filePath=path.join(__dirname , 'views' , 'index.html');
    //     fs.readFile(filePath , 'utf-8' , (err,data) =>{
    //         res.end(data);
    //     });
    // }

    const extension = path.extname(req.url);
    let contentType;

    switch(extenion){
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';                        
    }

});

server.listen(PORT , ()=> console.log(
    `Server running on port ${PORT}`
)
);


// myEmitter.on('log' , (msg)=>logEvents(msg));

// setTimeout(()=> {
//     myEmitter.emit('log' , 'log Event emitted\n')
// }, 2000);

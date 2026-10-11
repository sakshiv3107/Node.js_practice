const fsPromises= require('fs').promises;

const console = require('console');
const path = require('path');

const fileOps = async() =>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname, '..' , 'files' , 'text.txt') , 'utf8');
        console.log(data);

        await fsPromises.writeFile(path.join(__dirname, '..' , 'files' , 'promiseWrite.txt') , data);
        await fsPromises.appendFile(path.join(__dirname, '..' , 'files' ,'promiseWrite.txt'), '\n\n Hello World!' );
        await fsPromises.rename(path.join(__dirname, '..' , 'files' , 'text.txt') , path.join(__dirname, '..' , 'files' , 'renamed_text.txt'));
        await fsPromises.unlink(path.join(__dirname, '..' , 'files' , 'starter.txt'));
    } catch(err){
        console.log(err);
    }
}
fileOps();

// fs.readFile(path.join(__dirname ,'..' ,'files' , 'lorem.txt') ,'utf8', (err , data) =>{
//     if(err) throw err;
//     console.log(data);
// })

//console.log("Reading file asynchronously...");

// fs.writeFile(path.join(__dirname ,'..' ,'files' , 'write.txt') , 'Hello, World!', (err) =>{
//     if(err) throw err;
//     console.log('Write complete');

//     fs.appendFile(path.join(__dirname ,'..' ,'files' , 'write.txt') , '\n\nAppend!', (err) =>{
//         if(err) throw err;
//         console.log('Append complete');

//         fs.rename(path.join(__dirname , '..','files','lorem.txt'), path.join(__dirname , '..','files','renamed_lorem.txt'), (err) => {
//             if(err) throw err;
//             console.log('File renamed');
//         });
//     })

// })

// fs.appendFile(path.join(__dirname ,'..' ,'files' , 'text.txt') , 'Append!', (err) =>{
//     if(err) throw err;
//     console.log('Append complete');
// })


process.on('uncaughtException', (err) => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1); //mandatory (as per the Node.js docs)
})
//console.log("Server is running on port 3000");


//Node.js is a global object instead of window object in browser. It is used to access the global variables and functions in Node.js. The global object is a special object that is available in all modules and can be used to store global variables and functions.
//console.log(global);

// The global object in Node.js is similar to the window object in browsers. It provides a way to access global variables and functions that are available throughout the application. Some commonly used properties of the global object include:
// __dirname: Returns the directory name of the current module.
// __filename: Returns the file name of the current module.

const os = require('os');
const path = require('path');
const math = require('./math');

console.log(math.add(2,3))

// console.log("Operating System Info:");
// console.log(os.type()); // Returns the operating system name
// console.log(os.platform()); // Returns the operating system platform
// console.log(os.version()); // Returns the operating system version
// console.log(os.homedir()); // Returns the home directory of the current user

// console.log(__dirname); // Returns the directory name of the current module
// console.log(__filename); // Returns the file name of the current module

// console.log(path.dirname(__filename)); // Returns the directory name of the current module
// console.log(path.basename(__filename)); // Returns the file name of the current module
// console.log(path.extname(__filename)); // Returns the file extension of the current module

// console.log(path.parse(__filename)); // Returns an object containing the directory name, file name, and file extension of the current module


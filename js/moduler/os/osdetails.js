//A Core module that contains os specific data
//console.log("First line in " + __filename);
//console.log("First line in osdetals.js");

const os = require('os');       //Core module


console.log('The operating system-specific end-of-line marker=' + os.EOL);          //Non visible. Actually the best to use to maintain platform independence.
console.log('Returns the operating system CPU architecture for which the Node.js binary was compiled=' + os.arch());          
console.log("Returns the string path of the current user's home directory=" + os.homedir());          
console.log("Returns the host name of the operating system=" + os.hostname());          
console.log("Returns the machine type=" + os.machine());          
console.log("Identifying the operating system platform for which the Node.js binary was compiled=" + os.platform());          
console.log("Operating system release=" + os.release());          
console.log("Operating system's default directory for temporary filese=" + os.tmpdir());          
console.log("Operating system name=" + os.type());          
console.log("Operating system release=" + os.version());          
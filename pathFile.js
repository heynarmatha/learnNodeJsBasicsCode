const path = require("path");
const pathObj = path.parse(__filename);
console.log(pathObj);

//output

// {
//     root: '/',
//     dir: '/Users/narmatha/Desktop/node/npm /learnNodeJsBasicsCode',
//     base: 'pathFile.js',
//     ext: '.js',
//     name: 'pathFile'
//   }

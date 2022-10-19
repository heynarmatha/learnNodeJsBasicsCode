const osObj = require("os");
const totalmem = osObj.totalmem();
const freemem = osObj.freemem();

console.log(`TotalMem : ${totalmem} , Freemem: ${freemem}`);

//output

//TotalMem : 8589934592 , Freemem: 183242752

const osObj = require("os");
const totalmem = osObj.totalmem();
const freemem = osObj.freemem();

console.log(`TotalMem : ${totalmem} , Freemem: ${freemem}`);

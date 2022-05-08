const os=require("os");
console.log("Total memory: ", os.totalmem());
console.log("Total memory: ", os.totalmem() / 1024 / 1024 / 1024);
console.log("Free memory: ", os.freemem() / 1024 / 1024 / 1024);
console.log("OS version: ", os.version());
console.log("CPU: ", os.cpus());
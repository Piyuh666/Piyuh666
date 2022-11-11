const JUGNU = require("./handlers/Client");
const { MTAyODE2MDQ2MDU1OTc2NTU2NQ.GHkbbg.p5RdAqMy-sevxPNVP4iWkfENczNNYBwAdIuqM4 } = require("./settings/config");
require("ffmpeg-static");
const client = new JUGNU();
module.exports = client;

client.start(MTAyODE2MDQ2MDU1OTc2NTU2NQ.GHkbbg.p5RdAqMy-sevxPNVP4iWkfENczNNYBwAdIuqM4);

process.on("unhandledRejection", (reason, p) => {
  console.log(" [Error_Handling] :: Unhandled Rejection/Catch");
  console.log(reason, p);
});

process.on("uncaughtException", (err, origin) => {
  console.log(" [Error_Handling] :: Uncaught Exception/Catch");
  console.log(err, origin);
});

process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log(" [Error_Handling] :: Uncaught Exception/Catch (MONITOR)");
  console.log(err, origin);
});

process.on("multipleResolves", (type, promise, reason) => {
  //   console.log(" [Error_Handling] :: Multiple Resolves");
  //   console.log(type, promise, reason);
});

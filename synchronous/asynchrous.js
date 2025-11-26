console.log("Begin");

setTimeout(() => {
  console.log("Timeout Task");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Task");
});

console.log("End");

// //output:
// Begin//no settimeout
// End//no settimeout
// Promise Task //it returns because it is called as a macro functions so executes before the event loops onlt
// Timeout Task //Even though we mention the 0's setTimeout also it the call stack's web considered it to wait 

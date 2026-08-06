/*1. Delayed Callback Execution

Write a JavaScript function that takes a callback and invokes it after a delay of 2 second. */
const cb = ()=>{
  console.log("i am a callback function");
}

function callback(cb){
  setTimeout(()=>{
    cb()
  },2000)
}

// callback(cb)


/*2. Callback to Promise Conversion

Write a JavaScript program that converts a callback-based function to a Promise-based function. */

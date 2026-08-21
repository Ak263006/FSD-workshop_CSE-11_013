console.log("This is the starting point of my code");
process.nextTick(()=>{                                 
  console.log("This is process.nextTick operation");     //cjs me proces pahle chalta hai and js me promise pahle chalega
});
setTimeout(()=>{
 console.log("This is first timeout operation");
    
},0);
console.log("This is end point of my code");
setTimeout(()=>{
    console.log("This is second tomeout operation");
    
},5000);
new Promise((resolve,reject)=>{
  let success=false;
  if(success)
    resolve("Data loaded successfully");
  else
    reject("Data loading failed");
})
  .then((message)=>{
   console.log(message);
  })
  .catch((message)=>{
  console.log(message);  
  });
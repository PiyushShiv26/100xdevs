//Async await

//(Again, just syntactic sugar. Still uses callbacks/Promises under the hood)

//Normal synatx
function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
      // do some async logic here
      resolve("hi there!")
    });
    return p;
  }
  
  function main() {
    kiratsAsyncFunction().then(function(value) {
        console.log(value);
    });
  }
  
main();

//Async await syntax
function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
      // do some async logic here
      resolve("hi there!")
    });
    return p;
  }
  
  async function main() {
    const value = await kiratsAsyncFunction();
    console.log(value);
  }
  
main();
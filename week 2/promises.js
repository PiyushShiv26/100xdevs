function myOwnSetTimeout(fn, duration) {
    setTimeout(fn, duration);
  }
  
myOwnSetTimeout(function() {
    console.log("log the first thing");
    myOwnSetTimeout(function() {
      console.log("log the second thing");
    }, 2000)
}, 1000)

//bad approach, could lead to callback hell

//using promises
function myOwnSetTimeout(duration) {
    let p = new Promise(function (resolve) {
      // after 1 second, call resolve
      setTimeout(resolve, 1000);
    });
    return p;
}
  
myOwnSetTimeout(1000)
    .then(function () {
      console.log("log the first thing");
    });

//using async await
function myOwnSetTimeout(duration) {
    let p = new Promise(function (resolve) {
      // after 1 second, call resolve
      setTimeout(resolve, 1000);
    });
    return p;
}
  
async function main() {
    await myOwnSetTimeout(1000)
    console.log("after")
}

main()
//Promises are syntactical sugar that make this code slightly more readable

const fs = require('fs');

// my own asynchronous function
function kiratsReadFile(cb) {
  fs.readFile("a.txt", "utf-8", function(err, data) {
    cb(data);
  });
}

function onDone(data) {
  console.log(data)
}

kiratsReadFile(onDone)

//This code is ugly and hard to read

//Promises are a way to make this code more readable

const fs = require('fs');

// my own asynchronous function
function kiratsReadFile() {
  return new Promise(function(resolve) {
    fs.readFile("a.txt", "utf-8", function(err, data) {
      resolve(data);
    });
  })
}

// callback function to call
function onDone(data) {
  console.log(data)
}

kiratsReadFile().then(onDone);

//Promises are a way to make this code more readable

let p = new Promise();
console.log(p);
//Error: Promise resolver undefined is not a function
//Promises need a function as an argument

let v = new Promise(function(resolve) {});
console.log(v);
//Promise { <pending> }
//This is a pending promise

let s = new Promise(function(resolve) {
  resolve("Success");
});

s.then(function() {
    console.log(s);
});


function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
      resolve("hi there");
    });
    return p;
  }
  
  const value = kiratsAsyncFunction();
  value.then(function(data) {
    console.log(data);
  });


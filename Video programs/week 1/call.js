function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
const nd = sum(1,2,displayResult);

function greet(){
    console.log("hi")
}
setTimeout(greet,4000)
setInterval(greet,1000)

/*
fs.readFile - to read a file from your filesystem
Fetch - to fetch some data from an API endpoint 
*/
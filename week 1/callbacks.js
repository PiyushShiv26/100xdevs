function sum(num1, num2,fnToCall) {
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
const ans = sum(10, 20, displayResult);
console.log(ans);


function calArith(a,b,type){
    let result = 0;
    if(type === 'add'){
        result = a + b;
    }else if(type === 'sub'){
        result = a - b;
    }else if(type === 'mul'){
        result = a * b;
    }else if(type === 'div'){
        result = a / b;
    }
    return result;
}


function greet(){
    console.log("Hello");
}

//setTimeout
setTimeout(greet, 2000);
//prints after 2 seconds

//setInterval
setInterval(greet, 2000);
//prints every 2 seconds
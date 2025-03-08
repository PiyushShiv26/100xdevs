function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumOfSomething(a,b,fn){
    let s1= fn(a);
    let s2= fn(b);
    return s1+s2;
}

let ans=sumOfSomething(1,2,square);
console.log(ans);

/*
const fs = require('fs');

fs.readFile("a.txt", "utf-8", function(err, data) {
  console.log(data);
});
*/
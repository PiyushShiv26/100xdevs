console.log('Hello World!');

var a = 1;
console.log(a);

a = 2;
console.log(a);

let b = 3;
console.log(b);

const c = 4;
c = 5;
console.log(c);//will print an error

let firstName = 'John';
let age = 25;
let isMarried = false;

console.log("this is " + firstName + " and he is " + age + " years old. Is he married? " + isMarried);

if (isMarried) {
    console.log(firstName + " is married!");
}
else {
    console.log(firstName + " is not married!");
}

//Loops
let ans = 0;
for (let i = 0; i < 10; i++) {
    ans += i;
}
console.log(ans);
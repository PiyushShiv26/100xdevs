// WAP to greet a person given their first and last name
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your first name: ', (firstName) => {
  rl.question('Enter your last name: ', (lastName) => {
    console.log(`Hello ${firstName} ${lastName}`);
    rl.close();
  });
});

//WAP that greets a pesron based on their gender (if else)
const readline = require('readline');

const rl1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl1.question('Enter your gender (M/F): ', (gender) => {
    if(gender === 'M') {
        console.log('Hello Sir');
    }
    else if(gender === 'F'){
        console.log('Hello Ma\'am');
    }
    rl1.close();
});

//WAP that counts from 0 - 1000 and prints (for loop)
let ans = 0;
for (let i = 0; i <= 1000; i++) {
    ans += i;
}
console.log(ans);
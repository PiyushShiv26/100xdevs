var a=1;
a=2;
console.log(a);

let nm = "harsh";
let age = 18;
let isMarried = false;

if (isMarried) {
    console.log(nm);
}
else {
    console.log(nm + " is married")
}

let answer=0;
for (let i=0; i<=100; i++) {
    answer +=i;
}
console.log(answer);

const ages = [21,22,23,24,36,29];
for (let i=0; i<ages.length;i++){
    if (ages[i]%2==0)
        console.log(ages[i]);
}

const u1= [1,2,3];
const u2= ["hari","eam"];

const allUsers = [{
    firstName: "hari",
    gender: "male"
},{
    firstName: "ram",
    gender: "male"
}]

for(let i=0; i<allUsers.length; i++){
    if(allUsers[i]["gender"]=="male")
        console.log(allUsers[i]["firstName"])
}

function sum(a, b){
    return a+b;
}
console.log(sum(3,5));
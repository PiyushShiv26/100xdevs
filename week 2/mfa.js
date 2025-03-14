//map, filter, arrow functions

//arrow
function sum1(a,b){
    return a+b;
}

const ans1 = sum(a,b);
console.log(ans1);

const sum2 = (a,b) => {
    return a+b;
};
const ans2 = sum(a,b);
console.log(ans2);

//map
//given an array, give me back a new array in which every element is doubled

const arr = [1,2,3,4,5];
const newArr = [];
for (let i = 0; i<arr.length; i++){
    newArr.push(arr[i]*2);
}
console.log(newArr);

//using map
const newArr2 = arr.map((element) => {
    return element*2;
});
console.log(newArr2);

//create a map function that takes 2 inputs an array and a transformation function and transforms the array into a new one using  the transformation function
function myMap(arr,transformation){
    const newArr = [];
    for (let i = 0; i<arr.length; i++){
        newArr.push(transformation(arr[i]));
    }
    return newArr;
}
const newArr3 = myMap(arr,(element) => {
    return element*2;
});
console.log(newArr3);


//filter
//given an array, give me back a new array in which only the even elements are present
const a = [1,2,3,4,5];
const b = [];
for (let i = 0; i<a.length; i++){
    if (a[i]%2 === 0){
        b.push(a[i]);
    }
}
console.log(b);

//using filter
const c = a.filter((element) => {
    return element%2 === 0;
});
console.log(c);

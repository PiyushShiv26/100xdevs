//Arrays

const pesron = ['John', 'David', 'Mike', 'Sam'];
console.log(pesron[0]);
console.log(pesron[1]);

//Objects
const person = {
    name: 'John',
    age: 20
};
console.log(person.name);
console.log(person.age); 

const allUsers = [
    {
        name: 'John',
        age: 20
    },
    {
        name: 'David',
        age: 21
    },
    {
        name: 'Mike',
        age: 22
    },
    {
        name: 'Sam',
        age: 23
    }
];
console.log(allUsers[0]['name']);
// [1,2,3] => arr[i]
// [{[{}]}] => arr[i][key]
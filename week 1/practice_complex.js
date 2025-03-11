// WAP to print all the even numbers in an array
const ages = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] % 2 === 0) {
        console.log(ages[i]);
    }
}
// WAP to print all the biggest numbers in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let biggest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
        biggest = numbers[i];
    }
}
console.log(biggest);

//WAP that prints all the male person's first name given a complex object
const users = [
    {
        name:
        {
            first: 'Jan',
            last: 'Doe'
        }, 
        gender: 'Female',
    },
    {
        name:
        {
            first: 'David',
            last: 'Smith'
        },
        gender: 'Male',
    },
    {
        name:
        {
            first: 'Michel',
            last: 'Johnson'
        },
        gender: Female,
    },
    {
        name:
        {
            first: 'Sam',
            last: 'Williams'
        },
        gender: Male,
    }
];
for (let i = 0; i < users.length; i++) {
    if (users[i].gender === 'Male') {
        console.log(users[i].name.first);
    }
}


//WAP that reverses all the elements of an array
const names = ['John', 'David', 'Mike', 'Sam'];
let reversed = [];
for (let i = names.length - 1; i >= 0; i--) {
    reversed.push(names[i]);
}
console.log(reversed);
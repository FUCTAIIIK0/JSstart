//Destruct


const user = {
    firstName: 'Denis',
    lastName: 'Mechnicov',
    age: 20,
    info: {
        work: 'Easycode',
        skills: ['html', 'css', 'java']
    }
};

// const firstName = user.firstName;
// const lastName = user.lastName;
// console.log(firstName, lastName); //Denis Mechnicov

// const {firstName:name, lastName, age = 30} = user;
// console.log(name, lastName, age); //Denis Mechnicov 20

//nested object
// const {info:{work,skills}} = user;
// console.log(work, skills);

//destruct array
// const colors = ['black','white','green','blue','orange','pink'];
// const [w,b,green,,orange] = colors;
// const [w1, ... otherColors] = colors;
// console.log(w1,otherColors); //black (5) ["white", "green", "blue", "orange", "pink"]
// console.log(w,b,green,orange);// black white green orange

//destruct nested array
// const nestedArr = ['Hello World',['nestedKey','nestedValue']];
// const [,[key,value]] = nestedArr;
// console.log(key,value) //nestedKey nestedValue

//copy object
// console.log(user);

// const newUser = {
//     ...user,
//     age: 30
// };
// console.log(newUser);

// const {
//     info: {
//         skills: [html, css]
//     }
// } = newUser;

// console.log(html, css);

// function myPerson({
//     lastName = '&',
//     firstName = '&',
//     info: {
//         skills
//     } = {}
// } = {}) {
//     console.log(lastName, firstName, skills);
// }

// myPerson(newUser);
// myPerson();

// function foo(x,y){
//     // console.log(arguments);
//     // console.log([].slice.call(arguments));
//     const [...args] = arguments;
//     console.log(args);
// }

// foo(1,2);

const numbers = [1,2,3];

function foo2(x, y) {
    console.log(x, y);
}

foo2(...numbers);//1 2
foo2(numbers); //(3) [1, 2, 3]0: 11: 22: 3length: 3__proto__: Array(0) undefined
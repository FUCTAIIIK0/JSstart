const users = [
  {
    _id:'0000',
    index: 0,
    isActive: false,
    balance: 2397.69,
    age: 19,
    name: 'Lucie finley',
    gender: 'female',
    company: 'ZOXY',
    email: 'luciefinley@zoxy.com',
    phone: '+1 (842) 566-3328',
    registred: '2015-07-12T09-39-03 -3:00'    
  },
  {
    _id:'1231',
    index: 1,
    isActive: false,
    balance: 2700.69,
    age: 39,
    name: 'Woodward Grimes',
    gender: 'male',
    company: 'FORTEAN',
    email: 'woodwardgrimes@zoxy.com',
    phone: '+1 (960) 436-3328',
    registred: '2014-09-12T09-39-03 -3:00'    
  },
  {
    _id:'1561',
    index: 2,
    isActive: true,
    balance: 2700.69,
    age: 22,
    name: 'Woodward Grimes',
    gender: 'male',
    company: 'FORTEAN',
    email: 'woodwardgrimes@zoxy.com',
    phone: '+1 (960) 436-3328',
    registred: '2014-09-12T09-39-03 -3:00'    
  },
  {
    _id:'23423',
    index: 3,
    isActive: true,
    balance: 9290.69,
    age: 26,
    name: 'Carl Corry',
    gender: 'male',
    company: 'FORTEAN',
    email: 'woodwardgrimes@zoxy.com',
    phone: '+1 (960) 436-3328',
    registred: '2014-09-12T09-39-03 -3:00'    
  }
]

//forEach
//filter
//map
//reduce
//some/every
//find
//sort


//forEach

// users.forEach((user1, i, arr) => {
//   console.log(user1,i,arr);
// })

// users.forEach((user1) => {
//   console.log(user1);
// })

//filter

// const usersLess30 = users.filter((user => user.age<30));//callback true
// console.log(usersLess30);
// const usersActive = users.filter((user => user.isActive));
// console.log(usersActive);

//Map
// const usersName = users.map((user) => ({name:user.name, age:user.age}));
// console.log(usersName);

//Reduce

// const totalBalance = users.reduce((acc, user) =>{
//     console.log(acc);
//     return (acc += user.balance);
// }, 0)

//console.log(totalBalance);

const userObj = users.reduce((acc, user) => {
  acc[user._id] = user;
  return acc;
},{})

//console.log(userObj);

//Some/Every
const isMale = users.some((user) => user.gender === 'male');
const isAllMale = users.every((user) => user.gender === 'male');
const isALL18 = users.every((user) =>user.age >18);

// console.log(isMale);
// console.log(isAllMale);
// console.log(isALL18);

//Find

const user = users.find(user => user.company === 'ZOXY');
//console.log(user);


//Sort

// const strArr = ['Denis','Bill','Anna'];
// strArr.sort();  //"Anna", "Bill", "Denis"]
// const numArr =[10,7,44,32];
// numArr.sort() //[10, 32, 44, 7]
// numArr.sort((prev,next) => prev-next)
// console.log(strArr);
// console.log(numArr); //[7, 10, 32, 44]


users.sort((prevUser, nextUser) =>prevUser.age - nextUser.age);
console.log(users);

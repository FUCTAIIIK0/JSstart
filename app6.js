//while, do while, for, for of, for in

//let i=0;
//while(i++<10){
//  console.log(i);  
//}

//do{
//  console.log(i);  
//} while(i<10){
//  i++;
//};

//  for (let i = 0; i<10; i++){
//    if(i ===5){
//       continue;
//    }
//    if(i===8){
//      break
//    }
//   console.log(i)
// }


//let str = 'Hello';
//let res = '';

//for(let i =0;i<str.length;i++){
//  console.log(str[i]);
//}

// let colors =['white','black','pink','grey','green'];
// for(let i =0;i<colors.length;i++){    
// console.log(colors[i]);
// }

// const users = [{
//   name: 'Denis',
//   age: 20
// },
// {
//   name: 'Igor',
//   age: 30
// },
// {
//   name: 'Vasya',
//   age: 27
// },
// {
//   name: 'Ildar',
//   age: 30
// }  
// ];

// const usersObj ={};

// for(let i=0;i<users.length;i++){
//   console.log(users[i].name);

//   usersObj[users[i].name] = users[i];
// }

// console.log(usersObj);

const user = {
  name: 'Denis',
  age: 30
};

for( let key in user){
  console.log(key);
  console.log(user[key]);
}
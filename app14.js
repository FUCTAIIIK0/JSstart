function sayHello (firstName ='default', lastName='default') {
    if(!firstName){
      return;      
    }
    //console.log(firstName,lastName);
    return `Hello ${firstName} ${lastName}`;
}

sayHello('Vasya','Pupkin');

let res;
//res = sayHello('Igor','Mechnicov');
//res = sayHello('Igor')
// res = sayHello()
// console.log(res);

// let x = 10;

// function foo(x){
//   x=20;
//   console.log(x)
//   }

// foo();

// console.log(x);


const square = function(x){
  return x*x;
};

// (function()){

// })()
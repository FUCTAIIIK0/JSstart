// function foo(){
//   console.log('Hello world');
// }

// foo();

// foo.field = 'Denis';

// console.log(foo.field);

 //const arr =['Denis','Ildar','Vasya','Olga'];

//5,5,5,4

// let newArr =[];

// for(let i =0; i<arr.length; i++ ){
//   newArr.push(arr[i].length);
// }

// console.log(newArr);

const names =['Denis','Ildar','Vasya','Olga'];

function mapArray(arr,fn){
  const res =[];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));    
  }
  return res;
}

function nameLenth(e1){
  //console.log(e1);
  return e1;
}

function nameToUpperCase(e1){
  return e1.toUpperCase();
}

const result = mapArray(names, nameLenth);
const result2 = mapArray(names, nameToUpperCase);


//console.log(result2);


function greeting(firstName){
  return function (lastName){
    return `Hello, ${firstName} ${lastName} `
  }
}


// const testGreeting = greeting('Denis');
// const fullName = testGreeting('Mechnicov')

const fullName = greeting('Den')('Mechnicov')

//console.log(fullName);

function question(job){
  const jobDictionary = {
      developer: 'что такое js',
      teacher: 'какой предмет?',
  }

  return function(name){
    return `${name}, ${jobDictionary[job]}`;
  };

  // if(job === 'developer'){
  //   return function(name){
  //     return `${name} что такое js?`;
  //   };

  //  } else if(job === 'teacher'){
  //     return `какой предмет вы ведете?`; 
  //   }
  
  }

  const developerQuestion = question(`teacher`);
  console.log(developerQuestion('de'))



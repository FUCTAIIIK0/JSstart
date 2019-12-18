//object copy

let obj1 = {
  name: 'Denis',
  info:{
    skills:['html','css'],
  },
};

let obj2 = {
  name:'Ivan',
  age: 20,
};

// let newObj = obj1; //link for obj1 in newobj

// console.log(newObj === obj1); //true

//assing
// let newObj = Object.assign(obj1, obj2); //name obj1 -> name obj2

// console.log(newObj);
// console.log(newObj === obj1); //false

// newObj = Object.assign({}, obj1);
// console.log(newObj.info === obj1.info); //true link for obj1.info in newobj.info


//deep object copy

//console.log(JSON.stringify(obj1))


// let newObj = JSON.parse(JSON.stringify(obj1));

// console.log(newObj)
// console.log(obj1)

// console.log(newObj.info === obj1.info); //false

//keys array
// let keys = Object.keys(obj2);
// console.log(keys);

//values array
// let values = Object.values(obj2);
// console.log(values)

//entris  array of array of keys and array of values
let entries = Object.entries(obj2);
console.log(entries);

//fromEntries

let fromEntries = Object.fromEntries([['a','value'], ['b','b_value']]);
console.log(fromEntries);
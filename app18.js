const plus = (x,y) => x+y;

// function plusFoo(x,y){
//   return x+y
// }

// console.log(plus(1,2));
// console.log(plusFoo(1,2));

const withoutArgs = () => console.log('Hello world');
const singlArg = x => x * 2;
const moreActions = (a, b) => {
    a *= 2;
    b *= 3;
    return a + b;
};
const returnObj = (str = '') => {
    return {value: str, lenth: str.length}
}

const returnObjSimple = (str = '') => ({value: str, lenth: str.length});


//console.log(singlArg(2))
//withoutArgs();

//console.log(returnObjSimple('hello')); 


function plusFoo(x,y){
  console.log(arguments);
  return x+y
}

//console.log(plusFoo(1,2,'das')); //Arguments(3) [1, 2, "das", callee: ƒ, Symbol(Symbol.iterator): ƒ]


const obj = {
    firstName: 'Denis',
    age: 30,
    getFirstName() {
        console.log(this);
    },
    getAgeArrow: null,
    getAge() {
        this.getAgeArrow = () => console.log(this);
        setTimeout(() => console.log(this))
    }
};

obj.getAge();
obj.getAgeArrow();
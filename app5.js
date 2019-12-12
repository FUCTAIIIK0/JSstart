let a = 1;
let b= 0;
let value;

b = a>0 ? b=a : b+=1;

console.log(b);

let color = 'white';

switch(color){
  case 'yellow':
    value = 'y';
    break;
  case 'black' :
    value = 'b'
    break;
  case 'white' :
    value = 'w'
    break;
  default:
    value ='default'  
}

console.log(value);
function getThis(){
  console.log(this)
}
// getThis();

// console.log(window.getThis);

function getPrice(currency= '$'){
  console.log(currency+this.price);
  return this;
}
function getName(){
  console.log(this.name);
  return this;
}

const prod1 = {
  name:'Intel',
  price:'100',
  getName(){
    console.log(this.name);
  },

  getPrice,
  info:{
    information:['2.3Ghz'],
    getInfo: function(){
      console.log(this);
    }
  }
};

const prod2 = {
  name:'AMD',
  price:'50',
  getPrice,
}

// prod1.getName();
// prod1.getPrice();
// prod1.info.getInfo();


// prod2.getName = prod1.getName;
// prod2.getName();
// prod2.getPrice();

// let str = 'Hello world';
// const reversStr = str
// .split('') //[1..n]
// .reverse() //[n..1]
// .join(''); // 'n..1'
// console.log(reversStr);

const prod3 = {
  name: 'ARM',
  price: 200,
  getPrice,
  getName,
};

// prod3.getName();
// prod3.getPrice();

// prod3
//     .getName()   //prod3
//     .getPrice(); //prod3.GetPrice()

//getPrice.call(prod3,'argument '); //prod3.GetPrice() //argument 200

//getPrice.apply(prod3,['argument ']); //prod3.GetPrice() //argument 200

const getPriceBind = prod3.getPrice.bind(prod3);
console.log(getPriceBind);

setTimeout(getPriceBind,1000); // delay 1 second



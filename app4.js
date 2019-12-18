let value;

value = 1 > 2;
value = 2 <= 2;
value = 1 == 1;
value = 1 == '1';
value = 1 == true;
value = 1 === '1';
value = 1 != '1';
value = 1 !== '1';
value = 'a' > 'a';
value = 'a' > 'A';
value = 'a' == 'ab';
value = 'a'.charCodeAt();

//console.log(3>2>1)

if (1 === 1) {
    value = 'equal';
} else {
    value = 'no equal';
}

value = null;
value = !null;

let serNickname = "ty";
value = serNickname || 'default nikname'

let number = undefined;
if (number < 100) {
    console.log('<100')
} else if (number > 50) {
    console.log('>50')
} else {
    console.log('else')
}

console.log(value);
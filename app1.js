const firstName = 'Denis';
const lastName = 'Pupkin';
const age = 30;
const str = "Hello my name is Vasya Pupkin";

let value;

value = firstName + ' ' + lastName;
value += ' I am ' + age

value = firstName.toUpperCase();

value = firstName.concat(' ', lastName)

value = str.indexOf('n')
value = str.indexOf('Vasya')
value = str.includes('Vasya')

value = str.slice(str.indexOf('my'), str.indexOf('Vasya'))

value = str.replace('Vasya', 'Petya');

console.log(value + ' ' + str);
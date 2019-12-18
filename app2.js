const firstName = 'Denis';
const lastName = 'Pupkin';
const age = 30;

let str;

str = firstName + " " + lastName;

str = '<ul><li> First name' + firstName + '</li><li> Last name' +
        lastName + '</li><li> Age' + age + '</li></ul>';

console.log(str);

//ES6
str = `
  <ul>
    <li> first name: ${firstName}</li>
    <li> last name: ${lastName}</li>
    <li> age: ${age}</li>
    <li> Math.random: ${Math.random() * 10}</li>

  </ul>
`;

document.body.innerHTML = str;

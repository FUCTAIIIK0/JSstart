const user = {
    firstName: 'Denis',
    age: 30,
    isAdmin: true,
    email: 'test@test.com',
    'user-address': {
        city: 'Moscow'
    },
    skills: ['html', 'css', 'js']
};

let value;

let prop = 'email';
prop = 'skills';

value = user.firstName;
value = user['isAdmin'];
value = user['user-address'];
value = user['user-address'].city;
value = user['user-address']['city'];
value = user[prop][0];

user.firstName = 'Den';

user.info = 'Some info';
value = user.info;

user['user-address'].city = 'Kiev';
user['user-address'].country = 'Russia';

console.log(value)
console.log(user)
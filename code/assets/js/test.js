import { user_admin } from './user.js';
var user = []
if (localStorage.getItem('user')) {
    user = JSON.parse(localStorage.getItem('user'));
}
user = user.concat(user_admin);
var userNew = {
    id: 1,
    name: '',
    email: '',
    phone: '',
    password: '',
    role: '',
    status: ''
};
console.log(user);
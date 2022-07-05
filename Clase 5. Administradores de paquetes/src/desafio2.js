import moment from 'moment';

let today = moment();
let birthday = moment('1996-07-13');


console.log(`Hoy es  ${today.format('DD/MM/YYYY')}`)

console.log(`Desde mi nacimiento han pasado ${today.diff(birthday,'days')} días`);
console.log(`Desde mi nacimiento han pasado ${today.diff(birthday,'years')} años`);
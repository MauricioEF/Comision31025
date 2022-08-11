import options from "./options/mysql.js";
import knex from 'knex';

const database = knex(options);

const cars = [
    { name: "lambo", price: 123123 },
    { name: "ferrari", price: 223 },
    { name: "porche", price: 1323 },
    { name: "chevrolet", price: 125 },
    { name: "volkswagen", price: 1211113 }
]
database('cars').insert(cars).then(result=>console.log(result)).catch(console.log).finally(()=>database.destroy());
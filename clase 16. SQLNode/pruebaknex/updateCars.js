import options from "./options/mysql.js";
import knex from 'knex';

const database = knex(options);

database('cars').where('price','<','125').update({price:150000}).then(()=>console.log("Updated"))
.catch(console.log).finally(()=>database.destroy());
import options from "./options/mysql.js";
import knex from 'knex';

const database = knex(options);


database('cars').where('price','<',1000).del()
.then(()=>console.log("Deleted"))
.catch(console.log)
.finally(()=>database.destroy());
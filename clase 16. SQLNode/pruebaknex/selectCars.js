import options from "./options/mysql.js";
import knex from 'knex';

const database = knex(options);


database('cars').select('price').then(result=>console.log(JSON.parse(JSON.stringify(result)))).catch(error=>console.log(error)).finally(()=>database.destroy());
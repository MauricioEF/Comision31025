import options from './options/mysql.js';
import knex from 'knex';

const database = knex(options);
database.schema.createTable('cars',table=>{
    table.primary('id');
    table.increments('id'); // id AUTO_INCREMENT
    table.string('name',30); // name VARCHAR(30)
    table.float('price'); //price FLOAT
}).then(()=>console.log("Table created")).catch(err=>console.log(err))
.finally(()=>database.destroy());
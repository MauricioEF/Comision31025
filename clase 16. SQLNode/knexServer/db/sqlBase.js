import knex from 'knex';

const mysqloptions = {
    client:'mysql',
    connection:{
        host:'127.0.0.1',
        user:'root',
        password:'',
        database:'base_knex'
    }
}
const sqliteOptions ={
    client:'sqlite3',
    connection:{
        filename:'./sqliteDatabase.sqlite'
    },
    useNullAsDefault:true
}
let db = knex(sqliteOptions)
try{
    let exists = await db.schema.hasTable('pets');
    if(exists){
        // await db('pets').del();
    }
    else{
        await db.schema.createTable('pets',table=>{
            table.primary('id');
            table.increments('id');
            table.string('name',30).nullable(false);
            table.string('specie',20);
            table.integer('age');
        })
    }
}catch(error){
    console.log(error);
}
export default db;
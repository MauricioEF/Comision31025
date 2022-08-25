import admin from 'firebase-admin'; 
import firebaseConfig from './firebasekeytest.json' assert {type:"json"}
import fs from 'fs';

admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
    databaseURL:'https://pruebadefirebaseconquesito.firebaseio.com'
})

const environment = async() =>{
    // let data = await fs.promises.readFile('./firebasekeytest.json','utf-8');
    // const firebaseConfig = JSON.parse(data)
    // console.log(firebaseConfig);
    const database = admin.firestore();
    const query = database.collection('usuarios');
    //Create
    // let doc = query.doc();
    // await doc.create({nombre:"Manuel",dni:3140198});

    try{
            //Read
        // const snapShot = await query.get();
        // // console.log(snapShot);
        // let docs = snapShot.docs;
        // // console.log(docs);
        // const response = docs.map(doc=>({
        //     id:doc.id,
        //     name:doc.data().nombre,
        //     dni:doc.data().dni
        // }))
        // console.log(response);
        //GET BY ID
        // let id = "jFkv86KSjQBhFFNhBF9r";
        // const doc = query.doc(id);
        // const item = await doc.get();
        // const obj = item.data();
        // console.log(obj);
        
        //UPDATE
        // let id = "jFkv86KSjQBhFFNhBF9r";
        // const doc = query.doc(id);
        // let item = await doc.update({dni:11111111111});
        // console.log(item);

        //DELETE
        // let id = "jFkv86KSjQBhFFNhBF9r";
        // const doc = query.doc(id);
        // let result = await doc.delete();

    }catch(error){
        console.log(error);
    }
}
environment();
const fs = require('fs')

const proceso = async() =>{
    try{
        await fs.promises.writeFile('archivoPromesa.txt','hola desde promises');
        let content = await fs.promises.readFile('archivoPromesa.txt','utf-8');
        console.log(content);
    }catch(error){
        console.log(error);
    }
}

proceso();
const fs = require('fs');

let process = async() =>{
    try{

        let content = await fs.promises.readFile('package.json','utf8')
        let objeto = JSON.parse(content)
        objeto.name="Papa";
        await fs.promises.writeFile('package.json',JSON.stringify(objeto,null,'\t'));
    }catch(error){
        console.log(error);
    }
}

process();
const fs = require('fs');

const path = "src/files/pets.json"
class PetManager {//class contenedora.
    //NO TODAS LAS CLASES NECESITAN UN CONSTRUCTOR
    getAllPets = async() =>{
        try{
            if(fs.existsSync(path)){
                let fileData = await fs.promises.readFile(path,'utf8')
                let pets = JSON.parse(fileData);
                return pets;
            }else{
                return [];//There are no pets
            }
        }catch(error){
            console.log("Cannot read File: "+error)
        }
    }
    addPet = async(pet) =>{
        try{
            let pets = await this.getAllPets();
            if(pets.length===0){//There are no pets
                pet.id=1;
                pets.push(pet);
                await fs.promises.writeFile(path,JSON.stringify(pets,null,'\t'));
            }else{//There are more pets
                pet.id = pets[pets.length-1].id+1;
                pets.push(pet);
                await fs.promises.writeFile(path,JSON.stringify(pets,null,'\t'));
            }
        }catch(error){
            console.log("Cannot write file: "+error)
        }
    }
}

module.exports = PetManager;
//1 instancia sirve para gestionar Múltiples pets
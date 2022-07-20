import fs from 'fs';
import __dirname from '../utils.js';

export default class PetManager {
    constructor(){
        this.path = __dirname+'/files/pets.json';
    }
    getAll = async() =>{
        if(fs.existsSync(this.path)){
            let result = await fs.promises.readFile(this.path,'utf-8');
            return JSON.parse(result);
        }
        else{
            return []
        }
    }
    createPet = async(pet) =>{
        let pets = await this.getAll();
        if(pets.length===0){
            pet.id=1;
            pet.isAdopted = false;
            pets.push(pet);
            await fs.promises.writeFile(this.path,JSON.stringify(pets,null,'\t'));
        }
        else{
            pet.id = pets[pets.length-1].id+1;
            pet.isAdopted = false;
            pets.push(pet);
            await fs.promises.writeFile(this.path,JSON.stringify(pets,null,'\t'));
        }
    }
}
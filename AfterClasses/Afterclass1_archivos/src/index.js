const PetManager = require('./managers/petManager.js')
//Importar la clase, NO SIGNIFICA INSTANCIARLA

const petService = new PetManager();
const environment = async() =>{
    console.log("Getting pets");
    let pets = await petService.getAllPets();
    console.log(pets);//Empty

    console.log("Adding a pet");
    let pet ={
        name:"canas",
        specie:"rabbit"
    }
    await petService.addPet(pet);
}


environment();
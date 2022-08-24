
const persistence = "MONGUITOCONQUESOPORFAVOR";
let usersService;
switch(persistence){
    case "MEMORY":
        const {default:MemUser} = await import('./MemoryDAO/Users.js');
        usersService = new MemUser();
        break;
    case "MONGUITOCONQUESOPORFAVOR":
        const {default:MongoUser} = await import('./MongoDAO/Users.js');
        usersService = new MongoUser();
        break;
}

const services = {
    usersService,
}

export default services
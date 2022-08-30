import MemoryContainer from './MemoryContainer.js';
import faker from 'faker';

export default class Users extends MemoryContainer{
    constructor(){
        super();
    }
    populate = (quantity=100) =>{
        for(let i=0;i<quantity;i++){
            this.data.push({
                name:faker.name.firstName(),
                last_name:faker.name.lastName(),
                email:faker.internet.email()
            })
        }
        return true;
    }
}
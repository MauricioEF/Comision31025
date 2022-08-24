export default class MemoryContainer{
    constructor(){
        this.data = []
    }
    getAll = () =>{
        return this.data;
    }
    save = (element) =>{
        this.data.push(element);
        return element;
    }
}
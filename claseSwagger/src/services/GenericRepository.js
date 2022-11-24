export default class GenericRepository {
    constructor(dao,model) {
        this.dao = dao;
        this.model = model;
    }

    get = (params) =>{
        return this.dao.getAll(params,this.model);
    }
    getBy = (params) =>{
        return this.dao.getBy(params,this.model);
    }
    save = (doc) =>{
        return this.dao.save(doc,this.model);
    }
}
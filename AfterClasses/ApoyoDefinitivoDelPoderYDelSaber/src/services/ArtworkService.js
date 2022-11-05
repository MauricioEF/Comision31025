
export default  class ArtworkService {
    constructor(dao) {
        this.dao = dao;
    }

    getArtworks = async() =>{
        let result =  await this.dao.getAll();
        return result.map(artwork=>artwork.toObject()); 
    }

    getArtworkById = async(id) =>{
        let result = await this.dao.getById(id);
        return result.toObject();
    }
    createArtwork = artwork =>{
        return this.dao.save(artwork);
    }

    updateArtwork = (id,artwork) =>{
        return this.dao.update(id,artwork);
    }
}
import mongoose from 'mongoose';

export default class Gallery {

    static get model() {
        return 'Galleries'
    }

    static get schema() {
        return {
            artworks: [
                {
                    artwork:{
                        type:mongoose.SchemaTypes.ObjectId,
                        ref:'Artworks'
                    }
                }
            ]
        }
    }
}

export default class Artwork {
    static get model() {
        return "Artworks"
    }

    static get schema() {
        return {
            title:String,
            description:String,
            author:String,
            price:Number,
            copies:Number,
            creationDate:Date,
            image:String
        }
    }
}
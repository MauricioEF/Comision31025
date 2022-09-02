import mongoose from 'mongoose';

const collection = 'Users';
const schema = new mongoose.Schema({
    name: String,
    email: String,
    pets: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Pets'
        }
    ],
    books: [
        {
            book: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Books'
            },
            quantity: Number
        }
    ]
})

const usersService = mongoose.model(collection, schema);

export default usersService;
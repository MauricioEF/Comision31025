import mongoose from 'mongoose';
import booksService from './models/Books.js';
import petService from './models/Pets.js';
import usersService from './models/Users.js';

const connection = mongoose.connect('mongodb+srv://CoderUser:123@codercluster.w5adegs.mongodb.net/afterBase?retryWrites=true&w=majority')

const environment = async() =>{
    // const result = await usersService.insertMany([
    //     {name:"Mauricio",email:"correomau@correo.com",pets:[]},
    //     {name:"Diego",email:"corrediego@correo.com",pets:[]}
    // ])
    // const resultPets = await petService.insertMany([
    //     {name:"Patas",specie:"fish"},
    //     {name:"Orejas", specie:"bird"}
    // ])
    // console.log('Users ->',result);
    // console.log('Pets ->',resultPets);

    //Adopción
    let user = await usersService.findById("631206e9121611b63778e491").populate('pets').populate('books.book');
    // let pet = await petService.findById("631206eb121611b63778e495").populate('owner');

    console.log('User ->',user);
    // console.log('Pet ->',pet);
    // let result = await booksService.create({title:"libro1",author:"autor"})
    // console.log(result);
    // Update al user
    // user.pets.push(pet._id);
    // await usersService.updateOne({_id:user._id},{$set:user});
    // Update a la pet
    // pet.adopted=true;
    // pet.owner= user._id;
    // await petService.updateOne({_id:pet._id},{$set:pet});

    // user.books.push({book:"63120e76b9b7f43657c37800",quantity:2});
    // await usersService.updateOne({_id:user._id},{$set:user});
    mongoose.disconnect();
}

environment();
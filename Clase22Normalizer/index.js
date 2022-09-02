import  { normalize, schema } from 'normalizr';

const blogpost = {
    id:"1",
    title:"Normalizr en la semana chill",
    description:"Un tema más para pasar chill la semanita :)",
    content:"ñaklsdñlaksñdlkañsldkñasdklñaslkd{ñaskld{ñalksd{ñlakdsfad",
    author:{
        id:"1",
        name:"John Doe"
    },
    comments: [
            {
                id:"1",
                author:{
                    id:"2",
                    name:"Paco Jones"
                },
                content:"¡Odio normalizr!"
            },
            {
                id:"2",
                author:{
                    id:"1",
                    name:"John Doe"
                },
                content:"Ya sé :( Pero es un tema chill"
            },
            {
                id:"3",
                author:{
                    id:"3",
                    name:"Esteban Dido"
                },
                content:"Buen post :)"
            },
            {
                id:"4",
                author:{
                    id:"1",
                    name:"John Doe"
                },
                content:"Gracias, Esteban! :)"
            },
            {
                id:"5",
                author:{
                    id:"1",
                    name:"John Doe"
                },
                content:"Gracias, Esteban! :)"
            },
            {
                id:"6",
                author:{
                    id:"1",
                    name:"John Doe"
                },
                content:"Gracias, Esteban! :)"
            },
            {
                id:"7",
                author:{
                    id:"1",
                    name:"John Doe"
                },
                content:"Gracias, Esteban! :)"
            },
            {
                id:"8",
                author:{
                    id:"1",
                    name:"John Doe"
                },
                content:"Gracias, Esteban! :)"
            },
            {
                id:"9",
                author:{
                    id:"1",
                    name:"John Doe"
                },
                content:"Gracias, Esteban! :)"
            },
            {
                id:"10",
                author:{
                    id:"1",
                    name:"John Doe"
                },
                content:"Gracias, Esteban! :)"
            }
    ]
}
//Entities
const author = new schema.Entity('authors');
const comment = new schema.Entity('comments',{
    author:author
})
const blog = new schema.Entity('posts',{
    author:author,
    comments: [comment]
})

const normalizedData = normalize(blogpost,blog);

console.log(JSON.stringify(blogpost).length);
console.log(JSON.stringify(normalizedData).length);
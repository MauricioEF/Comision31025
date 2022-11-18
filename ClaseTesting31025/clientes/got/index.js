import got from 'got';

const request = async() =>{
    const response = await got('http://localhost:8080/api/users');
    console.log(response.body);
}

// const request = async() =>{
//     const user ={
//         name:"Juanito2",
//         email:"correojuan2@correo.com",
//         password:"123"
//     }
//     const response = await got.post('http://localhost:8080/api/users',{
//         body:JSON.stringify(user),
//         headers:{
//             "Content-Type":'application/json'
//         }
//     })
//     console.log(response.body);
// }

request();
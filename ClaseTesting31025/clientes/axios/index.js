import axios from 'axios';

// const request = async() =>{
//     const result = await axios.get('http://localhost:8080/api/users');
//     console.log(result.data);
// }

// const request = async() =>{
//     const user = {
//         name:"Mau2",
//         email:"correomau2@correo.com",
//         password:"123"
//     }
//     // const response = await axios.post('http://localhost:8080/api/users',user)
//     const response = await axios('http://localhost:8080/api/users',{
//         method:'post',
//         data:user
//     })
//     console.log(response.data);
// }

const getPrimeraPeticion = () =>{
    return axios.get('http://localhost:8080/peticion1');
}
const getSegundaPeticion = () =>{
    return axios.get('http://localhost:8080/peticion2');
}

Promise.all([getPrimeraPeticion(),getSegundaPeticion()])
.then(results =>{
    const response1 = results[0].data;
    const response2 = results[1].data;
    console.log(response1);
}).catch(error)
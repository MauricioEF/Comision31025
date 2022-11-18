import Supertest from 'supertest';
import Chai from 'chai';

const expect = Chai.expect;
const requester = Supertest('http://localhost:8080');

describe('Users testing', () => {
    describe('GETS', () => {
        it('La petición base debe retornar 200',async()=>{
            let response = await requester.get('/api/users')
            expect(response.status).to.be.equal(200)
        })
        it('La petición base debe retornar un arreglo de usuarios',async ()=>{
            const response = await requester.get('/api/users');
            const {_body} = response;
            expect(_body.payload).to.be.an('array')
        })
    })
    describe('POSTS', () => {
        it('Debería poder crear un usuario', async()=>{
            const  password = "123"
            let user = {
                name:'Diego',
                email:'correoDiego@correo.com',
               password
            }
            const response = await requester.post('/api/users').send(user);
            const {_body} = response;
            console.log(_body);
            expect(_body.payload).to.include.keys('password','_id')
        })
    })
})
import http from 'http';

const options = {
    hostname: "localhost",
    port: 8080,
    path: '/',
    method: 'GET'
}

const request  = http.request(options,res=>{
    
    res.on('data',data =>{
        process.stdout.write(data);
    })
})

request.end();
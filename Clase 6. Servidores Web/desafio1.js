const http = require('http');

const server = http.createServer((request,response)=>{
    let currentHour = new Date().getHours();
    if(currentHour>=6&&currentHour<=12) response.end("Buenisimos dias");
    if(currentHour>=13&&currentHour<=19) response.end("Buenos tardes");
    if(currentHour>=20||currentHour<=5) response.end("Buenas nochecitas");
})

const connectedServer = server.listen(8080,()=>{
    console.log("Listening on PORT 8080")
})
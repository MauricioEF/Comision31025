const socket = io();
const chatbox = document.getElementById('chatbox');

chatbox.addEventListener('keyup',(evt)=>{
    if(evt.key==="Enter"){
        socket.emit('message',chatbox.value)
        chatbox.value="";
    }
})

socket.emit('saludo',{
    user:"Mauricio",
    message:"Hola"
})

//Listeners
socket.on('perros',data=>{
    console.log(data);
})

socket.on('log',data=>{
    console.log(data);
})
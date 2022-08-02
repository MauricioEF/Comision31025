let user;
let socket= io({
    autoConnect:false
})
let chatBox = document.getElementById('chatBox');
Swal.fire({
    title: "Identifícate",
    input: "text",
    text: "Ingresa el usuario para identificarte en el chat",
    inputValidator: (value) => {
        return !value && '¡Necesitas escribir un nombre de usuario para continuar!'
    },
    allowOutsideClick: false
}).then(result => {
    socket.connect()
    user = result.value
});

chatBox.addEventListener('keyup', evt => {
    if (evt.key === "Enter") {
        if (chatBox.value.trim().length > 0) {
            socket.emit("message", { user: user, message: chatBox.value });
            chatBox.value = "";
        }
    }
})

socket.on('newConnection', data => {
    if (user) {
        Swal.fire({
            text: "Nuevo usuario conectado",
            toast: true,
            position: "top-right"
        })
    }
});

socket.on('log',data=>{
    let log = document.getElementById('log');
    let messages = "";
    data.forEach(message=>{
        messages = messages+`${message.user} dice: ${message.message}</br>`
    })
    log.innerHTML = messages;
})
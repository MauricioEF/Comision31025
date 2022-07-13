import express from 'express';

const app = express();
const server =app.listen(8080,()=>console.log("Listening on 8080"))



let sentence = "Hola mundo cómo están";

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/api/frase',(req,res)=>{
    res.send({sentence})
})

app.get('/api/letras/:num',(req,res)=>{
    if(isNaN(req.params.num)) return res.status(400).send({error:"El valor no es numérico"});
    if(parseInt(req.params.num)<1||parseInt(req.params.num)>sentence.length) return res.status(404).send("No hay letra con este índice");
    let num = parseInt(req.params.num);
    res.send({letter:sentence.charAt(num-1)})
})

app.get('/api/palabras/:pos',(req,res)=>{
    let {pos} = req.params;
    if(isNaN(req.params.pos)) return res.status(400).send({error:"El valor no es numérico"});
    if(parseInt(req.params.pos)<1||parseInt(req.params.pos)>sentence.split(' ').length) return res.status(404).send("No hay palabra con este índice");
    res.send({word:sentence.split(' ')[parseInt(req.params.pos)-1]})
})

app.post('/api/palabras',(req,res)=>{
    let newWord = req.body.word;
    sentence = sentence.concat(` ${newWord}`)
    res.send({added:newWord})
})

app.put('/api/palabras/:pos',(req,res)=>{
    let newWord = req.body.word;
    if(isNaN(req.params.pos)) return res.status(400).send({error:"El valor no es numérico"});
    if(parseInt(req.params.pos)<1||parseInt(req.params.pos)>sentence.split(' ').length) return res.status(404).send("No hay palabra con este índice");
    let newSentence = sentence.split(' ');
    let oldWord = newSentence[parseInt(req.params.pos-1)];
    newSentence[parseInt(req.params.pos)-1] = newWord;
    sentence = newSentence.join(" ");
    res.send({previous:oldWord,new:newWord})
})


app.delete('/api/palabras/:pos',(req,res)=>{
    if(isNaN(req.params.pos)) return res.status(400).send({error:"El valor no es numérico"});
    if(parseInt(req.params.pos)<1||parseInt(req.params.pos)>sentence.split(' ').length) return res.status(404).send("No hay palabra con este índice");
    let newSentence = sentence.split(' ');
    newSentence.splice(parseInt(req.params.pos)-1,1);
    sentence = newSentence.join(" ");
    res.send({message:"word deleted"})
})

//ENDPOINTS DE EJEMPLOS DE USUARIO
// app.get('/users',(req,res)=>{
//     //Trae todos los users
//     res.send({users})
// })


// app.get('/users/:userId',(req,res)=>{
//     console.log(req.params);
//     let id = req.params.userId
//     res.send(users[id-1])
// })
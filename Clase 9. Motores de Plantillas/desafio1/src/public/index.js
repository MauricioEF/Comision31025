const template = Handlebars.compile(`<ul>
<li>{{nombre}}</li>
<li>{{apellido}}</li>
<li>{{edad}}</li>
<li>{{mail}}</li>
<li>{{telefono}}</li>
</ul>`)
const htmlFinal = template({
    nombre:"Mauricio",
    apellido:"Espinosa",
    edad:25,
    mail:"correoMauricio@correoso.com",
    telefono:"123123123"
})

document.getElementById('data').innerHTML=htmlFinal;
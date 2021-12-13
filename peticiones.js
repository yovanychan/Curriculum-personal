const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')// motor de plantillas
app.set('views',__dirname + '/views') // para invocar la ubicación del archivo views

app.use(express.static(__dirname + "/public" ))

app.get('/',(req,res)=>{
    res.render("index",{
        titulo : "Principal"
    })
})

app.get('/datosPersonales',(req,res)=>{
    res.render("datosPersonales",{
        titulo : "Datos personales"
    })
})

app.get('/contactanos',(req,res)=>{
    res.render("contactanos",{
        titulo : "Contáctanos"
    })
})

app.get('/niveleEstudio',(req,res)=>{
    res.render("niveleEstudio",{
        titulo : "Nivel de estudio"
    })
})

app.get('/ExperienciaLaboral',(req,res)=>{
    res.render("ExperienciaLaboral",{
        titulo : "Experiencia laboral"
    })
})

app.get('/idiomaDomina',(req,res)=>{
    res.render("idiomaDomina",{
        titulo: "Idiomas que se dominan"
    })
})

app.get('/equipoDomina',(req,res)=>{
    res.render("equipoDomina",{
        titulo: "Equipos que se dominan"
    })
})

app.listen(port,()=>{
    console.log('Servidor',port)
}) 
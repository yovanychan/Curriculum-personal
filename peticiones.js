const express = require ('express')
const app = express()
const port = 3000

app.set('view engine','ejs')// motor de plantillas
app.set('views',__dirname + '/views') // para invocar la ubicación del archivo views

app.use(express.static(__dirname + "/public"))

app.get('/',(req,res)=>{
    res.render("index",{
        titulo: "Página de inicio"
    })
})



app.listen(port, () =>{
    console.log('Servidor',port)
})
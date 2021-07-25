const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
// const path = require('path')
// const http = require('http')
// const socketIO=require('socket.io')

const app=express()
const port = process.env.PORT || 3000
const uri= 'mongodb://localhost:27017/db1'

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// base de datos //


mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log(e))

// motor de plantilla //

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

// rutas web //

app.use('/' , require('./router/RutasWeb'));

const server = app.listen(port,()=>{
    console.log('server on', port)
})







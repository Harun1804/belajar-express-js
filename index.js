const express = require('express')
const idealRouter = require('./Routes/Rideal')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const methodOverride = require('method-override')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

var myLogger = function(req,res,next){
	req.time = new Date()
	next()
}

mongoose.connect('mongodb://localhost/bbideal',{useNewUrlParser : true,useUnifiedTopology:true})

app.use(myLogger)

app.set('view engine','ejs')

app.use(methodOverride('_method'))

app.get('/',(req,res) => {
	res.render('index')
})

app.use(idealRouter)

app.listen(port, () => {
	console.log(`Server Berhasil Dijalankan Pada http://localhost:${port}`)
})
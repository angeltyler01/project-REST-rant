require('dotenv').config()

// require express
const express = require('express')

//require method override
const methodOverride = require('method-override')

//initialize express
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//import router from places.js
app.use('/places', require('./controllers/places'))

//creating homepage route
app.get('/', (req,res) => {
    res.render('Home')
})

//Wildcard route
app.get('*', (req, res) => {
    res.render('error404')
})

//listen for connections
app.listen(process.env.PORT)
require('dotenv').config()

// require express
const express = require('express')

//initialize express
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//import router from places.js
app.use('/places', require('./controllers/places'))

//creating homepage route
app.get('/', (req,res) => {
    res.render('Home')
})

//Wildcard route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

//listen for connections
app.listen(process.env.PORT)
require('dotenv') .config()

// require express
const express = require('express')

//initialize express
const app = express()

//creating homepage route
app.get('/', function(req,res) {
    res.send('Welcome')
})

//Wildcard route
app.get('*', (req, res) =>{
    res.status(404) .send('<h1>404 Page</h1>')
})

//listen for connections
app.listen(process.env.PORT)
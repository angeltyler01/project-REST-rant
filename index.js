// require express
const express = require('express')

//initialize express
const app = express()

//creating homepage route
app.get('/', function(req,res) {
    res.send('Welcome')
})

//listen for connections
app.listen(4000)
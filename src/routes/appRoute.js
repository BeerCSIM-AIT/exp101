const express = require('express');
const app = express.Router();
const AppController = require("../controllers/appController");
//Routing Table
//  /     => home()       => Controller  
//  /login => login()

app.get('/',(req, res)=>{
    res.send("Hello from root!");
});

app.get('/login', AppController.login);

app.post('/register', AppController.register);

app.get('/product/:id', AppController.getProduct);

module.exports = app;
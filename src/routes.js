const express = require('express');
const routes = express.Router();

//Rotas
routes.get('/', (req, res) =>{
    // Product.create({
    //     title: "React Native",
    //     description: "Build a native apps with React",
    //     url: "http://github.com/facebook/react-native"
    // });

    res.send("Hello World");
});

module.exports = routes;

const { log } = require('console');
const express = require('express');
const { get } = require('http');



const app = express();

app.get('/', (req, res) => {

    console.log('I wanna sleepz');
});

app.get('/about', (req, res) => {
    console.log('msh fahim 7aga');
})


app.listen(3000);
console.log("Yahia");
console.log("Bassel");

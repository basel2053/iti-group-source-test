const express = require('express');

const app = express();

app.get('/', (req, res) => {
	console.log('I wanna sleepz');
});
app.listen(3000);
console.log('YahiA');
console.log('Bassel');

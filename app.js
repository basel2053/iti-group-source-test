const express = require('express');

const app = express();

app.get('/', (req, res) => {
	console.log('i wanna sleep');
});

app.listen(3000);

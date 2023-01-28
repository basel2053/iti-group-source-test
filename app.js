const express = require("express");

const app = express();

app.get('/', (req, res) => {
	console.log('I wanna sleepwz');
});
app.listen(3000);
console.log("Yahia");
console.log("Bassel");

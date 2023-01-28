require('express');


const app = express();

app.get('/', (req, res)=>{
    console.log("Fatma");
})

app.listen(3000);
console.log("Yahia");

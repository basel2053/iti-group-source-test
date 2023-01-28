require('express');


const app = express();

app.get('/', (req, res)=>{
    console.log("Fatma");
})
app.delete('/:id', (req, res)=>{
    console.log("delete - Fatma");
})

app.listen(3000);

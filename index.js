import express from 'express';
import axios from 'axios';



const app=express();
const port=3001;


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', async (req,res)=>{
    try{
        const result=await axios.get('https://v2.jokeapi.dev/joke/Any?safe-mode');
        res.render('index.ejs',{
            joke1:result.data.setup,

            joke2:result.data.delivery
            
        });
    }catch(error){
        console.log(error);
        res.status(500);
    }
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
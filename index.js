import bodyParser from "body-parser"
import express from "express"
import axios from "axios"
import dotenv from "dotenv"


dotenv.config();
const API_KEY = process.env.API_KEY_NAME;
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({extended:"yes"}))
app.use(express.static("public"))


app.get("/", async (req,res)=>{  
 res.render("index.ejs")

})

app.post("/submit_form",async (req,res)=>{

    try{
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.countryName}&appid=${API_KEY}&units=metric`)
    res.render("index.ejs",{content:response.data})
   }catch(error){
    console.log(error.message)
   }
})





app.listen(port,()=>{
    console.log(`Connected ${port}`)
})
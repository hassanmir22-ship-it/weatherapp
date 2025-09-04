import bodyParser from "body-parser"
import express from "express"


const app = express()
const port = 3000
app.use(bodyParser.urlencoded({extended:"yes"}))
app.use(express.static("public"))

let bodyContent
app.get("/",(req,res)=>{
    res.render("index.ejs",{content:bodyContent})
})


app.post("/submit-form",(req,res)=>{
    bodyContent = req.body
    res.redirect("/")
})


app.listen(port,()=>{
    console.log(`Connected ${port}`)
})
const express = require("express")

const app = express()

app.use(express.json())
// in post man like data raw there is url encoder section which store this
app.use(express.urlencoded({extended:true}))

app.get("/myget",(req,res)=>{
    console.log(req.body)

    res.send(req.body)
})


app.listen(4500,()=>{
    console.log("Server is running at 4500")
})
const express = require("express")

const app  = express()
const port = 3000


//DB Connection
const conn = require("./db/conn")

conn()

app.listen(port, () =>{
    console.log('Server Online')
})
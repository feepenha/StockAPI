<<<<<<< HEAD
const mongoose = require('mongoose')

async function main(){

    try {
         await mongoose.connect("mongodb+srv://felipepenha32:h10Ry2bZ0oLWi604@estoqueapi.56ohs0d.mongodb.net/?retryWrites=true&w=majority&appName=EstoqueAPI")
         
         console.log("Banco Conectado")
         
    } catch (error) {
        console.log(`Erro: ${error}`)
    }


=======
require('dotenv').config();
const mongodbUri=process.env.MONGODB_URI

const mongoose = require('mongoose')

async function main(){
    
    try { 
        await mongoose.connect(mongodbUri)
        console.log("Banco Conectado")
        
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
    
    
>>>>>>> e1fe2dd (v0.1)
}

module.exports = main
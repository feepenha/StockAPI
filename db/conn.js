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
    
    
}

module.exports = main
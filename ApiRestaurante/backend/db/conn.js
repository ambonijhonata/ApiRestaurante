const mongoose = require("mongoose")

async function main(){
    try {
        mongoose.set("strictQuery", true)
        await mongoose.connect(
            "mongodb+srv://jhonata01amboni:uYvDhr5dYkgTvFCw@cluster0.xxotuwi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        )
        console.log("conectado no banco")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main
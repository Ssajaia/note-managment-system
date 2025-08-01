require('dotenv').config()
const mongoose = require("mongoose")

const connectDB =async ()=>{
    try{
        uri = process.env.DATABASE;
        if(!uri){console.log("given URI is incorrect")}
        await mongoose.connect(uri)
        console.log("Database connected")
    }
    catch(e){
        console.log("Database Can't connect because of ",e)
        process.exit(1)
    }
}

module.exports=connectDB

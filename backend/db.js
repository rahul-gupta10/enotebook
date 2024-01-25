const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/enotebook";

const connectMango = ()=>{
    mongoose.connect(mongoURI).then(()=>console.log("Connected successfully")).catch((e)=>console.log(e.message))
}


module.exports = connectMango
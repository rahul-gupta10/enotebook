const mongoose = require("mongoose");
const { Schema } = mongoose;
const notesSchema = new Schema({
    user:{
        type:String,
        
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    date:{
        type : Date,
        default : Date.now
    }
})
const notes = mongoose.model("notes",notesSchema);
module.exports = notes;
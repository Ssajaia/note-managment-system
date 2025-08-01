const mongoose = require("mongoose")
const noteSchema = new mongoose.Schema({
    title:String,
    content:String,
    tags:[String]
},{timestamps:true,collection:'NoteCollect'})

module.exports = mongoose.model('Note',noteSchema)

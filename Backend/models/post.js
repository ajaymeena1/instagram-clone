const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types
const Schema =  mongoose.Schema;


//SCHEMA
const postSchema = new Schema({
    
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true

    },
    postedBy:{
        type:ObjectId,
        ref:"insta"
    }
    });
    
 //Model   
const post = mongoose.model('post',postSchema);

module.exports = post;
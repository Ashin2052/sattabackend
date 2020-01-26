const mongoose=require('mongoose')

var mailSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    }
},
{
    timestamps:true
});

const mailModel = mongoose.model("mailSchema", mailSchema);
module.exports=mailModel;

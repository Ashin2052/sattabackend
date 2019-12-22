const mongoose=require('mongoose')

var placeSchema=new mongoose.Schema({
    placeName:{
        type:String,
        unique:true,
        required:true
    },
    placeAbbvr:{
        type:String,
        
    },
    placeTime:{
        type:String,
        required:true
    }
},
{
    timestamps:true
});

const placeModel = mongoose.model("placeSchema", placeSchema);
module.exports=placeModel;

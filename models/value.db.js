const mongoose=require('mongoose')

var valueSchema=new mongoose.Schema({
 
    placeName:{
        type:String,
        required:true
    },
    placeValue:{
        type:String,
        required:true
    },
   uploadedTime: {
       type:Number,
       default:null,
       required:true

    }
},
{
    timestamps:true
});

const valueModel = mongoose.model("valueSchema", valueSchema);
module.exports=valueModel;

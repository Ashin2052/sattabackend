const mongoose=require('mongoose')

var valueSchema=new mongoose.Schema({
    placeId:{
        type:String,
        required:true
    },
    placeValue:{
        type:String,
        required:true
    },
   uploadedTime: {
       type:Number,
       required:true

    }
},
{
    timestamps:true
});

const valueModel = mongoose.model("valueSchema", valueSchema);
module.exports=valueModel;

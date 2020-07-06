const mongoose=require('mongoose')

var firebaseSchema=new mongoose.Schema({
    token:{
        type:String,
        required:true
    },
    ip:
    {
        type:String
    }
},
{
    timestamps:true
});

const firebaseModel = mongoose.model("firebaseSchema", firebaseSchema);
module.exports=firebaseModel;

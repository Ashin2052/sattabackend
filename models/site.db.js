const mongoose=require("mongoose")
var siteSchema=new mongoose.Schema({
    wbeName:{
        type:String,
    },
  place:{
      type:String
  },
    Value:{
        type:Number
    }
   },
{
timestamps: true
}
);
const siteModel = mongoose.model("siteSchema", siteSchema);
module.exports=siteModel;
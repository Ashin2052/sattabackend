const mongoose=require("mongoose")
var siteSchema=new mongoose.Schema({
    siteName:{
        required:true,
        unique: true ,
        type:String        

    },
    siteValue:{
      type:[Object]
  },
  uploadedTime:{
      type:Number
  }
  
   },
{
timestamps: true
}
);
const siteModel = mongoose.model("siteSchema", siteSchema);
module.exports=siteModel;
const mongoose=require("mongoose")
var siteSchema=new mongoose.Schema({
    wbeName:{
        type:String,
    },
  place:{
      type:[Object]
  },
  
   },
{
timestamps: true
}
);
const siteModel = mongoose.model("siteSchema", siteSchema);
module.exports=siteModel;
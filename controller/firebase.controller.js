const Router=require('express').Router;
let router=Router();
const fireBaseModel = require("../models/firebase.db");
const axios = require('axios').default;

var tokenValidation=require('../utilities/tokenValidator')

router.post('/', async (req,res)=>
{
    let token = new fireBaseModel(req.body);
 await fireBaseModel.find({
    ip:req.body.ip
})
.then( d=>{
if(d)
{
    d.forEach(async e=>
        {
            await     fireBaseModel.findByIdAndDelete(e._id)
        })
  
}
})
token.save()
 .then(d=>res.json(d))
 .catch(e=>res.json(e));
})

router.post('/fire',tokenValidation.checkToken,(req,res)=>
{
  console.log(req.body)
    placeFunction.addPlace(req.body)
 .then(d=>res.json(d))
 .catch(e=>res.json(e));
})
module.exports=router;

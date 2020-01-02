const Router=require('express').Router;
let router=Router();
const placeFunction=require('../services/places.services')
var tokenValidation=require('../utilities/tokenValidator')


router.post('/',tokenValidation.checkToken,(req,res)=>
{
  console.log(req.body)
    placeFunction.addPlace(req.body)
 .then(d=>res.json(d))
 .catch(e=>res.json(e));
})


router.get('/',tokenValidation.checkToken,(req,res)=>
{
  placeFunction.getPlaceList()
  .then(d=>res.json(d))
 .catch(e=>{
   console.log(e,"messages")
   res.status(403).json({ e });
 });
})
router.get('/:id',tokenValidation.checkToken,(req,res)=>
{
  placeFunction.getParlicaulaPlace(req.params.id)
  .then(d=>res.json(d))
 .catch(e=>{
   console.log(e,"messages")
   res.status(403).json({ e });
 });
})
router.delete('/:id',tokenValidation.checkToken,(req,res)=>
{
placeFunction.deletePlace(req.params.id)
.then(d=>res.json(d))
.catch(e=>
  {
    res.status(403).json({e});
  })
})

router.put('/:id',tokenValidation.checkToken,(req,res)=>
{
placeFunction.updatePlace(req.body,req.params.id)
.then(d=>res.json(d))
.catch(e=>
  {
    res.status(403).json({e});
  })
})
module.exports=router;

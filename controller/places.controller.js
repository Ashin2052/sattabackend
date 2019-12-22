const Router=require('express').Router;
let router=Router();
const placeFunction=require('../services/places.services')
var tokenValidation=require('../utilities/tokenValidator')


router.post('/',(req,res)=>
{
    placeFunction.addPlace(req.body)
 .then(d=>res.json(d))
 .catch(e=>res.json(e));
})


router.get('/',(req,res)=>
{
  placeFunction.getPlaceList()
  .then(d=>res.json(d))
 .catch(e=>{
   console.log(e,"messages")
   res.status(403).json({ e });
 });
})
router.get('/:id',(req,res)=>
{
  placeFunction.getParlicaulaPlace(req.params.id)
  .then(d=>res.json(d))
 .catch(e=>{
   console.log(e,"messages")
   res.status(403).json({ e });
 });
})
router.delete('/:id',(req,res)=>
{
placeFunction.deletePlace(req.params.id)
.then(d=>res.json(d))
.catch(e=>
  {
    res.status(403).json({e});
  })
})

router.put('/:id',(req,res)=>
{
placeFunction.updatePlace(req.body,req.params.id)
.then(d=>res.json(d))
.catch(e=>
  {
    res.status(403).json({e});
  })
})
module.exports=router;

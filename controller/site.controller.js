const Router=require('express').Router;
let router=Router();
const siteFunction=require('../services/site.services')
var tokenValidation=require('../utilities/tokenValidator')


router.post('/',(req,res)=>
{
    siteFunction.addSite(req.body)
 .then(d=>res.json(d))
 .catch(e=>res.json(e));
})


router.get('/',(req,res)=>
{
  siteFunction.getSiteList()
  .then(d=>res.json(d))
 .catch(e=>{
   console.log(e,"messages")
   res.status(403).json({ e });
 });
})
router.get('/:id',(req,res)=>
{
  siteFunction.getParlicaulaSite(req.params.id)
  .then(d=>res.json(d))
 .catch(e=>{
   console.log(e,"messages")
   res.status(403).json({ e });
 });
})
router.delete('/:id',(req,res)=>
{
siteFunction.deleteSite(req.params.id)
.then(d=>res.json(d))
.catch(e=>
  {
    res.status(403).json({e});
  })
})

router.put('/:id',(req,res)=>
{
siteFunction.updateSite(req.body,req.params.id)
.then(d=>res.json(d))
.catch(e=>
  {
    res.status(403).json({e});
  })
})
module.exports=router;

const Router=require('express').Router;
let router=Router();
const siteFunction=require('../services/site.services')
var tokenValidation=require('../utilities/tokenValidator')


router.post('/',tokenValidation.checkToken,(req,res)=>
{
   siteFunction.addSite(req.body)
 .then(d=>res.json(d))
 .catch(e=>{
  res.status(403).json({ e });

 });
})


router.get('/',tokenValidation.checkToken,(req,res)=>
{
  siteFunction.getSiteList()
  .then(d=>res.json(d))
 .catch(e=>{
   console.log(e,"messages")
   res.status(403).json({ e });
 });
})
router.get('/allTodaySiteValues',(req,res)=>
{console.log(req.query.startDay)
    siteFunction.checkTodaySiteValue(req.query.startDay,req.query.endDay)  
    .then(d=>res.json(d))
 .catch(e=>{
   res.status(403).json({ e });
 });
})
router.get('/:id',tokenValidation.checkToken,(req,res)=>
{
  siteFunction.getParlicaulaSite(req.params.id)
  .then(d=>res.json(d))
 .catch(e=>{
   console.log(e,"messages")
   res.status(403).json({ e });
 });
})
router.delete('/:id',tokenValidation.checkToken,(req,res)=>
{
siteFunction.deleteSite(req.params.id)
.then(d=>res.json(d))
.catch(e=>
  {
    res.status(403).json({e});
  })
})

router.put('/:id',tokenValidation.checkToken,(req,res)=>
{
siteFunction.updateSite(req.body,req.params.id)
.then(d=>res.json(d))
.catch(e=>
  {
    res.status(403).json({e});
  })
})
module.exports=router;

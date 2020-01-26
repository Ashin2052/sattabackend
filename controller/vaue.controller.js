const Router=require('express').Router;
let router=Router();
const valueFunction=require('../services/vaue.services')
var tokenValidation=require('../utilities/tokenValidator')


router.post('/startEnd',(req,res)=>
{

valueFunction.addValue(req.body,req.query.startDay,req.query.endDay)
 .then(d=>res.json(d))
 .catch(e=>res.json(e));
})
router.get('/getByMonth',(req,res)=>
{
valueFunction.getByMonth(req.query.startOfMonth,req.query.endOfM)
 .then(d=>res.json(d))
 .catch(e=>res.json(e));
})
router.get('/startEnd',(req,res)=>
{

valueFunction.checkTodayValue(req.query.startDay,req.query.endDay)
 .then(d=>res.json(d))
 .catch(e=>res.json(e));
})

router.get('/',(req,res)=>
{
  valueFunction.getValueList()
  .then(d=>res.json(d))
 .catch(e=>{
   console.log(e,"messages")
   res.status(403).json({ e });
 });
})
router.get('/:id',(req,res)=>
{
  valueFunction.getParlicaulaValue(req.params.id)
  .then(d=>res.json(d))
 .catch(e=>{
   console.log(e,"messages")
   res.status(403).json({ e });
 });
})
router.delete('/:id',(req,res)=>
{
valueFunction.deleteValue(req.params.id)
.then(d=>res.json(d))
.catch(e=>
  {
    res.status(403).json({e});
  })
})

router.put('/:id',(req,res)=>
{
valueFunction.updateValue(req.body,req.params.id)
.then(d=>res.json(d))
.catch(e=>
  {
    res.status(403).json({e});
  })
})



module.exports=router;

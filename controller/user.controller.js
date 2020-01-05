const Router=require('express').Router;
let router=Router();
const userFunction=require('../services/user.services')
var tokenValidation=require('../utilities/tokenValidator')
var cors = require('cors')
 



  router.post('/signUp',tokenValidation.checkToken,(req,res)=>
  {
    userFunction.signUp(req.body)
   .then(d=>res.json(d))
   .catch(e=>res.json(e));
  })

  router.post('/login',(req,res)=>
  {
    console.log(req.body)
    userFunction.login(req.body)
   .then(d=>res.json(d))
   .catch(e=>{
     console.log(e,"messages")
     res.status(403).json({ message: e.message });
   });
  })

  router.get('/',tokenValidation.checkToken,(req,res)=>
  {
    userFunction.getUserList()
    .then(d=>res.json(d))
   .catch(e=>{
     console.log(e,"messages")
     res.status(403).json({ e });
   });
  })
router.delete('/:id',tokenValidation.checkToken,(req,res)=>
{
  console.log("deletelog")
  userFunction.deleteUser(req.params.id)
  .then(d=>res.json(d))
  .catch(e=>
    {
      res.status(403).json({e});
    })
})

router.put('/:id',tokenValidation.checkToken,(req,res)=>
{
  userFunction.updateUser(req.body,req.params.id)
  .then(d=>res.json(d))
  .catch(e=>
    {
      res.status(403).json({e});
    })
})
module.exports=router;

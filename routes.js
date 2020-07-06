const Router=require('express').Router;
let router=Router();
const userController=require('./controller/user.controller')
const placeController=require('./controller/places.controller')
const valueController=require('./controller/vaue.controller')
const siteController=require('./controller/site.controller')
const firebaseController=require('./controller/firebase.controller')

router.use('/rest/v1',userController);
router.use('/rest/v1/place',placeController);
router.use('/rest/v1/value',valueController);
router.use('/rest/v1/site',siteController);
router.use('/rest/v1/fire',firebaseController);
// router.use('/rest/v1/elements',elementController);

module.exports=router;

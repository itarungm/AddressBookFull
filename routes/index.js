var express = require('express');
var router = express.Router();
var userModel = require('../modules/user');
var getUserDetails = userModel.find({});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Address Book', msg:'' });
});

router.post('/', function(req, res, next) {
  var name=req.body.name;
  var email=req.body.email;
  var address=req.body.address;
  var number=req.body.phone;
 
  var userDetails = new userModel({
    name:name,
    email:email,
    address:address,
    number:number
  });
  userDetails.save((err,doc)=>{
    if(err) throw err;
  
    res.render('index',{title:"Address Book",msg:"Submitted Successfully !"})
    res.end();
  })
});

/* GET Users page. */
router.get('/users', function(req, res, next) {
  getUserDetails.exec((err,data)=>{
    if(err) throw err;
    console.log(data);
    res.render('users',{title: 'Address Book',records:data})
  })
 
});

module.exports = router;

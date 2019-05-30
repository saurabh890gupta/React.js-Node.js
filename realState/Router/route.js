const express = require('express');
const router1 = express.Router();
const control = require('../Controllers/control');
router1.get('/', control.Home );



router1.post('/api/signup',control.Signup);

router1.post("/api/login", control.Login);

router1.post("/api/propertydetail", control.Propertydetail);

router1.post("/api/propertyData", control.PropertyData);

router1.post("/api/adminlogin", control.AdminLogin);

router1.post("/api/contactfrm", control.Contactfrm);

router1.post("/api/delete", control.Delete);

router1.post("/api/deletesignup", control.Deletesignup);

router1.post("/api/signData", control.SignData);


module.exports = router1;
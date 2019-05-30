const express = require('express');
const app = express();
require('../config/dbconfig');
const async = require('async');
const mongoose = require('mongoose');
require('../Database/schema/users');
require('../Database/schema/property');
require('../Database/schema/admin');
require('../Database/schema/contact');
const user = mongoose.model('Users');
const admin = mongoose.model('Admin');
const contact = mongoose.model('Contact');
const propertySchemas = mongoose.model('propertySchema');
const multer  = require('multer');
const path = require('path');


/*
const storage       = multer.diskStorage({
    destination: function (req, file, callback) {
        console.log('all-files',file)
        callback(null, './public/files');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
        // callback(null, file.fieldname + '-' + file.originalname+ path.extname(file.originalname));
    }
});
var upload = multer({ storage : storage});

*/
 
module.exports.Home=(req, res)=>{
	res.render('home');
}

exports.Login = (req, res) => { 
    user.findOne({email:req.body.email, password:req.body.password})  
        .then((result)=>  {    
            if(result !=null){  
                console.log(result);   
                res.send("login successful");   
            }     
            else{     
                console.log(result);        
                res.send("unsuccessful");   
             }  
        })  
    .catch((err)=>{     
    console.log(err);       
    res.send("hello");  
    }) 
}

module.exports.Signup=(req,res)=>{
    user.findOne({email:req.body.usermail})  
        .then((result)=>  {    
            if(result !=null){  
                console.log("Sam", result);   
                res.send("user exist");   
            }     
            else{     
             async.series({
            user:function(callback){
                const mydata={


                user_name:req.body.username,
                email:req.body.usermail,
                password:req.body.userpass,
                address:req.body.useradd,
                contact:req.body.userContact,
                city:req.body.usercity,
                state:req.body.userstat,
            }
            new user(mydata).save()
            .then(data=>{
                res.send(data);
            })
                
            }
        })   

             }  
        })  
    .catch((err)=>{     
    console.log(err);       
    res.send("hello");  
    }) 
		
}


module.exports.Propertydetail=(req,res)=>{
        async.series({
            propertySchemas:function(callback){
                console.log('hello',req);
                const mypropertydata={


                profile_image: req.body.subpropertyimg,
                property_name:req.body.subpropertyname,
                property_price:req.body.subpropertyprice,
                telephone:req.body.subpropertyphone,
                property_description:req.body.subpropertydescreption,
                property_state:req.body.subselectstate,
                property_city:req.body.subselectcity,
                property_status:req.body.subselectstatus,
                property_perioud:req.body.subselectperioud,
                min_bed:req.body.subminbed,
                property_area:req.body.subpropertarea,
                swimmingpool:req.body.subswimming,
                stories:req.body.substories,
                emergencyexit:req.body.subemergencyexit,
                fireplace:req.body.subfireplace,
                laundryroom:req.body.sublaundryroom,
                jogpath:req.body.subjogpath,
                ceilings:req.body.subceiling,
                dualsinks:req.body.subdualsinks,
                choose_image:req.body.subproprtyimages,
                property_video1:req.body.subproprtyvideo1,
                property_video2:req.body.subproprtyvideo2,
                property_video3:req.body.subproprtyvideo3,
                accepttermandconditions:req.body.subcheckbox,
            }
            new propertySchemas(mypropertydata).save()
            .then(data=>{
                res.send(data);
            })
           .catch((err)=>{     
            console.log(err);       
            }) 

            }
        })
}


exports.PropertyData = (req, res) => { 
    try{
      propertySchemas.find()  
        .then((result)=>  {    
             res.send(result);   
            }     
            
        );
          
    }catch(err){     
         
    throw err;  
    }
}


exports.AdminLogin = (req, res) => { 
    admin.findOne({email:req.body.email, password:req.body.password})  
        .then((result)=>  {    
            if(result !=null){  
                console.log(result);   
                res.send("login successful");   
            }     
            else{     
                console.log(result);        
                res.send("unsuccessful");   
             }  
        })  
    .catch((err)=>{     
    console.log(err);       
    res.send("hello");  
    }) 
}

module.exports.Contactfrm=(req,res)=>{
        async.series({
           contact:function(callback){
                const mycontactdata={


              user_name:req.body.username,
              last_name:req.body.lastname,
                email:req.body.usermail,
                subject:req.body.subject,
                message:req.body.message,
            }
            new contact(mycontactdata).save()
            .then(data=>{
                res.send(data);
            })

            .catch((err)=>{     
            console.log(err);       
            }) 
                
            }
        })
}

exports.Delete=(req,res)=>{
    propertySchemas.remove({property_name:req.body.username})
    .then((result)=>{
        res.send("Done");
    })
    .catch((err)=>{
        console.log(err);
        res.send(err);
    })
}

exports.Deletesignup=(req,res)=>{
    user.remove({email:req.body.email})
    .then((result)=>{
        res.send("Done");
    })
    .catch((err)=>{
        console.log(err);
        res.send(err);
    })
}


exports.SignData = (req, res) => { 
    try{
      user.find()  
        .then((result)=>  {    
             res.send(result);   
            }     
            
        );
          
    }catch(err){     
         
    throw err;  
    }
}

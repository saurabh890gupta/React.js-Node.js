const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
var cors = require('cors')
const formidable    = require('formidable');
const multer  = require('multer');
const path = require('path');
const port = 4000;
const route1 = require('./Router/route');
const fs = require('fs-extra');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


const storage       = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/files');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
        // callback(null, file.fieldname + '-' + file.originalname+ path.extname(file.originalname));
    }
});

//add headers

app.use(function(req,res,next){
	
	//website you wish to allow to connect
	
	res.setHeader('Access-control-Allow-origin','http://localhost:3000');

	//Request methods you wish to allow to 
    res.setHeader('Access-control-Allow-Methods', 'GET ,POST,OPTIONS,PUT,PATCH,DELETE');

    //Request headers you wish to allow to 

 res.setHeader('Access-control-Allow-Headers', 'X-Requested-with,content-type');
 //Set to true if you need the website to include cookies in the requests sent
 //to the API (e.g. in case you use sessions)
 res.setHeader('Access-control-Allow-Credentials',true);
 // pass to next layer of middleware
 next();
});



var upload = multer({ storage : storage});

app.post('/api/imgupload', upload.single('myFile'), (req, res) => {
            console.log(req.file);
            var data = {
            	status : 200,
            	error : false,
            	message : '',
            	data : req.file
            }

            res.status(200).send(data);
        });



app.set('views', __dirname+ '/views');
app.set('view engine', 'ejs');
app.use('/', route1);

app.listen(port, ()=>{
	console.log(`server is started at port ${port}`);
})
const express  =require('express');
const app = express();
const mongoose =require('mongoose');


const mongo ='mongodb://localhost/realestate';
mongoose.connect(mongo);
mongoose.promise =global.promise;
const db =mongoose.connection;
db.on('error',console.error.bind(console,'mongodb connection error'));
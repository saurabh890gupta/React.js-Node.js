const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Admin = new Schema({
    id: String,
    user_type: String,
    user_name: String,
    email: String,
    password: String,
    city: String,
    state:String,
    contact: String,
    address:String,
    varification_token: String,
    account_status:Boolean
},{collection:'Admin'});

module.exports = mongoose.model('Admin',Admin);
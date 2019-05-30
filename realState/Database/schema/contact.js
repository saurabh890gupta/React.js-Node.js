const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Contact = new Schema({
    id: String,
    user_type: String,
    user_name: String,
    last_name: String,
    email: String,
    subject: String,
    message:String,
    varification_token: String,
    account_status:Boolean
},{collection:'Contact'});

module.exports = mongoose.model('Contact',Contact);
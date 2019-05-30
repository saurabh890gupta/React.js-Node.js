const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let user_detailSchema = new Schema({
    id: String,
    user_id: String,
    user_name: String,
    city: String,
    state:String,
    contact: String,
    address:String,
    time:Date
});

module.exports = user_detailSchema;
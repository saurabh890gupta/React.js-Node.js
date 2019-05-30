const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let user_detailSchema = new Schema({
    id: String,
    buyer_id: String,
    view:String
});

module.exports = user_detailSchema;
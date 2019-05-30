const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let imagesSchema = new Schema({
    id: String,
    property_id: String,
    images: String,
    time:Date
});

module.exports =imagesSchema;
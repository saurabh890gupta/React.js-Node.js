const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let facilitiesSchema = new Schema({
    id: String,
    property_id: String,
    facilities: String,
    time:Date
});

module.exports = facilitiesSchema;
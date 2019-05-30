const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let propertySchema = new Schema({
    id: String,
    users_id: String,
    profile_image:String,
    property_name: String,
    property_price: Number,
    telephone:Number,
    property_description:String,
    property_state:String,
    property_city: String,
    property_status:String,
    property_perioud:String,
     min_bed:String,
     property_area:Number,
    swimmingpool:String,
    stories:String,
    emergencyexit:String,
    fireplace:String,
    laundryroom:String,
    jogpath:String,
    ceilings:String,
    dualsinks:String,
    choose_image:String,
    property_video1:String,
     property_video2:String,
      property_video3:String,
      accepttermandconditions:String,
    time:Date,
    },{collection:'propertySchema'});

module.exports = mongoose.model('propertySchema',propertySchema);
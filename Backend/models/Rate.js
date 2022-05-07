const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RateSchema = new Schema({
    Rateid : {
        type : String,
        required:true
    },
    Userid : {
        type : String,
        required:true,
    },
    Username : {
        type : String,
        required:true,
    },
    Ratedate : {
        type : Date,
        default:Date.now
    },
    Rating : {
        type : Number,
        required:true,
    }

})

const Rate = mongoose.model("Rate",RateSchema);

module.exports = Rate;
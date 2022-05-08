const mongoose = require("mongoose");

const workingSchema = new mongoose.Schema({
    
    name: {
        type: String
    },
    empID: {
        type: Number,
        unique: true
    },
    salary: {
        type: Number,
        
    },
    leaveDays: {
        type: Number
    },
    allowence: {
        type: Number
    },
    epf: {
        type: Number
    },
    specials: {
        type: String
    }
});

const work = new mongoose.model("work",workingSchema);


module.exports = work;
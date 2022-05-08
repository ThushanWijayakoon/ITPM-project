const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    fristname: {
        type: String,
        default: "Not Entered",
        
    },
    phone: {
        type: String,
        default: "Not Entered",
        
    },
    role: {
        type: String,
      
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },    
    birthday: {
        type: String,
        default: "Not Entered",
    },
    address: {
        type: String,
        default: "Not Entered",
    },
    image: {
        type: String,
        default: "uploads\\1651942190402105114314.png"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)
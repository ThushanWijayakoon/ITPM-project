const mongoose = require("mongoose");



const DB= "mongodb+srv://sajith:saji123@cluster0.3fzlh.mongodb.net/Payroll?retryWrites=true&w=majority"

mongoose.connect(DB,{
  
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("payroll database connected successfully")).catch((error)=> console.log(error.message));
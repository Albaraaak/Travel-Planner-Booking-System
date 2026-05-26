const mongoose = require ('mongoose');
const userSchema = new mongoose.Schema({
    email :{
        type:String,
        required:true,
        unique:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
         type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true
    },
    location:{
        type:String,
        required:false
    },
    age:{  
        type:Number,
        required:false
    },
    role: {
  type: String,
  enum: ["user", "admin"],
  default: "user"
},
isVerified: {
  type: Boolean,
  default: false
},
verificationCode: {
  type: String
},
resetPasswordCode: {
  type: String,
},
resetPasswordExpires: {
  type: Date,
}
    
});
const User =mongoose.model ('User', userSchema)
module.exports = User;

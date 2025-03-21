

import mongoose from "mongoose";






const userSchema=mongoose.Schema({


name:{


    type:String,
    required:true,
},


email:{

type:String,
required:true

},

password:{

type:String,
required:true,


},


isAdmin:{

type:Boolean,
required:true,
default:false,


},


// {timestamp:true}











},{timestamps:true})



const User=mongoose.model('User',userSchema);


// User.find


export default User
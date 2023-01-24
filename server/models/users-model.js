const mongoose = require("mongoose");
const schema = mongoose.Schema;

const usersSchema=schema({
    userName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String,required:true},
    groups:[{type:schema.Types.ObjectId,ref:"group"}],
    avatar:{type:String,default:"",required:true}
})

module.exports=mongoose.model("user", usersSchema);
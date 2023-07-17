const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    Username:String,
    Email:String
},{
    versionKey:false
})

const UserModel=mongoose.model("user",userSchema);

module.exports={
    UserModel
}
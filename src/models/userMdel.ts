import mongoose, { Document, Schema } from "mongoose";

export interface userSchema extends Document{
    name?:string,
    email:string,
    password:string,
}

const users:Schema<userSchema> = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:[true, "Email Addess require"],
        unique:true,
    },
    password:{
        type:String,
        required:[true, "Password require"],
        unique:true,
    },
})

const userModel = mongoose.models.users || mongoose.model("users", users)

export default userModel
/**
 * Created by boris on 6/28/2017.
 */
const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')
//{PATH} will return the name of the object property e.g. username
const REQUIERED_VALIDATION_MESSAGE = '{PATH} is required'
let userSchema = new mongoose.Schema({
    username:{type:String, required:REQUIERED_VALIDATION_MESSAGE,unique:true},
    firstName:{type:String,required:REQUIERED_VALIDATION_MESSAGE},
    lastName:{type:String,required:REQUIERED_VALIDATION_MESSAGE},
    salt:{type:String},
    hashedPass:{type:String,},
    roles:[String]
})
userSchema.method({
    authenticate:(password)=>{
        return encryption.generateHashedPassword(this.salt,password)===this.hashedPass
    }
})
let User = mongoose.model('User',userSchema)
module.exports= User
module.exports.seedAdminUser = ()=>{
    User.find({}).then(users=>{
        if(users.length===0){
            let salt = encryption.generateSalt()
            let hashedPass = encryption.generateHashedPassword(salt,'bryD$uyh4')
            User.create({
                username:'admin',
                firstName:'admin',
                lastName:'admin',
                salt:salt,
                hashedPass:hashedPass,
                roles:['Admin']
            })
        }
    })
}
/**
 * Created by boris on 6/29/2017.
 */
const mongoose = require('mongoose')
const shortid = require('shortid')
//{PATH} will return the name of the object property e.g. username
const REQUIERED_VALIDATION_MESSAGE = '{PATH} is required'
let articleSchema = new mongoose.Schema({
    _id:{
        type:String,
        'default': shortid.generate
    },
    title:{
        type:String,
        required:REQUIERED_VALIDATION_MESSAGE
    },
    description:{
    type:String
    },
    creator:{
    type:String,
        required:true,
        ref:'User'
    }
})
let Article = mongoose.model('Article',articleSchema)
module.exports=Article
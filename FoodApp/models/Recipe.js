/**
 * Created by boris on 6/26/2017.
 */
const mongoose = require('mongoose')
let recipeSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    description: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    image: {
        type: mongoose.Schema.Types.String
    }
})
let Recipe = mongoose.model('Recipe', recipeSchema)
module.exports = Recipe
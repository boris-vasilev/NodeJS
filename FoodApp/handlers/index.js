/**
 * Created by boris on 6/25/2017.
 */
const homeHandler = require('./home')
const recipeHandler = require('./recipe')
module.exports = {
    home: homeHandler,
    recipe: recipeHandler
}
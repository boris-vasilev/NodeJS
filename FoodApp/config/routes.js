/**
 * Created by boris on 6/25/2017.
 */
const handlers = require('../handlers/index')
const multer = require('multer')
let upload = multer({dest:'./public/images'})
module.exports = (app) => {
    app.get('/', handlers.home.index)
    app.get('/about', handlers.home.about)
    app.get('/contact', handlers.home.contactUs)
    app.get('/recipe/add', handlers.recipe.addGet)
    app.post('/recipe/add',upload.single('recipeImage'), handlers.recipe.addPost)
    app.get('/recipe/all',handlers.recipe.allGet)
}
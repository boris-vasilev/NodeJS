/**
 * Created by boris on 6/2/2017.
 */
//REQUIRING HANDLERS
const file_handler =require('./file_handler.js')
const favicon_handler =require('./favicon_handler.js')
const homepage_handler =require('./homepage_handler.js')
const images_handler =require('./images_handler.js').func
let header_handler = require('./header_handler')
module.exports=[
    header_handler,
    homepage_handler,
    favicon_handler,
    images_handler,
    file_handler

]
/**
 * Created by boris on 6/28/2017.
 */
const express = require('express')
const handlebars = require('express-handlebars')
module.exports=(app)=>{
    app.engine('handlebars',handlebars({
        defaultLayout:'main'
    }))
    app.set('view engine','handlebars')
    app.use('/public',express.static('public'))
}
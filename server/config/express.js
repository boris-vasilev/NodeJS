/**
 * Created by boris on 6/28/2017.
 */
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')

const handlebars = require('express-handlebars')
module.exports=(app)=>{
    app.engine('handlebars',handlebars({
        defaultLayout:'main'
    }))
    app.set('view engine','handlebars')
    app.use(cookieParser())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(session({ secret: 'ywgyGTYFsd2*fy82734*&*#$Jdausdh',
        resave: false, saveUninitialized: false }))
    app.use(passport.initialize())
    app.use(passport.session())
    app.use('/public',express.static('public'))
}
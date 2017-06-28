/**
 * Created by boris on 6/28/2017.
 */
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const handlebars = require('express-handlebars')
mongoose.Promise = global.Promise
let env = process.env.NODE_ENV || 'development'
let port = process.env.PORT || 1337
app.engine('handlebars',{
    defaultLayout:'main'
})
app.set('view engine','handlebars')
app.use('/public',express.static('public'))
app.get('/', (req, res) => {
    mongoose
        .connect('mongodb://localhost:27017/generictemplate')
        .then(()=>{
        console.log('MongoDB is ready!')
        res.send('Hello')
        })
})
app.listen(port)
console.log(`Server listening on port ${port}`)
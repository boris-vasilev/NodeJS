/**
 * Created by boris on 6/25/2017.
 */
const express = require('express')
const app = express()
const config = require('./config/config')
//if no environment is set use development by default
let environment = process.env.NODE_ENV || 'development'
let port = 8888
// if no env is set it will use config.development configuration
require('./config/database.config')(config[environment])
require('./config/express')(app, config[environment])
require('./config/routes')(app)
app.listen(port, (err, app) => {
    if (err) {
        console.log(err)
    }
    console.log(`Server listening on port ${port}`)
})